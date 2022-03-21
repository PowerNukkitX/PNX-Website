# Bootstrap Configuration  

PNX Bootstrap has a series of easy-to-use default configurations, and allows users to customize their own configuration. The user-defined configuration takes precedence over the default configuration.  

The user profile of Bootstrap is in the same directory which name is `bootstrap.ini`, it will not be created automatically by default. You need to create it manually.  

## Default configuration  

|grouping key|Default value|explain|
|--|--|--|
|language||Language code of the language used by the Bootstrap, such as zh-cn (Simplified Chinese), en-us (American English)|
|start-cmd|%JAVA% -Dfile.encoding=UTF-8 -Djansi.passthrough=true -Dterminal.ansi=true --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.io=ALL-UNNAMED -cp %PNX%%CP_SPLIT%libs/* cn.nukkit.Nukkit|Default PNX start command|
|min-restart-time|30000|Minimum restart interval (ms). If two starts are less than this time, it will not restart automatically|
|auto-restart|false|Auto restart by default|
|gui-terminal-color|PowerNukkitX|GUI terminal theme (powernukkitx/Windows）|
|graalvm.version|22.0.0.2|Version of graalvm to download|
|graalvm.win-x86|https://download.fastgit.org/graalvm/graalvm-ce-builds/releases/download/vm-22.0.0.2/graalvm-ce-java17-windows-amd64-22.0.0.2.zip||
|graalvm.linux-x86|https://download.fastgit.org/graalvm/graalvm-ce-builds/releases/download/vm-22.0.0.2/graalvm-ce-java17-linux-amd64-22.0.0.2.zip||
|graalvm.linux-aarch|https://download.fastgit.org/graalvm/graalvm-ce-builds/releases/download/vm-22.0.0.2/graalvm-ce-java17-linux-aarch64-22.0.0.2.zip||
|graalvm.darwin-x86|https://download.fastgit.org/graalvm/graalvm-ce-builds/releases/download/vm-22.0.0.2/graalvm-ce-java17-darwin-amd64-22.0.0.2.zip||
|adopt.version|17.0.2_8|The version of AdoptOpenJDK to download|
|adopt.win-x86|https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/17/jre/x64/windows/OpenJDK17U-jre_x64_windows_hotspot_17.0.2_8.zip||
|adopt.linux-x86|https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/17/jre/x64/linux/OpenJDK17U-jre_x64_linux_hotspot_17.0.2_8.tar.gz||
|adopt.linux-aarch|https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/17/jre/aarch64/linux/OpenJDK17U-jre_aarch64_linux_hotspot_17.0.2_8.tar.gz||
|adopt.linux-arm|https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/17/jre/arm/linux/OpenJDK17U-jre_arm_linux_hotspot_17.0.2_8.tar.gz||
|adopt.darwin-x86|https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/17/jre/x64/mac/OpenJDK17U-jre_x64_mac_hotspot_17.0.2_8.tar.gz||
|adopt.darwin-aarch|https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/17/jre/aarch64/mac/OpenJDK17U-jre_aarch64_mac_hotspot_17.0.2_8.tar.gz||
