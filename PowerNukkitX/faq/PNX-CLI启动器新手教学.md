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
##选择你的JVM
preferredJVM=GraalVM
##自定义JVM位置
jvmPath=D:\jdk\java17\bin
```
## PNX-CLI如何安装？
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
我的 PNX.exe 在 **F磁盘**\桌面\pnx-CLI文件夹里
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
5. 在命令框输入下述指令安装PNX快速部署工具,安装完毕后,无论在哪里都能使用PNX-CLI相关指令
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
- 强烈推荐使用 GraalVM JAVA 这能让你的PowerNukkitX在处理Java与JavaScript速度更快！\
8. 输入下述指令安装JVM(反之跳过)
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
2. 下载完成后,输入下述指令 **注意:/xxx/xxx 代表你PNX-CLI-Linux-x86(Arm).zip所在文件夹目录**
```
cd /xxx/xxx
```
3. 使用**unzip**解压PNX-CLI-Linux-x86(Arm).zip,解压完成后会有**pnx**文件
```
unzip PNX-CLI-Linux-x86(Arm).zip
```
4. 输入下述指令安装PNX快速部署工具,安装完毕后,无论在哪里都能使用PNX-CLI相关指令
```
pnx sys-install
```
5. 输入下述指令获取PNX-CLI帮助
```
pnx -h
```
如果提示权限不足使用下述指令提权,反之跳过
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
- 强烈推荐使用 GraalVM JAVA 这能让你的PowerNukkitX在处理Java与JavaScript速度更快！\
8. 输入下述指令安装JVM(反之跳过)
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
