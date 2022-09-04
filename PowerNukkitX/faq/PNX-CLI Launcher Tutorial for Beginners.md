# PNX-CLI Launcher Tutorial for Beginners
## :question:How to download PNX-CLI Launcher？
PNX-CLI Launcher 【:earth_asia:[Download](https://github.com/PowerNukkitX/PNX-CLI/releases)】
## :question:What is the PNX-CLI starter?
It allows you to quickly deploy **PowerNukkitX** servers on your host, with less footprint and easier management.

## :question:How to start the server without using PNX-CLI?

:one:Download libs.tar.gz and powernukkitx.jar from [:earth_asia:[release](https://github.com/PowerNukkitX/PowerNukkitX/releases)]

:two:Extract the libs folder in libs.tar.gz to the same path as powernukkitx.jar

:three:Run the following command

##### :computer:Windows

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

##### :computer:Linux

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

## :exclamation:Notes on the installation of the PNX-CLI!
:one:No spaces in the directory folder or it won't work!

:two:You must install the following in the PNX_CLI installation package folder!

:three:The installation is not valid if the following command is entered

:computer:Windows CMD Try entering the following command

```
pnx sys-install
```
:computer:Linux Try entering the following command
```
./pnx sys-install
```
:computer:Windows PowerShell Try entering the following command
```
.\pnx sys-install
```
## :question:How do I set the PNX-CLI parameters?
Create the pnx-cli-config.ini file and enter the following text:
```
##Simplified Chinese zh-cn English en-us
language=en-us
##Select JVM
preferredJVM=GraalVM
##JVM Location
jvmPath=D:\jdk\java17\bin
```
## :question:How is the PNX-CLI starter installed?
PNX-CLI offers 3 scenario deployment projects

- PNX-CLI-Linux-arm
- PNX-CLI-Linux-x86
- PNX-CLI-Windows-x86
Choose the right software deployment for your conditions
### :tea:Steps to install PNX server based on PNX-CLI-Windows-x86
1. Download the PNX-CLI-Windows-x86.zip archive 【:earth_asia:[Download](https://github.com/PowerNukkitX/PNX-CLI/releases)】
2. Extract the PNX-CLI-Windows-x86.zip archive using ZIP
3. Win+R to open the Run window, type cmd in the Run window to open the command window that comes with Windows
4. Find the folder where your PNX.exe is located on the disk
----
:briefcase:**Example** :

> My **PNX.exe** is in the **F:**\desktop\pnx-CLI folder

> F:\Desktop\pnx-CLI

> We need to point the command window to the corresponding folder

> C:\Users\ASUS>F: CD F:\Desktop\pnx-CLI

> **F:\Desktop\pnx-CLI**
>
> This section is under the folder where your PNX.exe is located

----
5. Enter the following command in the command box to install the PNX Quick Deployment Tool, once installed, you will be able to use the PNX-CLI related commands wherever you are in the command box
**:warning:Note: You will need to restart CMD or PowerShell after the installation is complete**
```
pnx sys-install
```
6. Enter the following command in the command box to check if your computer is installing the JAVA 17 environment
```
pnx jvm check
```
7. Enter the following command in the command box to check for an installable JVM【**Skip step 8**】
```
pnx jvm remote
```
8. Select any of the following JVMs to install on your computer

   > GraalVM 

   > AdoptOpenJDK 

   > OracleJDK 

The above JVMs allow **PowerNukkitX** to process **JavaScript** or **Java** programs faster

**Enter the following command to install the JVM** 

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

**Download process requires a waiting period**

##### :computer:GraalJIT Instant Compiler Installation Steps

1. First check if GraalJIT is installed
```
pnx comp check 
```
2. If not installed then enter the following command in the command box
```
pnx comp install=graaljit
```
3. Check again if GraalJIT is installed successfully
```
pnx comp check 
```
Once installed, it will improve the speed of your JVM

9. Enter the following command in the command box to install the PNX server core
```
pnx server install
```
This will bring up the PNX master branch cores updated within the last 30 days

Enter the number of the corresponding branch after the text below to download it

```
Enter the index of the PNX version you want to install:
```
10. Enter the following command in the command box to install the dependent libraries required for PNX to run
```
pnx libs -u
```
11. Double-click PNX.exe to start the server

    **:warning:Note: You need to install the relevant VC runtime libraries**
### :tea:Steps to install PNX server based on PNX-CLI-Linux-x86(Arm)
1. Download the PNX-CLI-Linux-x86(Arm).zip archive 【:earth_asia:[Download](https://github.com/PowerNukkitX/PNX-CLI/releases)】
2. After downloading, enter the following command 
:warning:**Note: /xxx/xxx stands for the folder where your PNX-CLI-Linux-x86(Arm).zip is located**
```
cd /xxx/xxx
```
3. Unzip PNX-CLI-Linux-x86(Arm).zip using **unzip**, the file **pnx** will be available when the unzip is complete
```
unzip PNX-CLI-Linux-x86(Arm).zip
```
4. Enter the following command in the command box to install the PNX Quick Deployment Tool, once installed, you will be able to use the PNX-CLI related commands wherever you are in the command box\
**:warning:Note: You will need to restart the command terminal after the installation is complete**
```
pnx sys-install
```
5. Enter the following command for PNX-CLI help
```
pnx -h
```
If prompted for insufficient privileges use the following command to raise privileges [**skip step if privileges are available**]
```
chmod 777 pnx
```
6. Enter the following command in the command box to check if your computer is installing the JAVA 17 environment
```
pnx jvm check
```
7. Enter the following command in the command box to check for an installable JVM【**Skip step 8**】

```
pnx jvm remote
```

8. Select any of the following JVMs to install on your computer

   > GraalVM 

   > AdoptOpenJDK 

   > OracleJDK 

The above JVMs allow **PowerNukkitX** to process **JavaScript** or **Java** programs faster

**Enter the following command to install the JVM** 

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

**Download process requires a waiting period**

##### :computer:GraalJIT Instant Compiler Installation Steps

1. First check if GraalJIT is installed

```
pnx comp check 
```

2. If not installed then enter the following command in the command box

```
pnx comp install=graaljit
```

3. Check again if GraalJIT is installed successfully

```
pnx comp check 
```

Once installed, it will improve the speed of your JVM

9. Enter the following command in the command box to install the PNX server core

```
pnx server install
```
This will bring up the PNX master branch cores updated within the last 30 days

Enter the number of the corresponding branch after the text below to download it

```
Enter the index of the PNX version you want to install:
```
10. Enter the following command in the command box to install the dependent libraries required for PNX to run
```
pnx libs -u
```
11. After installation enter the following command to start the server
```
pnx
```
## :question:How do I get PNX to run for a long time on a Linux host?
### To use the screen command, proceed in detail:
1. Type the following command in the command box to check if screen is installed
```
which screen
```
2. Enter the following command in the command box to install screen\
**:warning:Note: Depends on the host system**
### 🎯CentOS
```
yum install screen
```
---
### 🎯Ubuntu
```
apt-get install screen
```
3. Create the screen program
```
screen [-opts] [cmd [args]]
```
or
```
screen -r [host.tty]
```
**screen Common Settings:**

> -A -[r|R]      Adapt all windows to the new display width & height.
>
> -d (-r)        Detach the elsewhere running screen (and reattach here).
>
> -h lines       Set the size of the scrollback history buffer.
>
> -ls [match]    or
>
> -list          Do nothing, just list our SockDir [on possible matches].
>
> -r [session]   Reattach to a detached screen process.
>
> -R             Reattach if possible, otherwise start a new session.
>
> -s shell       Shell to execute rather than $SHELL.
>
> -S sockname    Name this session <pid>.sockname instead of <pid>.<tty>.<host>.
>
> -v             Print "Screen version 4.06.02 (GNU) 23-Oct-17".
>
> -wipe [match]  Do nothing, just clean up SockDir [on possible matches].
>
> -x             Attach to a not detached screen. (Multi display mode).