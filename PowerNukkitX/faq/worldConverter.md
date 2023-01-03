### Overview

Have you been running BDS for years and now want to switch to PowerNukkitX?
> Example: [How could I convert BedrockSever1.18 world to Nukkit?](https://cloudburstmc.org/threads/how-could-i-convert-bedrocksever1-18-world-to-nukkit.1449/)

Have you already enjoyed the plugin ecosystem of JE or want to convert a purchased JE map to PowerNukkitX?

Although you have already seen the epic terrain provided by Terra, do you want to use your own map?

After reading the tutorial below, you will not need to ask for help from anyone or any tool like WorldFixed!


### Choose Our Tools

- [AmuletMC](https://www.amuletmc.com/)
- [PNXWorldConverter](https://github.com/PowerNukkitX/PNXWorldConverter) - [Go to download](https://github.com/PowerNukkitX/PNXWorldConverter/releases/latest)


### The Idea of Conversion

Allow me to briefly introduce these two tools.

AmuletMC is a tool developed by **Amulet-Team** that can convert JE/BE maps of any version. We can use it to convert maps that PNXWorldConverter cannot perfectly handle to `JE 1.15-1.19` map versions that PNXWorldConverter can handle perfectly.

Then we use PNXWorldConverter to convert the map to a format that PNX can load.


### Practice

The famous Italian artist once said:

> Theoretical detachment from practice is the greatest misfortune.
> <p align="right">- Leonardo da Vinci</p>

The steps for practicing this skill are divided into three steps, and you can master it in about 2 minutes.

Before we begin, we need to prepare the following two files:

1. [丛林神庙origin.zip](https://res.nullatom.com/res/pnx/docs-world-converter/%E4%B8%9B%E6%9E%97%E7%A5%9E%E5%BA%99origin.zip)
This is a map created by **June Aurora**. [Learn more?](https://space.bilibili.com/23620015 "Learn more?")
For learning purposes only, not for commercial use.
2. [pnxworldconvert-1.0.2.jar](https://res.nullatom.com/res/pnx/docs-world-converter/pnxworldconvert-1.0.2.jar)

When you are ready, the directory structure should look something like this:
> - 丛林神庙
>  - region
>  - level.dat
>  - ...
> - pnxworldconvert-1.0.2.jar

#### Step 1
Next, we will use a command line tool to switch the execution directory to the current folder:

In this tutorial, the path is `C:\Users\Administrator\Desktop\demo`, so the command is as follows. You need to change it to your execution path:

```shell
cd C:\Users\Administrator\Desktop\demo
```
Then execute the following command:

```shell
java -jar pnxworldconvert-1.0.2.jar -t ./丛林神庙 -d OVERWORLD
```
![pSin7p6.png](https://s1.ax1x.com/2023/01/03/pSin7p6.png)
> In the image, an error occurred because the jar file was not found due to an incorrect file name being entered.

#### Step 2

Because PNXWorldConverter is a Java17 project, if your Java PATH is not Java17, you may get an error saying that the Java version is too low, as shown in the image below:

![pSinH1K.md.png](https://s1.ax1x.com/2023/01/03/pSinH1K.md.png)

We can use the absolute path to the Java17 executable file (in Windows this is `java.exe`) to replace the `java` command in the command, as follows:

![pSin5kR.md.png](https://s1.ax1x.com/2023/01/03/pSin5kR.md.png)

```shell
"C:\Program Files\Java\jdk-17.0.2+8\bin\java.exe" -jar pnxworldconvert-1.0.2.jar -t ./丛林神庙 -d OVERWORLD
```
However, this method is often not elegant enough and is often lamented by some.

#### Step 3

Now we should be able to start the conversion normally, as shown in the image below:

![pSinOne.md.png](https://s1.ax1x.com/2023/01/03/pSinOne.md.png)

After the conversion is complete, we will find that there is an `output` folder in the current directory, which contains the result we have been waiting for.


### Greetings!

It is a pleasure that you have arrived here. This tutorial has come to an end.

We hope that you can thrive in the world of PowerNukkitX.

