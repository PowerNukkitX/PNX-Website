# 启动PNX

## 为什么用启动器  

Bootstrap，启动器，是PNX官方提供的用于启动PowerNukkitX的工具。  
它可以通过命令行和图形界面两种方式使用，提供了简单易用的开服体验，具有以下优点：  

- 快捷开服，无需复杂配置
- 占用资源少，不会对核心运行造成明显影响
- 自动配置java环境，自动检测并使用性能最高的Java启动PNX
- 方便安装依赖库、更新服务端核心
- 可以在只有Java8的面板服启动PNX
- 自动配置复杂的启动参数

启动器的使用方式，详见“快速入门”章节。  

## 不使用启动器开服  

当然，你也可以不用启动器开服，但开服的配置将会较为复杂，传统的开服命令不再适合PNX。  

首先，你需要前往Github action，选择一个完整的构建任务，点开进入构建详情界面，找到如下的构建物界面：  

![](%relativePrefix%image/zh-cn/start-pnx/1.png)  

确定你登录了Github后，点击下载`PowerNukkitX-Core`和`PowerNukkitX-Libs`，这将分别下载PNX服务端核心和依赖库的压缩包。  
下载成功后，解压上述安装包，将服务端核心跟依赖库分别解压到不同的文件夹中。  

接下来，找到你的java17的安装路径，在此路径下找到对应的java二进制文件的绝对路径，记录下来。  

现在，你可以着手开始编写你的开服命令了。  

开服命令模板如下：  
```shell
%JAVA% -Dfile.encoding=UTF-8 -Djansi.passthrough=true -Dterminal.ansi=true --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.io=ALL-UNNAMED -cp %PNX%%CP_SPLIT%%LIBS_PATH% cn.nukkit.Nukkit
```

请您将上述模板中的占位符（两侧为%的文字，包括百分号）按照如下说明进行替换：  

|占位符|替换为|
|--|--|
|JAVA|java17二进制文件绝对路径|
|PNX|PNX核心jar包路径|
|CP_SPLIT|系统路径分隔符，Windows为;，Linux为:|
|LIBS_PATH|存放依赖库的文件夹路径|

在命令行上输入您修改完的开服命令，即可启动PNX服务端。  

注意，您需要留心依赖库变化，如果依赖库发生变化，您需要手动重新下载依赖库重复上述步骤，依赖库如有变化，恕不另行通知。  

