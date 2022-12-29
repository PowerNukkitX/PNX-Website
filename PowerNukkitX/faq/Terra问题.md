# Terra问题  

## 什么是terra  

Terra是一个第三方[开源](https://github.com/PolyhedralDev/Terra)地形生成器，pnx整合了Terra作为nk系服务器地形生成问题的一个解决方案，您可以在pnx中使用terra生成史诗般的地图。  


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
   generator: terra:default:overworld
```

然后，重新启动服务器，即可体验terra地形生成器。

## 使用第三方Terra地形配置包

Terra允许你通过使用不同的配置包获得全新的地形，将配置包放入`./terra/packs`文件夹中，重启服务器即可完成安装。  

你可在此站点查看目前可用的配置包（不全）： [Community Packs](https://terra.polydev.org/config/community-packs.html)

接下来我们以[ReimagEND](https://github.com/justaureus/ReimagEND)配置包为例，其配置包文件名称为"ReimagEND.zip"

我们想要在末地(the_end)应用此配置包，需要在nukkit.yml中设置以下内容:
```yaml
worlds:
  the_end:
   seed: 填写你想要的种子
   generator: terra:ReimagEND:end
```

请注意在PNX中，配置包选中语法与原版terra不同，格式为：

`terra:配置包文件名称（不带后缀）:维度类型(overworld,nether,end)`

例如在此示例中，配置包文件名为ReimagEND.zip，于是我们需要将生成器设置为terra:ReimagEND:end才能选中此配置包

请注意我们在结尾附加了一个"end"参数，此参数的作用是将世界类型设置为末地。

对于不同的世界类型，其y轴限高有所不同，具体如下：

- overworld: -64 - 320
- nether: 0 - 128
- end: 0 - 256

对于一些特定的配置包，有可能出现世界限高低于配置包所需高度的情况(例如Tartarus地狱包)，此时可将世界类型设置为主世界来避免此问题

设置成功后，在末地中你应该能看到ReimagEND配置包带来的全新地形：

![REIMAGEND](%relativePrefix%image/common/terra_faq/ReimagEND-min.png)

## 为什么设置不生效  

- 如果您的世界先前使用的不是terra生成器，那么设置不会生效，您需要使用一个新的地图。  
- 请检查您是否正确配置了Terra，否则不会生效

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