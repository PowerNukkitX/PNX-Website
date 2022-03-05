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
Prepend `-jar` before `--add-opens A/B=ALL-UNNAMED` for each part in your start command. 

## java.lang.UnsupportedClassVersionError
Install Java17. [Download](https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/17/jre/x64/windows/OpenJDK17U-jre_x64_windows_hotspot_17.0.2_8.zip)