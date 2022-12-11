# PNX-CLI
PNX-CLI 是PNX的命令行工具。可以帮助您快速安装并启动PNX。
windows使用.\pnx.exe运行  
linux使用./pnx运行
以下简写为pnx
## 常用的一些命令
子列表为参数体,主列表为命令体
- pnx start
   - -g&emsp;生成启动命令
   - -r&emsp;以自动重启模式启动服务器
   - --stdin=xxx&emsp;从指定文件中读取控制台输入(xxx输入文件地址,从pnx-cli当前路径)
- pnx server
   - --latest&emsp;安装最新版本pnx core
   - -u&emsp;安装或升级PNX服务端核心(需手动选择)
- pnx libs
   - -u&emsp;安装或更新依赖库
   - -v&emsp;检测依赖库是否为最新
- pnx jvm
   - check&emsp;查看已经安装了的JVM。
   - remote&emsp;列出PNX远程仓库中的所有可用JVM。
   - install=name&emsp;根据输入的型号名称安装新的JVM。(名称从上面的指令查询)
   - uninstall&emsp;根据输入的序号卸载已经安装了的JVM。
- pnx comp
   - -c&emsp;检查可用的附加组件。
   - -i=name&emsp;根据输入名称安装或修复附加组件。(名称从上面的指令查询)
- pnx about&emsp;PowerNukkitX CLI的信息。

## 如何使用
1. 从这里下载最新版本PNX CLI (https://github.com/PowerNukkitX/PNX-CLI/releases)  
2. 推荐下载对应平台的可执行文件，例如windows下载PNX-CLI-Windows-x86.zip  
如果没有你对应的平台，你可以使用jar包来使用，使用java -jar xxx命令启动  
3. 解压，以下命令要在解压出来的对应文件的路径使用
### Linux 输入下述指令尝试
```
chmod +x ./pnx
./pnx jvm install=OracleJDK #安装jdk17，如果你已经有了就忽略这条
./pnx
```
### Windows PowerShell 输入下述指令尝试

```
.\pnx.exe jvm install=OracleJDK #安装jdk17，如果你已经有了就忽略这条
.\pnx.exe
```

### Windows CMD 输入下述指令尝试

```
pnx.exe jvm install=OracleJDK #安装jdk17，如果你已经有了就忽略这条
pnx.exe
```
