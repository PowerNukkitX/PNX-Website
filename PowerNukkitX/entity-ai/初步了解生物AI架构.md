# 初步了解生物AI架构

## 简介

PNX提供了一个完整的，高性能的，可扩展性强的，易上手的生物AI框架，整体架构借鉴了JE。

通过PNX提供的生物AI框架，你可以高效而简单的开发出自己的AI逻辑。

## 关于性能

测试机器硬件参数如下 (不同配置的机器实测结果可能不同)：

#### CPU:
![CPU INFO](./image/common/entity-ai/cpu-info.png)  

#### RAM:
![RAM INFO](./image/common/entity-ai/ram-info.png)  

我们使用超平坦进行测试，测试方法为比较相同羊数量的情况下的TPS（PNX中的羊AI拥有原版所有行为）。相同条件下与BDS的性能比较如下：

![PNX VS BDS](./image/common/entity-ai/pnx-vs-bds.png)

实测PNX在超平坦条件下可以在承载高达2600只羊的情况下以20TPS的速率运行（事实上在这个数量下客户端已经非常卡顿了）

## 基本设计思路

整个架构位于包`cn.nukkit.entity.ai`下：

![ENTITY-AI-PKG](./image/common/entity-ai/entity-ai-pkg.png)

在开始分析源码之前，笔者想先简单阐述下整个架构的设计思路

### 行为组
我们以羊为例，一只完整的羊拥有以下行为：

- 看向最近玩家
- 随机漫游
- 受到伤害时逃跑
- 跑向手里拿着小麦的玩家
- 吃草
- 交配

当然不难想到，我们可以将一只羊抽象成一个“行为组”,其由多个行为组成

### 行为优先级
理解到这点后，我们继续往下思考：对于一个正在执行的行为，它可以被一些行为打断，但不能被另一些行为打断。

我们举个例子，当一只羊发现它身边有拿着小麦的玩家时，它应该中断`随机漫游`行为，并切换到`跑向手里拿着小麦的玩家`行为。

然而如果这个拿着小麦的玩家攻击了这只羊，那么这只羊就应该停止跑向它并开始逃跑，也就是中断`跑向手里拿着小麦的玩家`并切换到`受到伤害时逃跑`行为

于是我们引入了行为优先级的概念，高优先级的行为可以中断低优先级的行为。以优先级从高到低重新排序后的羊行为列表如下:

- 受到伤害时逃跑
- 交配
- 跑向手里拿着小麦的玩家
- 吃草
- 看向最近玩家 & 随机漫游

你也许会疑惑为什么最后一行会同时存在`看向最近玩家`和`随机漫游`行为，事实上这两个行为的优先级是相同的，羊当然可以在漫游的同时看向最近的玩家，它们互不干扰。

### 对于单个行为
对于一个特定的行为，我们希望它能在恰当的时间开始生效，并在恰当的时间停止

事实上，一个行为由一个`评估器`和一个`执行器`组成，`评估器`负责检查当前是否应该激活行为，而`执行器`则负责进行具体的游戏内容以及决定何时停止行为

### 生物记忆和传感器
很多时候，生物的行为取决于外界，例如羊需要寻找距离最近的手里拿着小麦的玩家，需要记录攻击它的玩家和攻击时间，需要在吃草前先检查脚底是否有草可吃

于是我们很自然的引入了`传感器`和`记忆`的概念，传感器负责从外界收集信息，并以单个记忆的形式将收集到的信息写入实体的`记忆存储器`

当然，并不是所有的记忆都是由传感器主动写入的，实体也可以被动接受记忆，例如当玩家攻击实体时，会调用Entity::attack()方法，在此方法中会向实体写入包含攻击者和攻击时间的记忆，注意此时实体是被动接受的，而不是由传感器主动写入。

行为可以通过读取实体记忆来获得信息

## 从源码层面分析

所有实现了AI的生物都应该继承类`cn.nukkit.entity.EntityIntelligent`

### 行为组

行为组相关代码位于包`cn.nukkit.entity.ai.behaviorgroup`中，其中`IBehaviorGroup`为我们需要关注的接口类

其详细如下：

