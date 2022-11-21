# 源码相关

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

    private IBehaviorGroup behaviorGroup;
    
    @Override
    public IBehaviorGroup getBehaviorGroup() {
        if (behaviorGroup == null){
            behaviorGroup = new BehaviorGroup(
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
        }
        return behaviorGroup;
    }
    
    //...省略其他内容...
}
```

### 行为

行为相关代码位于以下包中
- `cn.nukkit.entity.ai.behavior`
- `cn.nukkit.entity.ai.executor`
- `cn.nukkit.entity.ai.evaluator`

上一节中我们已经了解到，行为是由一个评估器和一个执行器组成的

有三个比较重要的接口我们需要查看。话不多说，直接上代码：

#### IBehaviorEvaluator (评估器接口):
```java
/**
 * 此接口抽象了一个行为评估器 <br/>
 * 决定是否激活与其绑定的执行器
 */
@PowerNukkitXOnly
@Since("1.6.0.0-PNX")
public interface IBehaviorEvaluator {

    /**
     * 是否需要激活与其绑定的执行器
     *
     * @param entity 评估目标实体
     * @return 是否需要激活
     */
    boolean evaluate(EntityIntelligent entity);
}
```

#### IBehaviorExecutor (执行器接口):
```java
    /**
 * 行为执行器<br>
 * 在实体上执行具体的行为<br>
 * 对于每个实例化的实体，此对象应只会实例化一次，且一直伴随实体不会改变
 */
@PowerNukkitXOnly
@Since("1.6.0.0-PNX")
public interface IBehaviorExecutor {

    /**
     * 调度器将会持续执行此执行器，直到返回false，或者执行器被中断<br>
     * 此方法每gt都会调用
     *
     * @param entity 执行目标实体
     * @return boolean
     */
    boolean execute(EntityIntelligent entity);

    /**
     * 行为非正常中断时(例如被更高级行为覆盖)调用
     *
     * @param entity 目标实体
     */
    default void onInterrupt(EntityIntelligent entity) {
    }

    /**
     * 行为评估成功后，进入激活状态前调用
     *
     * @param entity 目标实体
     */
    default void onStart(EntityIntelligent entity) {
    }

    /**
     * 行为正常结束时(execute()方法返回false)调用
     *
     * @param entity 目标实体
     */
    default void onStop(EntityIntelligent entity) {
    }
}
```

#### IBehavior (行为接口):
```java
/**
 * 此接口抽象了一个行为对象，作为行为组{@link IBehaviorGroup}的组成部分
 */
@PowerNukkitXOnly
@Since("1.6.0.0-PNX")
public interface IBehavior extends IBehaviorExecutor, IBehaviorEvaluator {

    /**
     * 返回此行为的优先级，高优先级的行为会覆盖低优先级的行为
     *
     * @return 优先级
     */
    default int getPriority() {
        return 1;
    }

    /**
     * 返回此行为的权重值，高权重的行为有更大几率被选中
     *
     * @return 权重值
     */
    default int getWeight() {
        return 1;
    }

    /**
     * 返回此行为的刷新周期，小的刷新周期会使得评估器被更频繁的调用
     * 注意此方法只会影响评估器的调用，而不会影响执行器的调用
     *
     * @return 刷新周期
     */
    default int getPeriod() {
        return 1;
    }

    /**
     * @return 此行为当前的状态
     */
    BehaviorState getBehaviorState();

    /**
     * 设置此行为的状态
     *
     * @param state 状态
     */
    void setBehaviorState(BehaviorState state);
}
```

`IBehavior`接口继承了`IBehaviorExecutor`和`IBehaviorEvaluator`接口，即`行为是由一个评估器和一个执行器组成的`

在实际编写行为逻辑时，我们并不会直接编写类实现`IBehavior`接口，而是使用类`cn.nukkit.entity.ai.behavior.Behavior`

`Behavior`类的构造函数要求提供`IBehaviorExecutor`和`IBehaviorEvaluator`接口的实现类，在运行时会代理两个实现类的方法：

```java
/**
 * 单个的行为对象<br>
 * 包含一个执行器和一个评估器，行为对象委托了它们的方法
 */
@PowerNukkitXOnly
@Since("1.6.0.0-PNX")
@Getter
public class Behavior extends AbstractBehavior {

    protected final int priority;
    protected final int weight;
    protected final int period;
    protected IBehaviorExecutor executor;
    protected IBehaviorEvaluator evaluator;

    public Behavior(IBehaviorExecutor executor, IBehaviorEvaluator evaluator) {
        this(executor, evaluator, 1);
    }

    public Behavior(IBehaviorExecutor executor, IBehaviorEvaluator evaluator, int priority) {
        this(executor, evaluator, priority, 1);
    }

    public Behavior(IBehaviorExecutor executor, IBehaviorEvaluator evaluator, int priority, int weight) {
        this(executor, evaluator, priority, weight, 1);
    }


    public Behavior(IBehaviorExecutor executor, IBehaviorEvaluator evaluator, int priority, int weight, int period) {
        this.executor = executor;
        this.evaluator = evaluator;
        this.priority = priority;
        this.weight = weight;
        this.period = period;
    }

    @Override
    public boolean evaluate(EntityIntelligent entity) {
        return evaluator.evaluate(entity);
    }

