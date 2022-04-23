# Plugin Format  

This document describes the JavaScript plugin format applicable to the powernukkitx server.  

## Record Category   

A JS plugin should be on the PNX server `plugins` one in the directory with `@` in the directory starting with, the following is an example：  

- PowerNukkitX.jar
  - plugins (directory)
    - @Your JS plugin name (directory)
      - plugin.yml
      - xxx.js
      - xxx2.js
        - xxx (Table of contents)
          - xxx.js
          - ...
      - ...

## plugin.yml Format  

`plugin.yml`Is the configuration file of a JS plugin in YML format, which is used to describe the relevant information of this plugin.  

```yaml
name: Name of your JS plugin
main: xxx.js # JSFor the entry file, a main function (such as main. JS) should be exported
version: "Version number“
api: ["1.0.13"] # APIVersion, PNX supports JS plugin from 1.0.13
load: POSTWORLD # The loading sequence of plugin can only be filled in startup or PostWorld
# STARTUP: At this time, the server has just started and the map has not been loaded. It is usually used for the dependencies
# POSTWORLD: At this time, all the maps on the server are loaded, and you can usually fill in PostWorld
author: Author's name # This item may not exist
authors: # This item may not exist
- When there are multiple authors
- You can fill in a list of author names
description: Plugin description text
website: The website of this plugin
depend: # Dependency of the plugin. Fill in the name of the dependent plugin. If one of the dependent plugin does not exist, PNX will not load the JS plugin. This item may not exist
- Plugin1
- Plugin2
softdepend: # The soft dependency of the plugin. Fill in the name of the soft dependent plugin. The soft dependent plugin will be loaded before the JS plugin. If one of the dependent plugin does not exist, PNX still loads the JS plugin. This item may not exist
- Plugin1
- Plugin2
```

## JSEntry file format  

PNXIn, all JS plugin will be loaded as [ES Modules](https://zhuanlan.zhihu.com/p/400573436).  
The plugin can be configured with `plugin.yml`.  
The entry file must be exported `main` function, optional export `close` functions, for example：  
```javascript
console.log("JS")

export function main() {
	console.log("JS plugin start")
}

export function close() {
	print("JS plugin close");
}
```  

Among them, the whole JS code will be executed when the server is initialized. At this time, you should not operate on the server.  
`main` function will be`plugin.yml` that run at the specified load time.  
`close` function will be executed when the plugin is unloaded.  

