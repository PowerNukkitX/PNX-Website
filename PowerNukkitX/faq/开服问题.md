# 常见开服问题  

## java.lang.reflect.InaccessibleObjectException  
### 简易处理方式
启动命令在`-jar`前面加上`--add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.io=ALL-UNNAMED`  
例如：
```
Java17目录\bin\java --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.io=ALL-UNNAMED -jar powernukkitx-1.6.0.0-PNX-SNAPSHOT-shaded.jar
```
### 完美解决
查看报错内容中如下部分：
```
module A does not "opens B" to unnamed module @C
```
在启动命令`-jar`前加上`--add-opens A/B=ALL-UNNAMED`（A/B中的内容为相关模块名称，可看以下示例）即可，每个不同报错都要这么做  

示例：

如果报错内容为：module `java.base` does not "opens `java.lang`" to unnamed module @?????? 那参数配置则为
```
--add-opens java.base/java.lang=ALL-UNNAMED
```

## java.lang.UnsupportedClassVersionError
请更换java到java17，[下载链接](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/17/jre/x64/windows/OpenJDK17U-jre_x64_windows_hotspot_17.0.3_7.zip)

## 登陆服务器提示“无法连接:过期的服务器!”
这种情况发生有两种可能性  
一:服务端协议更新导致服务器过期,等待服务端更新协议  
二:本机电脑的世界与服务端时间相差过大导致无法进入服务器,解决办法为同步本地时间或者在server.properties中设置check-login-time=off

## 端口地址占用报错解决方案
### 端口地址冲突报错:
```
ERROR - Throwing java.util.concurrent.CompletionException: java.net.BindException: Address already in use: bind
```
### 解决方案
#### Windows解决方案:
win+R键打开运行窗口，窗口中输入cmd打开Windows系统自带的命令窗口
```
netstat -ano|findstr 19132
```
输入以上指令查询端口是否被占用，数字19132代表端口
例：
```
C:\Users\Administrator>netstat -ano|findstr 19132
  UDP    0.0.0.0:19132          *:*                                    12228
```
查找到对应的端口后有对应的UDP号12228
在Windows命令窗口中输入，即可解除19132的端口占用
```
taskkill /f /t /im 12228
```
#### Linux解决方案
在命令框里输入以下命令
```
netstat -tln | grep 19132
```
查看到对应的系统Pid号使用以下指令结束进程
```
kill -9 进程PID
```

## java.lang.NoClassDefFoundError: org/objectweb/asm/Type
如果使用的是pnx-cli,请使用以下命令更新依赖库
```
pnx libs update
```
如果使用的是shaded版本核心,请在action中下载更新最新核心.

## 玩家集体掉线  

这可能是由以下原因造成的：  

- 有玩家开挂进服，并广播了损坏的数据包
- 有插件在主线程上长时间阻塞
- 调试器、第三方启动器、杀毒软件阻塞PNX运行
- 您点击了控制台（表现为控制台窗口标题以“选择”开头）导致进入调试模式，服务端运行暂停
- 您的服务器性能不佳，并同时打开了其他高占用程序，系统暂缓PNX运行以保证其他前台程序运行
- 您的服务器或服务商遭到了网络攻击，如DDOS等

请您先自查以上原因，如果您实在无法解决，可以到QQ群或Discord服务器寻求帮助。  
