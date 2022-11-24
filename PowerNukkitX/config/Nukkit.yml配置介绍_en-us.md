# Nukkit.yml Configuration Introduction
## settings:
Nukkit server setting
## language: chs
Nukkit server language
- chs　Simplified Chinese
- cht　Traditional Chinese
- eng　English
- jpn　Japanese
- rus　Russian
- spa　Spanish　
- pol　Polish
- bra　Portuguese Brazil
- kor　Korean
- ukr　Ukrainian
- deu　German
- ltu　Lithuanian
- idn　Indonesian
- cze　Czech
- tur　Turkish
- fin　Finland
- vie　Vietnamese
- fra　French
 ## force-language: false
 Whether to force the server language (false is turned off and true is turned on)
 ## shutdown-message: "Server closed"
 Prompt message to close the server
 ## query-plugins: ture
 Whether to allow the plugin of the server to be listed through Query (false is turned off and true is turned on)
 ## deprecated-verbose: true
 When the plugin uses an API that is not recommended, a prompt is displayed on the console (false turns off true turns on)
 ## async-workers: auto　
 ### safe-spawn: true
 Number of threads working asynchronously
 If set to auto, the server will try to detect the number of cores of the CPU (at least 4)

## waterdogpe:
Whether to enable Waterdog PE compatibility. After enabling, you can only enter the server through Waterdog PE.
The default value is` false`

## network:
Network related settings
 - batch-threshold: 256
 - compression-level: 7
 - async-compression: false
 - zlib-provider: 2 # See hardware accelerated compression for details

## debug:
debugRelated settings
 - level: 1
 - commands: false
 - ignored-packets:
   - LevelChunkPacket

## timings:
Find the cause of server seizure
- enabled: false
- verbose: false
- history-interval: 6000
- history-length: 72000
- bypass-max: false
- privacy: false
- ignore: []

## level-settings:
Map Settings
- default-format: anvil
- auto-tick-rate: true
- auto-tick-rate-limit: 20
- base-tick-rate: 1
- always-tick-players: false
- tick-redstone: true

## chunk-sending:
Block Settings
- per-tick: 4
- max-chunks: 192
- spawn-threshold: 56
- cache-chunks: false

## chunk-ticking:
Block random engraving
- per-tick: 40
- tick-radius: 3
- light-updates: false
- clear-tick-list: false

## chunk-generation:
Block Builder
- queue-size: 8
- population-queue-size: 8

## ticks-per:
The maximum random mark of these entity (currently invalid)
 - animal-spawns: 400
 - monster-spawns: 1
 - autosave: 6000
 - cache-cleanup: 900

## spawn-limits:
Maximum number of entity (currently invalid)
 - monsters: 70
 Number of monsters generated: 70
 - animals: 15
 Number of animals generated: 15
 - water-animals: 5
 Aquatic biomass: 5
 - ambient: 15
 

## player:
Player related settings
 - save-player-data: true
 Save player data
 - skin-change-cooldown: 30
 Player skin update time
 - force-skin-trusted: false
 Force trusted skin (false turns off and true turns on)
 - check-movement: true
 Motion detection (false off, true on)

## aliases:
Command alias
- Example：
- showtheversion：version
- savestop：[Save, Stop]

## worlds:　
Builder World Settings
  - world: # Generate World Name
     - seed: 12235 　# Generate world seed
     - generator: terra:default　# Generator type (current type：terraEpic World Generator)
    
