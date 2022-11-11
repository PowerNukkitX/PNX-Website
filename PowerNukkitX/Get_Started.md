# Get Started  

Follow this tutorial for ten minutes (not including the download time) to start your first PowerNukkitX server.  
This tutorial will take you through a quick installation and start-up of the server using the PNX-CLI.

## Download CLI  

Click here to go to [Github Release](https://github.com/PowerNukkitX/PNX-CLI/releases) and download PNX-CLI.  
Please download the corresponding version according to the actual situation of your computer:

| OS      | CPU          | Name                | Note                              |
|---------|--------------|---------------------|-----------------------------------|
| Windows | x86(x64)     | PNX-CLI-Windows-x86 ||
| Linux   | x86(x64)     | PNX-CLI-Linux-x86   ||
| Linux   | arm(aarch64) | PNX-CLI-Linux-arm   ||
| Other   | any          | PNX-CLI-Jar         | An pre-installed jre is required. |

After downloading, please unzip and extract the executable file.

## Install PNX-CLI

After the download is completed, please unzip and extract the executable file into a folder, and PNX-CLI installation is completed.

Notice that in the path **Cannot have spaces**！ Otherwise, the CLI cannot normally configure the PNX environment.

## Start PNX Server

### Windows

1. Double click to run `pnx.exe`
2. Next, you will be asked which version of the core you want to use. Enter`1`And enter to use the latest version
3. Next, you will be asked whether to complete the dependencies. Enter`1`And enter to select`true`Option
4. Next, you will be asked about your language and input`chs`Select Chinese (Simplified)
5. Your PNX server has been successfully started. Next, you can further configure the server or enter`stop`Stop Server
6. Remember, enter`stop`Then you need to press Enter within 10 seconds after the service is stopped, otherwise it will restart automatically

### Linux

1. Open the terminal and input `./pnx` and enter
2. Next, you will be asked which version of the core you want to use. Enter` 1` and enter to use the latest version
3. Next, you will be asked whether to complete the dependencies. Enter `1` and enter to select `true` option
4. Next, you will be asked about your language and input `eng` to select English as your language
5. Your PNX server has been successfully started. Next, you can further configure the server or enter `stop` to stop PNX server
6. Remember, if you enter `stop` then you need to press Enter within 10 seconds after the service is stopped, otherwise it will restart automatically

## Advanced Usage of Command Line Tools

- see [PNX-CLI Tutorial](./faq/PNX-CLI_Launcher_Tutorial_for_Beginners.md)

## Configure your PNX server

- see [Server.propertiesConfiguration Introduction](./faq/Server.propertiesIntroduction to Configuration.html)
- see [Nukkit.ymlConfiguration Introduction](./faq/Nukkit.ymlIntroduction to Configuration.html)