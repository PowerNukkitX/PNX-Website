# 常见开发问题  

## invokeMember (getDamager) on cn.nukkit.event.entity.EntityDamageEvent failed due to: Unknown identifier: getDamager  

这是由于错误地把`EntityDamageEvent`事件当作`EntityDamageByEntityEvent`并执行了`getDamager`方法造成的，通常
是由于监听了`cn.nukkit.event.entity.EntityDamageByEntityEvent`，但是部分插件会混发事件造成的。  

解决方法：使用`instanceof`在事件回调函数中判断事件种类。  

```javascript
import { PowerNukkitX, EventPriority } from ":powernukkitx";
import { EntityDamageByEntityEvent } from "cn.nukkit.event.entity.EntityDamageByEntityEvent";

PowerNukkitX.listenEvent("cn.nukkit.event.entity.EntityDamageByEntityEvent", EventPriority.NORMAL, e => {
    if (e instanceof EntityDamageByEntityEvent) {
        // ......
    }
})
```

## Server.getLevel返回null  

通常是由于以下两个问题造成的：  
- 在`main`函数开始执行之前调用
- `plugin.yml`中`load`字段填写了`STARTUP`而非正确的`POSTWORLD`

