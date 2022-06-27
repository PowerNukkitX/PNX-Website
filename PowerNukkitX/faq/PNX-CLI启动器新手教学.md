# PNX-CLI启动器新手教学
## 如何下载PNX-CLI启动器？
PNX-CLI启动器 [点击前往下载](https://github.com/PowerNukkitX/PNX-CLI/releases)
## PNX-CLI启动器是什么？
它能在你的主机上快捷部署PowerNukkitX服务器,更少的占用,更方便的管理
## 如何设置PNX-CLI参数？
创建**pnx-cli-config.ini**文件
输入下述文本:
```
##简体中文 zh-cn English en-us
language=zh-cn
##选择JVM
preferredJVM=GraalVM
##JVM所在位置
jvmPath=D:\jdk\java17\bin
```
## PNX-CLI启动器如何安装？
PNX-CLI提供了3个场景部署的项目
- PNX-CLI-Linux-arm
- PNX-CLI-Linux-x86
- PNX-CLI-Windows-x86\
结合自身条件选择合适的软件部署
### 基于PNX-CLI-Windows-x86 安装PNX服务器相关步骤
#### 安装步骤
1. 下载PNX-CLI-Windows-x86.zip压缩包 [点击前往下载](https://github.com/PowerNukkitX/PNX-CLI/releases)
2. 使用ZIP解压PNX-CLI-Windows-x86.zip压缩包
3. Win+R键打开运行窗口，在运行窗口里输入cmd打开Windows自带的命令窗口
4. 找到你PNX.exe在磁盘的那个文件夹那个位置
----
**例** :\
我的 PNX.exe 在 **F:**\桌面\pnx-CLI 文件夹里
```
F:\桌面\pnx-CLI
```
我们必需把命令窗口指向对应的文件夹下
```
C:\Users\ASUS>F: CD F:\桌面\pnx-CLI
```
**F:\桌面\pnx-CLI**\
这段是你PNX.exe所在文件夹下

----
5. 在命令框输入下述指令安装PNX快速部署工具,安装完毕后,无论在命令框哪里都能使用PNX-CLI相关指令\
**注意：安装完成后需要重启CMD或者PowerShell**
```
pnx sys-install
```
6. 在命令框输入下述指令检测你的计算机是否是安装JAVA 17环境
```
pnx jvm check
```
7. 在命令框输入下述指令查看可安装的JVM
```
pnx jvm remote
```
选择以下任意一款JVM安装到你计算机
1. GraalVM (349MB)
2. AdoptOpenJDK (41.1MB)
- 强烈推荐使用 GraalVM JAVA 这能让你的PowerNukkitX在处理Java与JavaScript速度更快！
8. 在命令框输入下述指令安装JVM(跳过安装)
```
pnx jvm install=GraalVM  
```
或者
```
pnx jvm install=AdoptOpenJDK
```
9. 在命令框输入下述指令安装PNX服务端核心
```
pnx server install
```
这时会出现最近30天内更新的PNX主分支核心\
在下述文本后输入对应分支的编号,即可下载
```
Enter the index of the PNX version you want to install:
```
10. 在命令框输入下述指令安装PNX运行所需的依赖库
```
pnx libs -u
```
11. 双击PNX.exe启动服务器\
**注意：你需要安装相关VC运行库**

### 基于PNX-CLI-Linux-x86(Arm)安装PNX服务器相关步骤
#### 安装步骤
1. 下载PNX-CLI-Linux-x86(Arm).zip压缩包 [点击前往下载](https://github.com/PowerNukkitX/PNX-CLI/releases)
2. 下载完成后,输入下述指令\
**注意:/xxx/xxx 代表你PNX-CLI-Linux-x86(Arm).zip所在文件夹目录**
```
cd /xxx/xxx
```
3. 使用**unzip**解压PNX-CLI-Linux-x86(Arm).zip,解压完成后会有**pnx**文件
```
unzip PNX-CLI-Linux-x86(Arm).zip
```
4. 在命令框输入下述指令安装PNX快速部署工具,安装完毕后,无论在命令框哪里都能使用PNX-CLI相关指令\
**注意：安装完成后需要重启命令终端**
```
pnx sys-install
```
5. 输入下述指令获取PNX-CLI帮助
```
pnx -h
```
如果提示权限不足使用下述指令提权 [如果有权限跳过步骤]
```
chmod 777 pnx
```
6. 检测你的计算机是否是安装JAVA 17环境
```
pnx jvm check
```
7. 输入下述指令查看可安装的JVM
```
pnx jvm remote
```
选择以下任意一款JVM安装到你计算机
1. GraalVM (349MB)
2. AdoptOpenJDK (41.1MB)
- 强烈推荐使用 GraalVM JAVA 这能让你的PowerNukkitX在处理Java与JavaScript速度更快！
8. 输入下述指令安装JVM(跳过安装)
```
pnx jvm install=GraalVM  
```
或者
```
pnx jvm install=AdoptOpenJDK
```
需要等待一段时间(根据自身主机网速决定)

9. 安装PNX服务端核心
```
pnx server install
```
这时会出现最近30天内更新的PNX主分支核心\
在下述文本后输入对应分支的编号,即可下载
```
Enter the index of the PNX version you want to install:
```
10. 安装PNX运行所需的依赖库
```
pnx libs -u
```
11. 安装完毕后输入下述指令启动服务器
```
pnx
```
## 如何让PNX在Linux主机上长久运行？
### 使用screen指令,详细步骤：
1. 在命令框输入下述指令,检查是否安装screen
```
which screen
```
2. 在命令框输入下述指令,安装screen\
**注意: 根据主机系统而定** 
### CentOS
```
yum install screen
```
---
### Ubuntu
```
apt-get install screen
```
3. 创建screen程序
```
screen [-opts] [cmd [args]]
```
或者
```
screen -r [host.tty]
```
**screen 设置参数**\
-4	仅将主机名解析为IPv4地址。
-6	仅将主机名解析为IPv6地址。
-a	强制将所有功能放入每个窗口的termcap。
-A  将所有的视窗都调整为目前终端机的大小。
-c文件	读取配置文件而不是’。screenrc’。
-d（-r）	分离别处运行的屏幕（并在此处重新连接）。
-dmS名称	作为守护进程启动：分离模式下的屏幕会话。
-D（-r）	分离并注销远程（并在此处重新连接）。
-D-RR	做任何需要的事情来获得屏幕会话。
-e xy	更改命令字符。
-f	流量控制打开，-fn=关闭，-fa=自动。
-h行	设置回滚历史缓冲区的大小。
-i	流量控制开启时，中断输出更快。
-l	登录模式打开（更新/var/run/utmp），-ln=off。
-ls[match]	什么都不做，只列出我们的SockDir[关于可能的匹配]，同-list
-list	什么都不做，只列出我们的SockDir[关于可能的匹配]。
-L	打开输出日志记录。
-m	忽略$STY变量，创建一个新的屏幕会话。
-O	选择最佳输出，而不是精确的vt100模拟。
-p windows	如果命名窗口存在，则预选该窗口。
-q	安静启动。如果不成功，则使用非零返回代码退出。
-Q	命令将向查询进程的标准输出发送响应。
-r[session]	重新连接到分离的屏幕进程。
-R	如果可能，重新连接，否则启动新会话。
-s shell	要执行的shell，而不是$shell。
-S sockname	将此会话命名为。sockname而不是<主机>。
-t title	设置标题。（窗口名称）。
-T term	将术语用作windows的$term，而不是“屏幕”。
-U	告诉屏幕使用UTF-8编码。
-v	打印“屏幕版本4.01.00devel（GNU）2006年5月2日”。
-wipe[match]	什么都不做，只需清理SockDir[可能的匹配项]。
-x	连接到未分离的屏幕上。（多显示模式）。
-X	在指定会话中作为屏幕命令执行。

