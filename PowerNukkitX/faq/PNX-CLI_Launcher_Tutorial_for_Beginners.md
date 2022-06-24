# PNX-CLI Launcher Tutorial for Beginners
## How to download PNX-CLI Launcher？
PNX-CLI Launcher [Download](https://github.com/PowerNukkitX/PNX-CLI/releases)
## What is the PNX-CLI starter?
It allows you to quickly deploy PowerNukkitX servers on your host, with less footprint and easier management.
## How do I set the PNX-CLI parameters?
Create the pnx-cli-config.ini file and enter the following text:
```
##简体中文 zh-cn English en-us
language=en-us
##Select JVM
preferredJVM=GraalVM
##JVM Location
jvmPath=D:\jdk\java17\bin
```
## How is the PNX-CLI starter installed?
PNX-CLI offers 3 scenario deployment projects

- PNX-CLI-Linux-arm
- PNX-CLI-Linux-x86
- PNX-CLI-Windows-x86\
Choose the right software deployment for your conditions
### Steps to install PNX server based on PNX-CLI-Windows-x86
#### Installation steps
1. Download the PNX-CLI-Windows-x86.zip archive [Download](https://github.com/PowerNukkitX/PNX-CLI/releases)
2. Extract the PNX-CLI-Windows-x86.zip archive using ZIP
3. Win+R to open the Run window, type cmd in the Run window to open the command window that comes with Windows
4. Find the folder where your PNX.exe is located on the disk
----
**Example** :\
My PNX.exe is in the **F disk** \ desktop\pnx-CLI folder
```
F:\Desktop\pnx-CLI
```
We need to point the command window to the corresponding folder
```
C:\Users\ASUS>F: CD F:\Desktop\pnx-CLI
```
**F:\Desktop\pnx-CLI**\
This section is under the folder where your PNX.exe is located

----
5. Enter the following command in the command box to install the PNX Quick Deployment Tool, once installed, you will be able to use the PNX-CLI related commands wherever you are in the command box
**Note: You will need to restart your computer after installation**
```
pnx sys-install
```
6. Enter the following command in the command box to check if your computer is installing the JAVA 17 environment
```
pnx jvm check
``` 
7. Enter the following command in the command box to check for an installable JVM
```
pnx jvm remote
```
Choose any of the following JVMs to install on your computer
1. GraalVM (349MB)
2. AdoptOpenJDK (41.1MB)
- It is highly recommended to use GraalVM JAVA. this will make your PowerNukkitX faster in Java and JavaScript \
8. Enter the following command in the command box to install the JVM (skip installation)
```
pnx jvm install=GraalVM  
```
or
```
pnx jvm install=AdoptOpenJDK
```
9. Enter the following command in the command box to install the PNX server core
```
pnx server install
```
This will bring up the PNX master branch cores updated within the last 30 days\
Enter the number of the corresponding branch after the text below to download it
```
Enter the index of the PNX version you want to install:
```
10. Enter the following command in the command box to install the dependent libraries required for PNX to run
```
pnx libs -u
```
11. Double-click PNX.exe to start the server\
**Note: You need to install the relevant VC runtime libraries**
### Steps to install PNX server based on PNX-CLI-Linux-x86(Arm)
#### Installation steps
1. Download the PNX-CLI-Linux-x86(Arm).zip archive [Download](https://github.com/PowerNukkitX/PNX-CLI/releases)
2. After downloading, enter the following command **Note: /xxx/xxx stands for the folder where your PNX-CLI-Linux-x86(Arm).zip is located**
```
cd /xxx/xxx
```
3. Unzip PNX-CLI-Linux-x86(Arm).zip using **unzip**, the file **pnx** will be available when the unzip is complete
```
unzip PNX-CLI-Linux-x86(Arm).zip
```
4. Enter the following command in the command box to install the PNX Quick Deployment Tool, once installed, you will be able to use the PNX-CLI related commands wherever you are in the command box
**Note: You will need to restart your computer after installation**
```
pnx sys-install
```
5. Enter the following command for PNX-CLI help
```
pnx -h
```
If prompted for insufficient privileges use the following command to raise privileges [skip step if privileges are available]
```
chmod 777 pnx
```
6. Enter the following command in the command box to check if your computer is installing the JAVA 17 environment
```
pnx jvm check
``` 
7. Enter the following command in the command box to check for an installable JVM
```
pnx jvm remote
```
Choose any of the following JVMs to install on your computer
1. GraalVM (349MB)
2. AdoptOpenJDK (41.1MB)
- It is highly recommended to use GraalVM JAVA. this will make your PowerNukkitX faster in Java and JavaScript \
8. Enter the following command in the command box to install the JVM (skip installation)
```
pnx jvm install=GraalVM  
```
or
```
pnx jvm install=AdoptOpenJDK
```
9. Enter the following command in the command box to install the PNX server core
```
pnx server install
```
This will bring up the PNX master branch cores updated within the last 30 days\
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