    @Override
    public boolean execute(EntityIntelligent entity) {
        return executor.execute(entity);
    }

    @Override
    public void onStart(EntityIntelligent entity) {
        executor.onStart(entity);
    }

    @Override
    public void onInterrupt(EntityIntelligent entity) {
        executor.onInterrupt(entity);
    }

    @Override
    public void onStop(EntityIntelligent entity) {
        executor.onStop(entity);
    }
}
```

这种设计模式增强了灵活性，同时体现出了一种模块化思想，即我们可以随意组合现有的评估器和执行器，通过简单的组合来获得一个全新的行为

### 传感器

传感器相关代码位于包`cn.nukkit.entity.ai.sensor`中

#### ISensor (传感器接口)：
```java
/**
 * 此接口抽象了一个传感器 <br/>
 * 传感器用于搜集环境信息并向记忆存储器{@link cn.nukkit.entity.ai.memory.IMemoryStorage}写入一个记忆{@link IMemory}
 */
@PowerNukkitXOnly
@Since("1.6.0.0-PNX")
public interface ISensor {

    /**
     * @param entity 目标实体
     */
    void sense(EntityIntelligent entity);

    /**
     * 返回此传感器的刷新周期，小的刷新周期会使得传感器被更频繁的调用
     *
     * @return 刷新周期
     */
    default int getPeriod() {
        return 1;
    }
}
```

当sensor()方法被调用时，传感器应向上一节所说的向实体写入记忆。由于此接口较为简单，故不在过多叙述

### 记忆以及记忆存储器

相关代码位于包`cn.nukkit.entity.ai.memory`中

#### IMemory<T> (记忆单元接口)：
```java
/**
 * 实体记忆对象，表示单个实体记忆数据
 * 可被存储到记忆存储器{@link IMemoryStorage}中
 * <p>
 * 注意，对于此接口的所有实现类，都必须有一个无参构造函数，返回一个代表此记忆的空记忆
 *
 * @param <T> 包含的数据类型
 */
@PowerNukkitXOnly
@Since("1.6.0.0-PNX")
public interface IMemory<T> {

    /**
     * @return 此记忆中包含的数据
     */
    @Nullable
    T getData();

    void setData(@Nullable T data);

    default boolean hasData() {
        return getData() != null;
    }
}
```

泛型<T>用于指定单元中存储的值类型。

需要特别注意的是，对于此接口的每个实现类，都必须要有一个无参构造函数，返回一个代表此记忆的空记忆(即`hasData()`必须返回false)，具体原因将在介绍记忆存储器的时候说明

#### IMemoryStorage (记忆存储器接口)：
```java
/**
 * 此接口抽象了一个记忆存储器 <br/>
 * 记忆存储器用于存储多个记忆单元{@link IMemory}
 */
@PowerNukkitXOnly
@Since("1.6.0.0-PNX")
public interface IMemoryStorage {
    void put(IMemory<?> memory);

    <T extends IMemory<?>, R extends Class<T>> T get(R memoryClazz);

    <T extends IMemory<?>> void clear(Class<T> memoryClazz);

    <T extends IMemory<?>> boolean isEmpty(Class<T> memoryClazz);

    <T extends IMemory<?>> boolean notEmpty(Class<T> memoryClazz);

    <R, T extends IMemory<R>> boolean checkData(Class<T> memoryClazz, R data);

    <R, T extends IMemory<R>> void setData(Class<T> memoryClazz, R data);

    <R, T extends IMemory<R>> R getData(Class<T> memoryClazz);
}
```

没有什么好说的，我们主要需要重点关注的是它的实现类`BehaviorStorage`的`get()`方法：

```java
/**
 * 记忆存储器的标准实现
 */
@PowerNukkitXOnly
@Since("1.6.0.0-PNX")
@Getter
@Log4j2
public class MemoryStorage implements IMemoryStorage {
    
    //。。。省略其他方法。。。

    protected ConcurrentHashMap<Class<? extends IMemory<?>>, IMemory<?>> memoryMap = new ConcurrentHashMap<>();

    @Override
    public <T extends IMemory<?>, R extends Class<T>> T get(R memoryClazz) {
        T memory = (T) memoryMap.get(memoryClazz);
        if (memory == null) {
            try {
                //若未找到指定记忆，则通过反射新建一个空记忆
                memory = memoryClazz.getDeclaredConstructor().newInstance();
            } catch (Throwable e) {
                log.error("Failed to create memory instance, declared constructor not found!", e);
            }
            put(memory);
        }
        return memory;
    }

    //。。。省略其他方法。。。
}
```

我们注意到，在`get()`方法中，若存储器未在map中找到指定的记忆单元，将会通过反射调用记忆单元的无参构造器新建一个记忆单元，这就是为什么上面我们讲到`对于此接口的每个实现类，都必须要有一个无参构造函数`

这样做使得单个类型的记忆单元可被重复使用，减少GC次数。这在生物AI这种实例数非常大（事实上单端生物数量上千非常常见）的场景下是非常有意义的

### 小结

本章对架构源码做了简单阐述。在下一节中我们将介绍运动控制器(`IController`)和寻路器(`IRouteFinder`)及其使用，并结以上内容实现一个僵尸攻击玩家的AI!