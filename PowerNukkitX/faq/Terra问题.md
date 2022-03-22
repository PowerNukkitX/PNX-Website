# Terra问题  

## 什么是terra  

Terra是一个第三方[开源](https://github.com/PolyhedralDev/Terra)地形生成器，pnx在terra分支中整合了Terra，您可以在pnx中使用terra生成史诗般的地图。  


## 启动Terra  

要将terra应用到您的世界中，需要如下两步：  

在`server.properties`中，设置：
```properties
use-terra=on
```

在`nukkit.yml`中，设置：  
```yaml
worlds:
  世界名称:
   seed: 世界种子
   generator: terra:default
```

然后，重新启动服务器，即可体验terra地形生成器。  

## 黑色生物群系  

因为Terra会将未完成的生物群系用黑色混凝土方块标注，所以会有这些黑色生物群系。  
![](%relativePrefix%image/common/terra_faq/Terra_Black_min.png)   
如果不希望它们出现，可以使用PNX提供的没有未完成的生物群系的配置包。[下载PNX配置包](https://assets.powernukkitx.cn/stable/default.zip)  
下载完成后，请使用默认配置包替换掉`./terra/packs/default.zip`。重新启动服务器即可完成更改。  

## 为什么设置不生效  

- 如果您的世界先前使用的不是terra生成器，那么设置不会生效，您需要使用一个新的地图。  
- 如果您的使用的分支不包含terra生成器（terra分支核心文件大小为35MB），您需要更换服务端核心。  

## 占用的内存太多  

很抱歉，由于terra算法复杂，自定义性极高，启动时使用大约300MB内存在所难免。我们已经尽力优化了。  
如果您真的希望减少内存使用，可以尝试修改`./terra/config/yml`：
```yaml
cache:
  structure: 0 # 默认32
  sampler: 0 # 默认128
  biome-provider: 0 # 默认32
```
请注意，这样做会影响性能，加重CPU负担。  