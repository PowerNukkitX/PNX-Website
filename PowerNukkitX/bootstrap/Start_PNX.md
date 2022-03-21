# Start PNX

## Why Bootstrap  

Bootstrap is a tool officially provided by PNX dev team to start powernukkitx.  
It can be used through command line and GUI. It provides a simple and easy-to-use service opening experience and has the following advantages：  

- Quick for starting server, no complex configuration required
- It occupies little resources and will not have a significant impact on the server core
- Automatically configure Java environment, automatically detect and start PNX with java with the highest performance
- Easy to install dependencies and update server core
- PNX can be started in the panel with Java 8 only
- Automatically configure complex startup parameters

See the chapter "getting started" for details of how to use the Bootstrap.  

## Starting without Bootstrap  

Of course, you can also start the service without the Bootstrap, but the configuration of the server will be more complex, and the traditional command is no longer suitable for PNX.  

First, you need to go to GitHub action, select a full-build task, click to enter the build details UI, and find the following build UI：  

![](%relativePrefix%image/zh-cn/start-pnx/1.png)  

After you are sure to log in to GitHub, click download `PowerNukkitX-Core` and `PowerNukkitX-Libs`, which will download the compressed packages of PNX server core and dependencies respectively.  
After the download is successful, unzip the above Installer, and unzip the server core and dependencies into different directory respectively.  

Next, find the installation path of your java17. Under this path, find the absolute path of the corresponding Java binary file and record it.  

Now, you can start writing your server opening command.  

The template of server starting command is as follows：  
```shell
%JAVA% -Dfile.encoding=UTF-8 -Djansi.passthrough=true -Dterminal.ansi=true --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.io=ALL-UNNAMED -cp %PNX%%CP_SPLIT%%LIBS_PATH% cn.nukkit.Nukkit
```

Please place the placeholders (on both sides) in the above template%Replace the text (including the percent sign) as described below：  

|placeholder |Replace with|
|--|--|
|JAVA|java17 binary absolute path|
|PNX|PNXCore jar file path|
|CP_SPLIT|System path separator, windows;, Linux:|
|LIBS_PATH|Path to the directory where the dependencies are stored|

Enter the modified start service command on the command line to start the PNX server.  

Note that you need to pay attention to the changes of the dependencies. If the dependencies changes, you need to manually download the dependencies again and repeat the above steps.   
If the dependencies changes, no notice will be given.  

