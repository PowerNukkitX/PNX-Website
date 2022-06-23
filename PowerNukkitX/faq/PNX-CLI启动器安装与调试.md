# PNX-CLI启动器新手教学
## 如何获取PNX-CLI启动器？
PNX-CLI启动器[点击访问](https://github.com/PowerNukkitX/PNX-CLI/releases/tag/v0.0.2)
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
1. 下载PNX-CLI-Windows-x86.zip压缩包[点击前往下载](https://github.com/PowerNukkitX/PNX-CLI/releases/tag/v0.0.2)
2. 使用ZIP解压PNX-CLI-Windows-x86.zip压缩包
3. 检测你的计算机是否是安装JAVA 17环境
4. 安装PNX服务端核心
5. 安装PNX运行所需的依赖库
6. 运行PNX.exe你需要安装相关VC运行库\
**注意：双击运行PNX.exe需要PNX服务端基本工作已完成部署后进行**
- Win+R键打开运行窗口
- 在运行窗口里输入cmd打开Windows自带的命令窗口
- 找到你PNX.exe在磁盘的那个文件夹那个位置
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
输入下述指令,检测你计算机是否有PowerNukkitX的java运行环境
```
pnx jvm check
```
输入下述指令查看可安装的JVM
```
pnx jvm remote
```
选择以下任意一款JVM安装到你计算机
1. GraalVM (349MB)
2. AdoptOpenJDK (41.1MB)
- 强烈推荐使用 GraalVM JAVA 这能让你的PowerNukkitX在处理Java与JavaScript速度更快！\
输入下述指令安装(反之跳过)
```
pnx jvm install=GraalVM  
```
或者
```
pnx jvm install=AdoptOpenJDK
```
需要等待一段时间(根据自身主机网速决定)\
安装完毕后输入下述指令安装PNX核心
```
pnx server install
```
这时会出现最近30天内更新的PNX主分支核心\
在下述文本后输入对应分支的编号,即可下载
```
Enter the index of the PNX version you want to install:
```
安装完毕后输入下述指令安装PNX运行所需的依赖库
```
pnx libs -u
```
需要等待一段时间(根据自身主机网速决定)\
安装完毕后你PNX服务端基本工作已完成部署！
### 基于PNX-CLI-Linux-x86 安装PNX服务器相关步骤
#### 安装步骤
1. 下载PNX-CLI-Linux-x86.zip压缩包[点击前往下载](https://github.com/PowerNukkitX/PNX-CLI/releases/tag/v0.0.2)
2. 下载完成后,输入下述指令 **注意:/xxx/xxx 代表你PNX-CLI-Linux-x86.zip所在文件夹目录**
```
cd /xxx/xxx
```
3. 使用**unzip**解压PNX-CLI-Linux-x86.zip
```
unzip PNX-CLI-Linux-x86.zip
```
解压完成后会有**pnx**文件,输入下述指令\
根据自身系统环境选择
```
./pnx -h
```
或
```
pnx -h
```
如果提示权限不足使用下述指令提权,反之跳过
```
chmod 777 pnx
```
4. 检测你的计算机是否是安装JAVA 17环境
5. 安装PNX服务端核心
6. 安装PNX运行所需的依赖库
