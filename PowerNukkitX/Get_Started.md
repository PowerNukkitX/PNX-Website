# Get Started  

Follow this tutorial for ten minutes (not including the download time) to start your first PowerNukkitX server.  
This tutorial will take you through a quick installation and start-up of the server using the PowerNukkitX Bootstrap.

## Configuring the environment  

### Download launcher

Stable version：  
Download stable launcher [master-ef2e75c](https://assets.powernukkitx.cn/stable/Bootstrap-0.0.1-beta-shaded.jar)

the latest version：
go to [Action](https://github.com/PowerNukkitX/PowerNukkitX/actions), open the build interface of the version you want to download and download powernukkitx bootstrap
, unzip after downloading.

### Install Java environment

#### Windows

Download openjdk17 [Installer](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/17/jre/x64/windows/OpenJDK17U-jre_x64_windows_hotspot_17.0.3_7.msi)
And follow the prompts to install, default all the way to the next step to complete the installation.

#### Linux

Ubuntu System installation：
```shell
sudo apt update && sudo apt upgrade -y
sudo apt-get install openjdk-17-jre
```

## Start server

### CLI startup

Copy the launcher jar to the folder where you want to open the service, and enter the command under this folder：
```shell
java -jar Bootstrap-0.0.1-beta-shaded.jar
```
Then the initiator will automatically start configuration. According to the prompt given by the console, the initiator will automatically download the Java environment required for PNX configuration, download and install PNX core and dependent libraries, and then the server will start automatically.  
If you want to open the service again after closing the service, just enter the above command again.

The normal service opening interface is as follows：  
![](%relativePrefix%image/zh-cn/get-start/0.png)

To shut down the server, enter 'stop'.

### GUI startup

If you use Windows system, macOS system or Linux system with GUI env, you can manage and start the server through the GUI.  
On Windows or macOS, if you have correctly configured the Java runtime environment, you can directly double-click the launcher jar to open the PNX interface；On Linux, you can use `java - jar bootstrap-0.0.1-beta-shaded jar --gui`
To open the PNX interface in the system with graphical interface installed. After PNX is started correctly, the following interface will be displayed：  
![](%relativePrefix%image/zh-cn/get-start/1.png)

Click window - > check for updates to open the update check window：  
![](%relativePrefix%image/zh-cn/get-start/2.png)  
Double-click the items marked with cross marks and double-click the sub items one by one. The Bootstrap will automatically repair the sub items you click until all the cross marks disappear.

Click server - > start server to start powernukkitx server：  
![](%relativePrefix%image/zh-cn/get-start/3.png)   
