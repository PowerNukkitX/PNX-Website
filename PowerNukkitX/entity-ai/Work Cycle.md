# 第七章 工作周期

_**author: daoge_cmd**_

**Waiting for translation, if you are interested in translation, welcome to contribute.**


了解完所有组件后，我们最后来研究下AI的工作周期

## 1.0 什么是工作周期

在开始内容之前，我们先明确下工作周期的概念

工作周期，类似于游戏刻```gametick```，在一个工作周期中，AI会完成包括但不限于以下内容：

- 获取传感器数据
- 计算行为优先级，tick行为，核心行为
- 运行运动控制器
- 更新路径
- ......

其中一些工作是并行进行的，一些不是，我们需要结合源码继续介绍：

## 1.1 onUpdate()方法与asyncPrepare()方法

```asyncPrepare()```方法在实体之间并行运行，而```onUpdate()```方法并不会。两个方法完成了一个工作周期的全部内容

详细如下：

```asyncPrepare()```：

```java
@Override
public void asyncPrepare(int currentTick) {
    if (needsRecalcMovement) { // 每次要重新计算实体运动时，都重新计算一次是否活跃
        isActive = level.isHighLightChunk(getChunkX(), getChunkZ());
    }
    if (!this.isImmobile()) { // immobile会禁用实体AI
        var behaviorGroup = getBehaviorGroup();
        if (behaviorGroup == null) return;
        if (needsRecalcMovement) {
            behaviorGroup.collectSensorData(this);
            behaviorGroup.evaluateCoreBehaviors(this);
            behaviorGroup.evaluateBehaviors(this);
            behaviorGroup.updateRoute(this);
        }
    }
    super.asyncPrepare(currentTick);
}
```

```onUpdate()```：

```java
@Override
public boolean onUpdate(int currentTick) {
    if (!this.isImmobile()) {
        var behaviorGroup = getBehaviorGroup();
        behaviorGroup.tickRunningCoreBehaviors(this);
        behaviorGroup.tickRunningBehaviors(this);
        behaviorGroup.applyController(this);
        if (EntityAI.DEBUG) behaviorGroup.debugTick(this);
    }
    return super.onUpdate(currentTick);
}
```

```asyncPrepare()```方法保证会在```onUpdate()```方法执行前被执行

整理一下，我们可以总结出在一个工作周期中先后做了哪些事：

- 【并行】1 收集传感器信息（调用已注册传感器的```sense()```方法）
- 【并行】2 调用所有核心行为的评估器
- 【并行】3 调用所有行为的评估器
- 【并行】4 更新路径
- 5 运行激活核心行为的执行器
- 6 运行激活行为的执行器
- 7 调用运动控制器
- 【调试】8 debugTick

## 1.2 题外话： 关于调试模式

框架存在一个“DEBUG模式”，在此模式下，生物名称将显示当前行为运行情况，当你拿木棍右键实体时将出现一个弹窗，显示有关此实体的信息

你可以通过设置```nukkit.yml```中的```debug.commands```为```true```并在游戏中使用命令```/debug entity true```来开启调试模式
