# Nukkit.yml配置介绍
## settings:
Nukkit服务器设置
## language: chs
Nukkit服务器语言
- chs　简体中文
- cht　繁体中文
- eng　英语
- jpn　日语
- rus　俄语
- spa　西班牙语　
- pol  波兰语
- bra  葡萄牙语-巴西
- kor  韩语
- ukr  乌克兰语
- deu  德语
- ltu  立陶宛语
- idn  印度尼西亚语
- cze  捷克语
- tur  土耳其语
- fin  芬兰
- vie  越南语
- fra  法语
 ## force-language: false
 是否强制服务器语言(false 关闭 true 开启)
 ## shutdown-message: "Server closed"
 关闭服务器的提示消息
 ## query-plugins: ture
 是否允许通过Query查询列出服务器的插件(false 关闭 true 开启)
 ## deprecated-verbose: true
 当插件使用不推荐的API时，在控制台显示提示(false 关闭 true 开启)
 ## async-workers: auto　
 ### safe-spawn: true
 异步工作的线程数量
 如果设置为auto，服务器将尝试检测CPU的核心数量（至少4个）

network:
 batch-threshold: 256
 compression-level: 7
 async-compression: false

debug:
 level: 1
 commands: false
 ignored-packets:
  - LevelChunkPacket

timings:
 enabled: false
 verbose: false
 history-interval: 6000
 history-length: 72000
 bypass-max: false
 privacy: false
 ignore: []

level-settings:
 default-format: anvil
 auto-tick-rate: true
 auto-tick-rate-limit: 20
 base-tick-rate: 1
 always-tick-players: false
 tick-redstone: true

chunk-sending:
 per-tick: 4
 max-chunks: 192
 spawn-threshold: 56
 cache-chunks: false

chunk-ticking:
 per-tick: 40
 tick-radius: 3
 light-updates: false
 clear-tick-list: false

chunk-generation:
 queue-size: 8
 population-queue-size: 8

## ticks-per:
这些实体最大随机刻 (当前无效)
 - animal-spawns: 400
 - monster-spawns: 1
 - autosave: 6000
 - cache-cleanup: 900

## spawn-limits:
实体的最大数量(当前无效)
 - monsters: 70
 怪物生成数量: 70
 - animals: 15
 动物生成数量: 15
 - water-animals: 5
 水生物生成数量: 5
 - ambient: 15
 

## player:
玩家相关设置
 - save-player-data: true
 保存玩家数据
 - skin-change-cooldown: 30
 玩家皮肤更新时间
 - force-skin-trusted: false
 强制可信任皮肤(false 关闭 true 开启)
 - check-movement: true
 移动检测(false 关闭 true 开启)

## aliases:
命令别名
- 示例：
- showtheversion：版本
- savestop：[保存、停止]

## worlds:　
生成器世界设置
  - world: 生成世界名称
     - seed: 12235 　生成世界种子
     - generator: terra:default　生成器类型(当前类型：terra史诗世界生成器)
    
