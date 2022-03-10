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