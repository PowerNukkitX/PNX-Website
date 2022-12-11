# Anti-xray

Anti-xray is a built-in anti-cheat function in PowerNukkitX, which can prevent player from penetrating ore block to the ground through X-ray, commonly known as fake ores.  
The anti-xray of PowerNukkitX in uses multicore parallel obfuscation algorithm, which can effectively prevent player from cheating in perspective without causing excessive performance overhead to your server.  

## How to enable anti-xray

In `nukkit.yml` server configuration file, find the configuration item of `anti-xray` and set the sub item `enabled` to `true`. If it does not exist, manually add the sub item.
If `anti-xray` configuration item also does not exist. Please add the following content to a new line at the end of the configuration file：

```yaml
anti-xray:
  world-name:
    enabled: true
    level: low
    pre-deobfuscate: true
```

Please remember to modify `world-name` to the real name of your world. The default world name is `world`.

If you have multiple worlds, you can configure anti mining options for them separately：

```yaml
anti-xray:
  world: # Default overworld
    enabled: true
    level: low
    pre-deobfuscate: true
  nether: # Default nether
    enabled: true
    level: middle
    pre-deobfuscate: true
  the_end: # Default end
    enabled: true
    level: high
    pre-deobfuscate: false
```

## Configuration explanation

| Configuration Item | explain                                                    | Optional        |
|--------------------|------------------------------------------------------------|-----------------|
| enabled            | Whether anti-xray is enabled                               | true/false      |
| level              | The higher the anti-xray level, the more fake ores         | low/middle/high |
| pre-deobfuscate    | Whether to deobfuscate fake mines around player in advance | true/false      |

## Reverse permeability grade  

There are three grades of anti-xray：`low`, `middle` and `high`.  

The higher the level, the more fake ores, and the more difficult it is for player to distinguish real ores from a pile of fake ores.  

### low  

![zPWsFf.md.jpg](https://s1.ax1x.com/2022/11/12/zPWsFf.md.jpg)

### middle

![zPWDTP.md.jpg](https://s1.ax1x.com/2022/11/12/zPWDTP.md.jpg)

### high

![zPWBwt.md.jpg](https://s1.ax1x.com/2022/11/12/zPWBwt.md.jpg)

## Pre-deobfuscate fake ores  

The fake ores of PNX are all virtual ores. Each time they enter the server, the location of fake ores is different, and each player sees a different location of fake ores.  

Fake ore will not generate a surface that can be directly seen by players, so players cannot see fake ores under normal circumstances.  
However, when the server network connection is poor, if the player destroys the block quickly, he will see the fake ore flash on the screen, which will affect the game experience.
Therefore, we can pre deobfuscate the fake ores around player by enabling the function of pre-eliminating fake ores, so that player will not see the fake ores flash on the screen.  

Please note that this function will cause greater pressure on the network, so it is strongly recommended using this function with hardware accelerated compression and higher compression ratio.
