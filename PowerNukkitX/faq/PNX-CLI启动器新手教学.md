



# PNX-CLI启动器新手教学

## 如何下载PNX-CLI启动器？
PNX-CLI启动器 【[前往下载](https://github.com/PowerNukkitX/PNX-CLI/releases)】
## PNX-CLI启动器是什么？
能在你的主机上快速部署**PowerNukkitX**服务器

**优势: 更少的占用,更高效的管理**

## 使用PNX-CLI如何启动服务器？

1. 从【[release](https://github.com/PowerNukkitX/PowerNukkitX/releases)】下载libs.tar.gz和powernukkitx.jar

2. 将libs.tar.gz中的libs文件夹解压到和powernukkitx.jar同一路径下

3. 运行以下命令

##### Windows版本

```
java -Dfile.encoding=UTF-8 ^
-Djansi.passthrough=true ^
-Dterminal.ansi=true ^
-XX:+UnlockExperimentalVMOptions ^
-XX:+UseG1GC ^
-XX:+UseStringDeduplication ^
-XX:+EnableJVMCI ^
--module-path=.\libs\graal-sdk-22.2.0.jar;.\libs\truffle-api-22.2.0.jar; ^
--add-opens java.base/java.lang=ALL-UNNAMED ^
--add-opens java.base/java.io=ALL-UNNAMED ^
-cp .\powernukkitx.jar;.\libs\* ^
cn.nukkit.Nukkit
```

##### Linux版本

```
java -Dfile.encoding=UTF-8 \
-Djansi.passthrough=true \
-Dterminal.ansi=true \
-XX:+UnlockExperimentalVMOptions \
-XX:+UseG1GC \
-XX:+UseStringDeduplication \
-XX:+EnableJVMCI \
--module-path=./libs/truffle-api-22.2.0.jar:./libs/graal-sdk-22.2.0.jar: \
--add-opens java.base/java.lang=ALL-UNNAMED \
--add-opens java.base/java.io=ALL-UNNAMED \
-cp ./powernukkitx.jar:./libs/* \
cn.nukkit.Nukkit
```

## 安装PNX-CLI注意事项！

​    1. **目录文件夹不能有空格否则无法正常运行！**

​    2. **你必需在PNX_CLI安装包目录文件夹下进行以下安装！**

​    3. **你如果使用下述指令安装失败**

### Linux 输入下述指令尝试
```
./pnx sys-install
```
### Windows PowerShell 输入下述指令尝试

```
.\pnx sys-install
```

### Windows CMD 输入下述指令尝试

```
pnx sys-install
```

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

- PNX-CLI-Windows-x86

  结合自身条件选择合适的软件部署
### 基于PNX-CLI-Windows-x86 安装PNX服务器相关步骤
1. 下载PNX-CLI-Windows-x86.zip压缩包 【[前往下载](https://github.com/PowerNukkitX/PNX-CLI/releases)】
2. 使用ZIP解压PNX-CLI-Windows-x86.zip压缩包
3. Win+R键打开运行窗口，在运行窗口里输入cmd打开Windows自带的命令窗口
4. 找到你PNX.exe在磁盘的那个文件夹那个位置
----
**例子:**

> **PNX.exe** 在 **F:**\桌面\pnx-CLI 文件夹里

> F:\桌面\pnx-CLI

> 我们必需把命令窗口指向对应的文件夹下  

> C:\Users\ASUS>F: CD F:\桌面\pnx-CLI

> **F:\桌面\pnx-CLI**
>
> 这是你**PNX.exe**所在文件夹目录下

----
5. 在命令框输入下述指令安装PNX快速部署工具,安装完毕后,无论在命令框哪里都能使用PNX-CLI相关指令

  **注意：安装完成后需要重启CMD或者PowerShell**
```
pnx sys-install
```
6. 在命令框输入下述指令检测你的计算机是否是安装JAVA 17环境
```
pnx jvm check
```
7. 在命令框输入下述指令查看可安装的JVM[**如果已安装则跳过步骤8**]
```
pnx jvm remote
```
8. 选择以下任意一款JVM安装到你计算机

   > GraalVM 

   > OracleJDK 

   > AdoptOpenJDK 

   以上JVM可让**PowerNukkitX**处理**JavaScript**或**Java**程序速度更快

   **输入下述指令安装JVM** 

#### GraalVM

```
pnx jvm install=GraalVM  
```

#### AdoptOpenJDK

```
pnx jvm install=AdoptOpenJDK
```

#### OracleJDK 

```
pnx jvm install=OracleJDK
```

**下载过程需等待一段时间**

### GraalJIT即时编译器安装步骤

1. 首先检测GraalJIT是否安装

```
pnx comp check 
```

2. 如果未安装则在命令框输入下述指令

```
pnx comp install=graaljit
```

3. 再次检测GraalJIT是否安装成功

```
pnx comp check 
```

完成安装后,将会提高你JVM运行速度

9. 在命令框输入下述指令安装PNX服务端核心

```
pnx server install
```
这时会出现最近30天内更新的PNX主分支核心
在下述文本后输入对应分支的编号,即可下载

```
Enter the index of the PNX version you want to install:
```
10. 在命令框输入下述指令安装PNX运行所需的依赖库

```
pnx libs -u
```
11. 双击PNX.exe启动服务器

    **注意：你需要安装相关VC运行库**

### :tea:基于PNX-CLI-Linux-x86(Arm)安装PNX服务器相关步骤
1. 下载PNX-CLI-Linux-x86(Arm).zip压缩包 【[前往下载](https://github.com/PowerNukkitX/PNX-CLI/releases)】
2. 下载完成后,输入下述指令\
**注意:/xxx/xxx 代表你PNX-CLI-Linux-x86(Arm).zip所在文件夹目录**
```
cd /xxx/xxx
```
3. 使用**unzip**解压PNX-CLI-Linux-x86(Arm).zip,解压完成后会有**pnx**文件
```
unzip PNX-CLI-Linux-x86(Arm).zip
```
4. 在命令框输入下述指令安装PNX快速部署工具,安装完毕后,无论在命令框哪里都能使用PNX-CLI相关指令
**注意：安装完成后需要重启命令终端**
```
pnx sys-install
```
5. 输入下述指令获取PNX-CLI帮助
```
pnx -h
```
如果提示权限不足使用下述指令提权 [**如果有权限跳过步骤**]
```
chmod 777 pnx
```
6. 检测你的计算机是否是安装JAVA 17环境
```
pnx jvm check
```
7. 输入下述指令查看可安装的JVM[**如果已安装则跳过步骤8**]
```
pnx jvm remote
```
8. 选择以下任意一款JVM安装到你计算机

   > GraalVM 

   > OracleJDK 

   > AdoptOpenJDK 

   以上JVM可让**PowerNukkitX**处理**JavaScript**或**Java**程序速度更快

   **输入下述指令安装JVM**

#### GraalVM

```
pnx jvm install=GraalVM  
```

#### AdoptOpenJDK

```
pnx jvm install=AdoptOpenJDK
```

#### OracleJDK 

```
pnx jvm install=OracleJDK
```

**下载过程需等待一段时间**

### GraalJIT即时编译器安装步骤

1. 首先检测GraalJIT是否安装

```
pnx comp check 
```

2. 如果未安装则在命令框输入下述指令

```
pnx comp install=graaljit
```

3. 再次检测GraalJIT是否安装成功

```
pnx comp check 
```

完成安装后,将会提高你JVM运行速度

9. 安装PNX服务端核心
```
pnx server install
```
这时会出现最近30天内更新的PNX主分支核心
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
pnx start
```
#### 如何让PNX在Linux主机上长久运行？

##### 使用screen指令,详细步骤：

1. 在命令框输入下述指令,检查是否安装screen
```
which screen
```
2. 在命令框输入下述指令,安装screen

  **注意: 需要根据主机系统而定** 

###### CentOS

```
yum install screen
```
###### Ubuntu

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
**screen 常用设置参数**

> -A 　将所有的视窗都调整为目前终端机的大小。
>
> -d <作业名称> 　将指定的screen作业离线。
>
> -h <行数> 　指定视窗的缓冲区行数。
>
> -r <作业名称> 　恢复离线的screen作业。
>
> -R 　先试图恢复离线的作业。若找不到离线的作业，即建立新的screen作业。
>
> -s 　指定建立新视窗时，所要执行的shell。
>
> -S <作业名称> 　指定screen作业的名称。
>
> -v 　显示版本信息。
>
> -x 　恢复之前离线的screen作业。
>
> -ls或--list 　显示目前所有的screen作业。
>
> -wipe 　检查目前所有的screen作业，并删除已经无法使用的screen作业。

