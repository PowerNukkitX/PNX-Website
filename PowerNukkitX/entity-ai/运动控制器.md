# 第四章 运动控制器 - 处理实体运动的核心

***author: daoge_cmd***

## 1.0 控制实体运动

运动控制器是用来控制实体的行为的，比如移动、跳跃、攻击等等的具体实现。

对于不同实体，可以提供不同的控制器，以实现上述行为的特殊实现。

## 1.1 工作流程

控制器非常简单，其接口只有一个方法：

![image-20221215150633863](https://s2.loli.net/2022/12/15/axcKRQHtb4urX9E.png)

```control```方法每gt会被调用一次，处理实体移动

## 1.2 通过操作记忆控制控制器

控制器通过读取特定的memory完成工作

拿羊举例，其使用的两个控制器```LookController```,```WalkController```使用到了以下的几个memory：

```java
MemoryType<Vector3> LOOK_TARGET = new MemoryType<>("minecraft:look_target");
MemoryType<Vector3> MOVE_TARGET = new MemoryType<>("minecraft:move_target");
MemoryType<Vector3> MOVE_DIRECTION_START = new MemoryType<>("minecraft:move_direction_start");
MemoryType<Vector3> MOVE_DIRECTION_END = new MemoryType<>("minecraft:move_direction_end");
MemoryType<Boolean> SHOULD_UPDATE_MOVE_DIRECTION = new MemoryType<>("minecraft:should_update_move_direction", false);
MemoryType<Boolean> ENABLE_PITCH = new MemoryType<>("minecraft:enable_pitch", true);
```

## 1.3 介绍：默认的几个控制器

核心已经自带了几个控制器，在大多数情况下，你可以直接拿来使用：

- WalkController 适用于行走在陆地上的生物，控制实体移动
- SpaceMoveController 适用于天上飞/水里游的生物，控制实体移动
- LookController 控制实体身体/头部的yaw和pitch