```java
/**
 * 行为组是一个基本的、独立的AI单元
 * 它由若干个（核心）行为{@link IBehavior}、控制器{@link IController}、传感器{@link ISensor}以及一个寻路器{@link IRouteFinder}和记忆存储器{@link IMemoryStorage}组成
 * 注：核心行为指的是不会被行为优先级影响的行为，其激活状态只取决于其自身的评估器
 */
@PowerNukkitXOnly
@Since("1.6.0.0-PNX")
public interface IBehaviorGroup {

    /**
     * 调用行为组内部的所有行为{@link IBehavior}的评估器{@link cn.nukkit.entity.ai.evaluator.IBehaviorEvaluator}
     *
     * @param entity 目标实体对象
     */
    void evaluateBehaviors(EntityIntelligent entity);

    /**
     * 调用行为组内部的所有核心行为{@link IBehavior}的评估器{@link cn.nukkit.entity.ai.evaluator.IBehaviorEvaluator}
     *
     * @param entity 目标实体对象
     */
    void evaluateCoreBehaviors(EntityIntelligent entity);

    /**
     * 调用行为组内部的所有传感器{@link ISensor}，并将传感器返回的记忆{@link cn.nukkit.entity.ai.memory.IMemory}写入到记忆存储器中{@link IMemoryStorage}
     *
     * @param entity 目标实体对象
     */
    void collectSensorData(EntityIntelligent entity);

    /**
     * 调用行为组内部所有被激活的行为{@link IBehavior}的执行器{@link cn.nukkit.entity.ai.executor.IBehaviorExecutor}
     *
     * @param entity 目标实体对象
     */
    void tickRunningBehaviors(EntityIntelligent entity);

    /**
     * 调用行为组内部所有被激活的核心行为{@link IBehavior}的执行器{@link cn.nukkit.entity.ai.executor.IBehaviorExecutor}
     *
     * @param entity 目标实体对象
     */
    void tickRunningCoreBehaviors(EntityIntelligent entity);

    /**
     * 应用行为内部所有的控制器{@link IController}
     *
     * @param entity 目标实体对象
     */
    void applyController(EntityIntelligent entity);

    /**
     * @return 行为组包含的行为 {@link IBehavior}
     */
    Set<IBehavior> getBehaviors();

    /**
     * @return 行为组包含的核心行为 {@link IBehavior}
     */
    Set<IBehavior> getCoreBehaviors();

    /**
     * @return 被激活的行为 {@link IBehavior}
     */
    Set<IBehavior> getRunningBehaviors();

    /**
     * @return 被激活的核心行为 {@link IBehavior}
     */
    Set<IBehavior> getRunningCoreBehaviors();

    /**
     * @return 行为组包含的传感器 {@link ISensor}
     */
    Set<ISensor> getSensors();

    /**
     * @return 行为组包含的控制器 {@link IController}
     */
    Set<IController> getControllers();

    /**
     * @return 行为组使用的寻路器 {@link IRouteFinder}
     */
    IRouteFinder getRouteFinder();

    /**
     * 通过行为组使用的寻路器更新当前位置到目标位置路径
     *
     * @param entity 目标实体
     */
    void updateRoute(EntityIntelligent entity);

    /**
     * @return 行为组的记忆存储器 {@link IMemoryStorage}
     */
    IMemoryStorage getMemoryStorage();

    /**
     * @return 下一gt是否强制更新路径
     */
    boolean isForceUpdateRoute();

    /**
     * 要求下一gt立即更新路径
     *
     * @param forceUpdateRoute
     */
    void setForceUpdateRoute(boolean forceUpdateRoute);
}
```

行为组为整个AI框架的核心，接下来我们开始分析单个AI个体的完整运行流程

我们将目光聚焦到类`EntityIntelligent`的`onUpdate()`方法和`asyncPrepare()`方法上：

其具体实现如下:

```java

/**
 * {@code EntityIntelligent}抽象了一个具有行为组{@link IBehaviorGroup}（也就是具有AI）的实体
 */
@PowerNukkitXOnly
@Since("1.6.0.0-PNX")
@Getter
@Setter
public abstract class EntityIntelligent extends EntityPhysical {
    //...省略其他方法...

    @Override
    public boolean onUpdate(int currentTick) {
        super.onUpdate(currentTick);
        var behaviorGroup = getBehaviorGroup();
        behaviorGroup.tickRunningCoreBehaviors(this);
        behaviorGroup.tickRunningBehaviors(this);
        behaviorGroup.applyController(this);
        return true;
    }

    /**
     * 我们将行为组运行循环的部分工作并行化以提高性能
     */
    @Override
    public void asyncPrepare(int currentTick) {
        super.asyncPrepare(currentTick);
        if (needsRecalcMovement) { // 每次要重新计算实体运动时，都重新计算一次是否活跃
            isActive = level.isHighLightChunk(getChunkX(), getChunkZ());
        }
        var behaviorGroup = getBehaviorGroup();
        //No behavior group
        if (behaviorGroup == null)
            return;
        if (needsRecalcMovement) {
            behaviorGroup.collectSensorData(this);
            behaviorGroup.evaluateCoreBehaviors(this);
            behaviorGroup.evaluateBehaviors(this);
            behaviorGroup.updateRoute(this);
        }
    }

    //...省略其他方法...
}
```

