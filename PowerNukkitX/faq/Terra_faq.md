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
   generator: terra:default
```

Then, restart the server, and now you can try the terra terrain generator.  

## Why terra doesn't work

- If your world was previously using something other than the terra generator, terra won't work. Consider using a new world.  
- If you are using a branch that does not include Terra (the size of terra branch is 35MB), you need to replace the server core.  

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