# Hardware compression acceleration

Hardware compression acceleration is an optional function provided by PNX, which can accelerate data compression by using hardware SIMD on modern CPUs.

## Why?

PNX is suitable for large servers. Many PNX server carry dozens or even hundreds of player at the same time, which means that each player will generate a large amount of data. Due to the requirements of the bedrock version, these data need to be compressed before they can be sent to player.  
At the same time, when player run maps, a large number of map data generated also need to be compressed and decompressed frequently.  
These data that need to be compressed or decompressed will consume a lot of CPU resources. Using hardware compression and decompression acceleration can greatly improve the performance.

## What CPU can enable this?

If your CPU can enable hardware accelerated compression, PNX will prompt you at startup.

When your CPU supports one or more of the following instruction sets, hardware accelerated compression can be enabled. The more instruction sets supported, the more advanced, and the greater the performance improvement：

| Instruction set | explain   |
|-----------------|-----------|
| AVX512          | Intel/AMD |
| AVX2            | Intel/AMD |
| AVX             | Intel/AMD |
| SSE4.2          | Intel/AMD |
| SSE4.1          | Intel/AMD |
| SSSE3           | Intel/AMD |
| SSE3            | Intel/AMD |
| SSE2            | Intel/AMD |
| SSE             | Intel/AMD |
| SVE             | ARMv8.2+  |
| NEON            | ARMv7+    |

## How to open it?

Modify config file `nukkit.yml`.  
Set `zlib-provider` in `network` to `3`.  
Here is an example：  

```yaml
network:
 # ......
 zlib-provider: 3 
```