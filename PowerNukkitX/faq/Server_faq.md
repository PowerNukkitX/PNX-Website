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
Install Java17. [Download](https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/17/jre/x64/windows/OpenJDK17U-jre_x64_windows_hotspot_17.0.2_8.zip)
## java.net.BindException: Address already in use: bind
### solution
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
Find the corresponding port with the corresponding UDP number 12228
Type in a Windows command window to unblock port 19132
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
