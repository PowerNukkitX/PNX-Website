# To newcomers 

This page will answer some of your questions about PNX content and capabilities.  

## Is PNX open source?  

Yes, PNX is completely open source. You can [Githubmemory pool](https://github.com/PowerNukkitX/PowerNukkitX) To get all the source code.  

## Is PNX free?  

It is completely free for you to download and use PNX to set up mcbe server. The third-party service provider can use PNX for charging services free of charge after clearly informing the service recipient of the content of this page.  
Unless otherwise provided by the laws of the people's Republic of China. Except for the contract signed with the development team, members of the development team or a third party that does not violate the open source agreement of the project.  

The development team or members of the development team may charge you for providing customized services, customized plugin, relevant information and other value-added services, including but not limited to.  

## What versions does PNX support?  

Minecraft: Bedrock Edition v1.19.50 (Protocol 560)  

## How about PNX original feature support?  

### How world does PNX have?  

Yes, PNX supports any number of worlds at a single end. You can have multiple primary worlds, lower bound and destination at the same time.  
PNX supports the new version of the world with 384 grid height.  

### Does PNX have lower bound and terminal? 

Yes, PNX has lower bound and terminal.  

### Does PNX have all original block and item?  

PNX supports all original block and item of the current MC version, including command block and red stone related block.  

### Does PNX have red stone?  

PNX fully supports the original Redstone, with almost the same Redstone behavior as the original, but slightly different from the original in terms of piston worm and electricity generation.  

### Does PNX have orders?  

PNX fully supports commands and supports [Almost all original commands](https://github.com/PowerNukkitX/PowerNukkitX/issues/250) , also supports the registration of custom (true) commands through the plugin.  

### Does PNX have a command block?  

PNX fully supports command block, has the same behavior as the original, can accept the same red stone control as the original, and supports chain and circular command block. The performance of the command block in PNX is better than that of the original and BDS.  

### Is PNX alive?  

PNX has only completed preliminary support for biology. If you want to further biological AI, you can install [MobPluginPlugin](https://ci.lt-name.com/job/MobPlugin/job/PNX/) Make PNX server have biological behavior similar to the original.   

### Does PNX have addons?  

No, PNX does not support addons. On the contrary, PNX provides Java plugin and JS plugin with APIs similar to forge in Java. You can use plugin to accomplish everything addons can do. Moreover, PNX has much more functions and better performance than addons.  

### PNX has the original world/Terrain?  

The default generator of PNX is a high-performance terrain generator imitating 1.14, which is different from the original terrain.  

Therefore, PNX also provides other generators：  
- [Terragenerator ](TerraQuestion HTML), which can generate an epic world, and is suitable for servers such as architectural clothing and survival clothing.  
- [Pure original generator](https://github.com/KCodeYT/VanillaGenerator) , which can generate a world completely consistent with the original version of the latest supported version, and the same seed can generate the same original world, which consumes huge server performance.  

## What is the performance of PNX?  

### How many people can PNX drive?  

It is difficult to answer this question accurately, which is limited by your server hardware and network conditions.  

We can provide you with some measured data for reference：  

- The official test clothes and hardware are i9cpu servers sponsored by Wulang cloud. In the five person flight chart test and other original feature tests, the overall average CPU utilization of each test is less than 5%, the maximum utilization rate of a single core is less than 30%。  
- The hardware of a survival service is Tencent cloud lightweight cloud server, which is configured with a 1-core CPU (2.4GHz), 2GB of memory, 5mbps of bandwidth. The content is relatively complete. Dozens of plugin are installed. There are more than a dozen worlds such as halls, plots, survival areas, and store areas. 20 player live online at the same time, and the server TPS is running stably at about 13
- The hardware of a group server is a self built server configured with 64 core CPU（~2Ghz)，100+GBMemory, home bandwidth, survival experiment, 60 player compete with the world for survival, and the server TPS has been maintained at 20, stable operation.
- XXThe hardware of the technology panel service is unknown. It is configured with 4 cores and 8GB memory. When 2 player and 3000 entity (sheep, cattle, chicken, etc.) are within the visual range of player, the server TPS runs stably at about 19.

These measured data may not be completely applicable to your server, but we usually give some simple suggestions, which may be helpful to you：  

- Large memory helps PNX greatly improve its performance. PNX uses more memory to cache binary machine codes, and dynamically optimizes the core cache computing structure during operation to make its performance much higher than that of BDS.  
- More CPU cores help to improve performance. For example, the performance of 8-core e5v3 is nearly 30% higher than that of 4-core i9-9900k in some cases%。  
- Using Linux system helps to improve PNX performance. Some runtime optimizations cannot be performed on windows. If you want to use the pure original generator, it is strongly recommended to use the windows system.  
- In many cases, the network bandwidth restricts the smoothness of your server. Generally speaking, 1Mbps bandwidth can only be used for 3-4 player to play smoothly.  
- Memory read-write speed, memory installation location on the motherboard and memory communication rate will also have some impact on PNX performance.

### Does PNX support multi-core?  

Yes, PNX has good multi-core support and can make full use of multiple server cores. You don't have to pursue high frequency. Properly increasing the number of server cores can greatly improve the performance of the server.  

PNX processes terrain generation, biological AI, entity motion and many other places in multi-core parallel processing. However, in order to ensure compatibility with existing plugin and consistency with the original features, not all tasks will be multi-core processing.
Even so, the processing speed of PNX single core is faster than that of similar server, such as BDS and pocketmine.  

### Is PNX performance bad?  

#### JavaReally better than C++Slow?  

Many people think that Java is a so-called "interpreted" language, and its performance will be better than that of C++Slow, which makes sense to some extent, but it is not entirely applicable.
In many application scenario tests, java17 outperforms C++This is mainly due to the fact that Java can dynamically optimize and compile code into machine code at runtime.
We know, C++It compiles the source code into machine code and allows the operating system to run directly. However, this disadvantage is that it does not know what the CPU running the machine code is, what special acceleration functions it supports, and so on.
Moreover, the compiler does not know where to optimize the memory when the code is running, where to use the CPU in exchange for the CPU performance, where the optimization is not used at all, where to optimize the fastest, and so on.  
Java is not the case. We have introduced the world's leading grail instant compiler, which will analyze specific problems when the program is running. It can determine what optimization to perform according to the running status of the server. It can also
Compile the machine code that is most suitable for the CPU of the current machine, use the unique acceleration function of the CPU, and try to avoid using the CPU to execute instructions slower than C++Compilers provide more high-performance code, which greatly improves execution speed.  

#### Does language determine performance?  

Not exactly. What really determines performance is code quality. PNX is fully open source. We can optimize the code for each scenario and accelerate it through multi-core parallelism, which makes PNX performance higher than some other server.  
However, please note that loading too many plugin may seriously reduce performance, because the plugin code quality level is uneven, and we cannot make any guarantee.  



