# PNX-CLI

PNX-CLI is a command line tool for PNX. It can help you to install and start PNX quickly.
windows using . \pnx.exe to run.
linux use . /pnx to run.
Hereafter abbreviated to pnx.
## Some common commands
The sub-list is the parameter body, and the main list is the command body.
- pnx start
   - -g&emsp;Generate startup commands
   - -r&emsp;Start the server in automatic reboot mode
   - --stdin=xxx&emsp;Read console input from the specified file (xxx input the file address, from pnx-cli current path)
- pnx server
   - --latest&emsp;Install the latest version of pnx core
   - -u&emsp;Install or upgrade PNX server core (manual selection required)
- pnx libs
   - -u&emsp;Install or update dependent libraries
   - -v&emsp;Check if the dependency library is up to date
- pnx jvm
   - check&emsp;View the installed JVMs
   - remote&emsp;Lists all available JVM in the PNX remote repository
   - install=name&emsp;Install the JVM according to the name.(The name is queried from the command above)
   - uninstall&emsp;Uninstall the installed JVM according to the entered serial number.
- pnx comp
   - -c&emsp;Check for available addons。
   - -i=name&emsp;Install or repair the addon according to the entered name. (The name is checked from the command above)
- pnx about&emsp;Information about the PowerNukkitX CLI

## How to use
1. Download the latest version of PNX CLI from here (https://github.com/PowerNukkitX/PNX-CLI/releases)
2. It is recommended to download the executable file for the corresponding platform, e.g. for windows download PNX-CLI-Windows-x86.zip  
   If you do not have your corresponding platform, you can use the jar package to use, use java -jar xxx command to start
3. Decompress, the following command should be used in the decompress path

### Linux Enter the following command to try
```
chmod +x . /pnx
./pnx jvm install=OracleJDK # Install jdk17, ignore this if you already have it
./pnx
```

### Windows PowerShell Enter the following command to try
```
.\pnx.exe jvm install=OracleJDK # install jdk17, ignore this if you already have it
.\pnx.exe
```

### Windows CMD Enter the following command to try
```
pnx.exe jvm install=OracleJDK # install jdk17, ignore this if you already have it
pnx.exe
```