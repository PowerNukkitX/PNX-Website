# 第五章 寻路器 - 实体的大脑

***author: daoge_cmd***

**Waiting for translation, if you are interested in translation, welcome to contribute.**


## 1.0 计算路径

寻路器负责为实体计算路径

对于每个实体，必须提供寻路器的实现

## 1.1.0 开始使用：为实体使用适合的寻路器

框架提供了两种寻路器实现，分别是：

- SimpleFlatAStarRouteFinder
- SimpleSpaceAStarRouteFinder

其中前者适用于陆地行走生物，后者适用于飞行/水下生物

具体区别是前者为2D A\*实现，后者是3D A\*实现

### 1.1.1 寻路点评估器

选择好了寻路器实现，接下来我们还需要提供一个寻路点评估器

寻路点评估器决定了一个坐标点是否能作为有效路径点（注：路径点即实体移动到此点时脚的位置）

通过提供特定的评估器，我们可以自定义寻路逻辑。例如我们可以让鱼只能在岩浆里游（笑）

寻路点评估器接口如下：

![image-20221215153546254](https://s2.loli.net/2022/12/15/5s3VWnGor7OK6pe.png)

请注意，**并不是两个方法都需要重写**，方法描述具体如下：

```evalStandingBlock()```：

```
返回此方块是否可以作为脚下站立的方块，通常用于返回整数坐标点（行走）的实体
如果此使用此评估器的寻路器只返回整数坐标点，才需要实现此方块。
```

```evalPos()```:

```
返回目标坐标是否可以作为路径点，通常用于返回非整数坐标点（飞行和游泳）的实体
如果此使用此评估器的寻路器返回非整数坐标点，才需要实现此方法。
```

简单说就是：

若此评估器是传给```SimpleFlatAStarRouteFinder```用的，只需要重写```evalStandingBlock()```方法，传入的方块为路径点垂直往下一格的方块

若此评估器是传给```SimpleSpaceAStarRouteFinder```用的，只需要重写```evalPos()```方法，传入的坐标直接就是路径点

## 1.2 操作寻路器

我们不需要直接操作寻路器计算路径。与控制器类似的，寻路器也通过读取memory完成工作

当然，考虑到操作寻路器应该是高频操作，```EntityIntelligent```类下有封装好的方法供你直接使用：

```java
public Vector3 getMoveTarget() {
    return getMemoryStorage().get(CoreMemoryTypes.MOVE_TARGET);
}

public void setMoveTarget(Vector3 moveTarget) {
    getMemoryStorage().put(CoreMemoryTypes.MOVE_TARGET, moveTarget);
}
```

设置完```moveTarget```后，寻路器会在接下来的几个gt计算新的路径并输出结果。若你注册了运动控制器```WalkController```/```SpaceMoveController```，则其将会读入数据并移动实体通过计算出来的路径到```moveTarget```

若设置```moveTarget```为```null```，相当于清除了移动目标，实体将会停止移动（即使已经计算出路径）

### 1.2.1 路径更新周期

在```moveTarget```非空的情况下，寻路器会每隔几个gt重新计算一次路径（周期与实体是否为热点实体以及世界整体卡顿程度有关）。

具体计算公式为：

```java
var period = ROUTE_UPDATE_CYCLE + (entity.level.tickRateOptDelay << 1);
if(!entity.isActive()) period = period << 2;
```

### 1.2.2 强制立即更新路径

尽管不推荐，但是确实在某些情况我们需要路径立即被更新

你可以通过调用```IBehaviorGroup.setForceUpdateRoute(boolean)```达到这个目的

但是请注意，过量使用此方法将会失去寻路调度器性能优化的好处，并导致性能下降