不难看出，除了行为的运行和运动控制是在`onUpdate()`方法中完成的，大部分工作都被放入到`asyncPrepare()`方法中并行化完成，这种高并发的设计使得PNX可以更好的利用多核

我们将目光聚焦到方法`asyncPrepare()`上，其主要做了以下事情：

- `behaviorGroup.collectSensorData(this);` 调用传感器从环境中收集信息，传感器负责将信息以记忆的形式写入记忆存储器
- `behaviorGroup.evaluateCoreBehaviors(this);` 调用核心行为的评估函数，注意核心行为不存在优先级的概念，不会相互覆盖
- `behaviorGroup.evaluateBehaviors(this);` 调用行为的评估函数，找出评估成功且优先级最高的行为
- `behaviorGroup.updateRoute(this);` 通过行为组使用的寻路器更新当前位置到目标位置的路径

`asyncPrepare()`方法保证会在`onUpdate()`方法前全部执行完毕。在`onUpdate()`方法中我们将会：

- `behaviorGroup.tickRunningCoreBehaviors(this);` 调用被激活的核心行为的运行函数
- `behaviorGroup.tickRunningBehaviors(this);` 调用被激活的行为的运行函数
- `behaviorGroup.applyController(this);` 调用运动控制器以处理运动请求

注意，对于每个生物实例，行为组,其中包含的行为，传感器，控制器，记忆存储器等应只会实例化一次，我们通过EntityIntelligent的`getBehaviorGroup()`方法来获取行为组实例。

此方法默认返回一个`静态EmptyBehaviorGroup对象`，调用此对象的方法不会产生任何作用。如果你想要你的生物拥有AI，请覆写此方法。

以下代码为羊的例子实现：

```java
public class EntitySheep extends EntityWalkingAnimal {
    //...省略其他内容...
    
    private final IBehaviorGroup behaviorGroup = new BehaviorGroup(
            this.tickSpread,
            Set.of(
                    //用于刷新InLove状态的核心行为
                    new Behavior(
                            new InLoveExecutor(400),
                            new AllMatchEvaluator(
                                    new PassByTimeEvaluator<>(PlayerBreedingMemory.class,0,400),
                                    new PassByTimeEvaluator<>(InLoveMemory.class,6000,Integer.MAX_VALUE,true)
                            ),
                            1,1
                    )
            ),
            Set.of(
                    new Behavior(new RandomRoamExecutor(0.5f, 12, 40, true,100,true,10), new PassByTimeEvaluator<>(AttackMemory.class,0,100), 6, 1),
                    new Behavior(new EntityBreedingExecutor<>(EntitySheep.class,16,100,0.5f), entity -> entity.getMemoryStorage().get(InLoveMemory.class).isInLove(),5,1),
                    new Behavior(new MoveToTargetExecutor(NearestBeggingPlayerMemory.class, 0.3f), new MemoryCheckNotEmptyEvaluator(NearestBeggingPlayerMemory.class), 4, 1),
                    new Behavior(new EatGrassExecutor(40), new AllMatchEvaluator(
                            new AnyMatchEvaluator(
                                    new AllMatchEvaluator(
                                            entity -> entity instanceof EntityAnimal animal && !animal.isBaby(),
                                            new ProbabilityEvaluator(1,100)
                                    ),
                                    new AllMatchEvaluator(
                                            entity -> entity instanceof EntityAnimal animal && animal.isBaby(),
                                            new ProbabilityEvaluator(43,50)
                                    )
                            ),
                            new AnyMatchEvaluator(
                                    new BlockCheckEvaluator(Block.GRASS,new Vector3(0,-1,0)),
                                    new BlockCheckEvaluator(Block.TALL_GRASS,Vector3.ZERO))),
                            3,1,100
                    ),
                    new Behavior(new LookAtTargetExecutor(NearestPlayerMemory.class,100), new ProbabilityEvaluator(4,10), 1, 1,100),
                    new Behavior(new RandomRoamExecutor(0.15f, 12, 100, false,-1,true,10), (entity -> true), 1, 1)
            ),
            Set.of(new NearestBeggingPlayerSensor(8, 0), new NearestPlayerSensor(8, 0,20)),
            Set.of(new WalkController(), new LookController(true, true)),
            new SimpleFlatAStarRouteFinder(new WalkingPosEvaluator(), this)
    );

    @Override
    public IBehaviorGroup getBehaviorGroup() {
        return behaviorGroup;
    }
    
    //...省略其他内容...
}
```