# FAQ - Terra related  

## What's terra  

Terra is an [open-source](https://github.com/PolyhedralDev/Terra) 3rd party terrain Generator, pnx included it in terra branch,
You can use terra to generate epic worlds in pnx.

## Enable Terra  

To enable Terra and apply Terra to your world, the following two steps are required:  

In file `server.properties`:
```properties
use-terra=on
```

In file `nukkit.yml`:  
```yaml
worlds:
  Name of the world:
   seed: Seed of your world
   generator: terra:default:overworld
```

Then, restart the server, and now you can try the terra terrain generator.

## Use a third-party Terra terrain configuration package

Terra allows you to get completely new terrains by using different configuration packs

You can view the currently available configuration packages (incomplete) at this site: [Community Packs](https://terra.polydev.org/config/community-packs.html)

Next, let's take [Reimag END](https:github.comjustaureus Reimag END) configuration package as an example, the configuration package file name is "Reimag END.zip"

We want to apply this config package in the end, we need to set the following in nukkit.yml:
```yaml
worlds:
  the_end:
   seed: Seed You Want
   generator: terra:ReimagEND:end
```

Please note that in PNX, the configuration package selection syntax is different from the original terra, the format is:

`terra: configuration package file name (without suffix): dimension type (overworld, nether, end)`

For example, in this example, the configuration package file name is Reimag END.zip, so we need to set the generator to terra:Reimag END:end to select this configuration package

Note that we append an "end" parameter at the end, which sets the world type to End.

For different world types, the height limit of the y-axis is different, as follows:

- overworld: -64 - 320
- nether: 0 - 128
- end: 0 - 256

For some specific configuration packages, there may be cases where the world height limit is lower than the height required by the configuration package (such as the Tartarus hell package), at this time, the world type can be set to the main world to avoid this problem

After the setup is successful, you should be able to see the new terrain brought by the Reimag END configuration package in the end:

![REIMAGEND](%relativePrefix%image/common/terra_faq/ReimagEND-tiny.png)

## Why terra doesn't work

- If your world was previously using something other than the terra generator, terra won't work. Consider using a new world.  
- Please check that you have configured Terra correctly, otherwise it won't work.
## Too much memory used  

Sorry for the excessive memory usage, but due to the complexity of the terra algorithm and the high level of customization, it is inevitable that about 300MB of memory is used at startup. We have done our best to optimize it.  
If you really want to reduce memory usage, you can try modifying `./terra/config/yml`：
```yaml
cache:
  structure: 0 # default 32
  sampler: 0 # default 128
  biome-provider: 0 # default 32
```
Please note that this will affect performance and increase CPU load.  