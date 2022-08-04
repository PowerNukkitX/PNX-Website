# FAQ - Server related 

## java.lang.reflect.InaccessibleObjectException  
### Simple solution
Prepend `-jar` before `--add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.io=ALL-UNNAMED` in your start command.  
For example：
```
Java17\bin\java --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.io=ALL-UNNAMED -jar powernukkitx-1.6.0.0-PNX-SNAPSHOT-shaded.jar
```
### Full solution
Check the following parts of the error stacktrace：
```
module A does not "opens B" to unnamed module @C
```
Add `-add-opens A/B=ALL-UNNAMED` (the content in A/B is the name of the module in question, see the following example) before the start command `-jar`, and do this for each different error report  

Example.

If the error is reported as: module `java.base` does not "opens `java.lang`" to unnamed module @?????? then the parameter configuration would be
```
--add-opens java.base/java.lang=ALL-UNNAMED
```

## java.lang.UnsupportedClassVersionError
Install Java17. [Download](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/17/jre/x64/windows/OpenJDK17U-jre_x64_windows_hotspot_17.0.3_7.zip)
## java.net.BindException: Address already in use: bind
### Solution
#### Windows solution
Win+R opens the Run window, type cmd in the window to open the command window that comes with Windows
```
netstat -ano|findstr 19132
```
Enter the above command to check if the port is occupied, the number 19132 represents the port
Example:
```
C:\Users\Administrator>netstat -ano|findstr 19132
  UDP    0.0.0.0:19132          *:*                                    12228
```
Find the corresponding UDP number for port 12228 and enter the following command in the Windows command window to unlock port 19132
```
taskkill /f /t /im 12228
```
#### Linux solution
Enter the following command in the command box
```
netstat -tln | grep 19132
```
Check the corresponding system PID number to end the process using the following command
```
kill -9 PID
```

## java.lang.NoClassDefFoundError: org/objectweb/asm/Type
If you are using pnx-cli,please use the following command to update dependent libraries.
```
pnx libs update
```
If you are using shaded core,please download the latest core in [github action](https://github.com/PowerNukkitX/PowerNukkitX/actions).

## All players are offline at the same time

This may be caused by the following reasons:  

- Some players join with cheat clients and broadcast broken data packets
- There is a plug-in blocking on the main thread for a long time
- Debugger, third-party launcher, antivirus software block PNX operation
- You click the console (the title of the console window starts with "selected"), which leads to entering the debugging mode, and the operation of the server is suspended
- Your server performance is poor, and other high occupancy programs are opened at the same time. The system suspends the operation of PNX to ensure the operation of other foreground programs
- Your server or service provider has been attacked by network, such as DDOS

Please check the above reasons first. If you really can't solve it, you can turn to QQ group or Discord server for help.  
