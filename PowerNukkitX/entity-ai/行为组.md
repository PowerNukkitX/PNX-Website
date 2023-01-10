# 第六章 行为组 - 组件的集合

_**author: daoge_cmd**_

## 1.0 所有组件的容器

事实上，行为组```BehaviorGroup```并不只是行为的容器，其实际上包含了一类生物的全部逻辑组件，本章介绍的行为只是其组件的一部分。一个完整的行为组包含：

- 行为，核心行为
- 记忆存储
- 传感器
- 寻路器
- 控制器

### 1.0.1 一个完整的AI

行为组包含了所有组件，即行为组组成了一个完整的AI

生物在初始化时，会调用一次```requireBehaviorGroup()```方法，此方法返回的行为组实例将伴随此生物的整个生命周期

通过覆写```EntityIntelligent```类的```requireBehaviorGroup()```方法并返回自己的行为组实例，生物就可以获得自己的AI

### 1.0.2 单例性

对于每个生物，在其生命周期中只存在一个行为组实例

## 1.1 新建一个行为组

让我们将目光放到```BehaviorGroup```的构造函数上：

```java
@Builder
public BehaviorGroup(int startRouteUpdateTick, Set<IBehavior> coreBehaviors, Set<IBehavior> behaviors, Set<ISensor> sensors, Set<IController> controllers, SimpleRouteFinder routeFinder) {
    //此参数用于错开各个实体路径更新的时间，避免在1gt内提交过多路径更新任务
    this.currentRouteUpdateTick = startRouteUpdateTick;
    this.coreBehaviors = coreBehaviors;
    this.behaviors = behaviors;
    this.sensors = sensors;
    this.controllers = controllers;
    this.routeFinder = routeFinder;
    this.initPeriodTimer();
}
```

构造函数带有```@Builder```注解，我们推荐你使用Builder来初始化对象

