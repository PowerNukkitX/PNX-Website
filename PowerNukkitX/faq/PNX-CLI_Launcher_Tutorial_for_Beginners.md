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
## Steps to install PNX server based on PNX-CLI-Windows-x86
### Installation steps
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
5. Enter the following command in the command box to install the PNX Quick Deployment Tool, which will allow you to use PNX-CLI related commands wherever you are
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
