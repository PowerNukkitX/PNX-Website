# Modules  

PNX JavaScript plugin use [ES Modules](https://zhuanlan.zhihu.com/p/400573436) System, you can import other JS files in this plugin and other JS plugin through ESM
JS file, built-in module or any Java class.  

## Related terms  

|term|interpretation|
|--|--|
|Plugin directory|contain`plugin.yml`Yes, to`@`Beginning directory|
|Plugin directory|Same as plugin directory|
|Relative path|The relative path starting from the plugin directory, with`/`Is the path separator,`./`This is the plugin directory|

## Module path Convention  

We agree that various modules have the following paths：  

### Other JS files in this plugin  

The module path convention is`File name under relative path`。  

### JS files in other plugin  

The module path convention is`@Other plugin plugin names/File name under the relative path of other plugin`。  

### Built in module  

The module path convention is`:Built in module name`。  

### Javaclass  

The module path convention is`JavaClass fully qualified class name`。  


## Examples  

Assume the following file structure：  

- PowerNukkitX.jar
  - plugins
    - @myLib
      - plugin.yml
      - lib.js
      - math
        - math.js
    - @myPlugin
      - plugin.yml
      - main.js
      - info.js
      - test
        - test.js

main.jsImport example：  

```javascript
import {PowerNukkitX as pnx, EventPriority} from ":powernukkitx";
import {Info} from "info.js";
import {MyTest} from "test/test.js";
import {Lib} from "@myLib/lib.js";
import {plus} from "@myLib/math/math.js";
```

