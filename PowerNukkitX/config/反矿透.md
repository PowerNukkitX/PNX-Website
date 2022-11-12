# 反矿透

反矿透是PowerNukkitX中内置的一个防作弊功能，它可以防止玩家通过X-ray等透视到地底的矿物方块，俗称假矿。  
PowerNukkitX中的反矿透使用多核并行混淆算法，在有效防玩家透视作弊的同时不会给您的服务器带来过大的性能开销。  

## 如何开启反矿透

在`nukkit.yml`服务器配置文件中，找到`anti-xray`的配置项，将子项`enabled`设置为`true`，若不存在请手动添加子项。  
如果`anti-xray`配置项也不存在，请在配置文件最后另起一行添加如下内容：

```yaml
anti-xray:
  world-name:
    enabled: true
    level: low
    pre-deobfuscate: true
```

请记得将`world-name`换成您的世界的真实名称，默认世界名称为`world`。

如果您有多个世界，您可以为它们分别配置反矿透选项：

```yaml
anti-xray:
  world: # 默认主世界
    enabled: true
    level: low
    pre-deobfuscate: true
  nether: # 默认下界
    enabled: true
    level: middle
    pre-deobfuscate: true
  the_end: # 默认末路之地
    enabled: true
    level: high
    pre-deobfuscate: false
```

## 配置解释

| 配置项             | 说明            | 可选项             |
|-----------------|---------------|-----------------|
| enabled         | 是否开启反矿透       | true/false      |
| level           | 反矿透等级，越高假矿越多  | low/middle/high |
| pre-deobfuscate | 是否预先消除玩家周围的假矿 | true/false      |

## 反矿透等级  

反矿透有三个等级：`low`，`middle`，`high`。  

等级越高，假矿越多，玩家越难以从一堆假矿中分辨出真矿。  

### low  

![zPWsFf.md.jpg](https://s1.ax1x.com/2022/11/12/zPWsFf.md.jpg)

### middle

![zPWDTP.md.jpg](https://s1.ax1x.com/2022/11/12/zPWDTP.md.jpg)

### high

![zPWBwt.md.jpg](https://s1.ax1x.com/2022/11/12/zPWBwt.md.jpg)

## 预先消除假矿  

PNX的假矿都是虚拟假矿，每次进服时假矿位置都不同，每个玩家看到的假矿位置也不同。  

假矿不会生成在玩家能直接看到的表面，所以玩家正常情况下不可能看到假矿。  
但是，在服务器网络连接较差时，玩家如果破坏方块的速度很快，会看到假矿闪现在屏幕中，这会影响游戏体验。
所以，我们可以通过开启预先消除假矿功能，将玩家周围的假矿预先消除掉，这样玩家就不会看到假矿闪现在屏幕中了。  

请注意，这个功能会对网络造成更大的压力，所以强烈建议配合硬件加速压缩和较高的压缩率使用此功能。
