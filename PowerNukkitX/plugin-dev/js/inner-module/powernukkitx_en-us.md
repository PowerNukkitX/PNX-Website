# powernukkitx Module  

## Member  

### PowerNukkitX  

PowerNukkitX server object 
type: `PowerNukkitX`  

## 类  

### EventPriority  

The priority of an event listener, The lower it is, the earlier the listener is executed.

#### Static Member  

##### LOWEST  
type: `EventPriority`  

##### LOW
type: `EventPriority`

##### NORMAL
type: `EventPriority`

##### HIGH
type: `EventPriority`

##### HIGHEST
type: `EventPriority`

##### MONITOR
type: `EventPriority`


### PowerNukkitX  

#### 方法  

##### getServerVersion  

Get PowerNukkitX server version  
return type: `string`

##### listenEvent  

Listen event.  
return type: `boolean` if we listen it successfully    
parameters:   

|name|type|comment|
|--|--|--|
|fullEventName|`string`|full java-class-name of the event|
|priority|`EventPriority`|priority of the listener|
|callback|`(event) => void`|callback of the listener|

##### commandBuilder  

Create a command builder  
return type: `CommandBuilder`  

### CommandBuilder  

#### Method  

#### getCommandName

return type: `string` command name  

#### setCommandName

return type: `CommandBuilder` this  
parameters:   

|name|type|comment|
|--|--|--|
||`string`||

#### getDescription

return type: `string` command description  

#### setDescription

return type: `CommandBuilder` this  
parameters: 

|name|type|comment|
|--|--|--|
||`string`||

#### getUsageMessage

return type: `string` command usage info


#### setUsageMessage

return type: `CommandBuilder` this  
parameters: 

|name|type|comment|
|--|--|--|
||`string`||

#### getAlias

return type: `string[]` command别名  


#### setAlias

return type: `CommandBuilder` this  
parameters: 

|name|type|comment|
|--|--|--|
||`...string`|all command alias|

#### addAlias

return type: `CommandBuilder` this  
parameters: 

|name|type|comment|
|--|--|--|
||`...string`|new command alias|

#### getPermission

return type: `string` permission of this command    

#### setPermission

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
||`string`||


#### getPermissionMessage

return type: `string` no permission info    

#### setPermissionMessage

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
||`string`||

#### getCommandParameters

return type: `Map<string, Object[]>` all arg groups of this command    

#### setCommandParameters

return type: `CommandBuilder` this  
parameters: 

|name|type|comment|
|--|--|--|
|parameterJavaMap|`Map<string, Object[]>`|all command arg groups|

#### getCallback

return type: `() => (sender, string[])` command callback    


#### setCallback

return type: `CommandBuilder` this  
parameters: 

|name|type|comment|
|--|--|--|
|callback|`(sender, string[]) => void`|command callback|

#### createCommandPattern

Create a new command arg group.
return type: `CommandBuilder` this  
parameters: 

|name|type|comment|
|--|--|--|
||`string`|name of the new command arg group|

#### createDefaultPattern  

Override default command arg group.
return type: `CommandBuilder` this  


#### addTypeParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|
|commandParamType|`Object`|arg type|

#### addIntParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addFloatParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addValueParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addWildcardIntParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addTargetParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addWildcardTargetParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addStringParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addBlockPositionParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addPositionParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addMessageParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addTextParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addJsonParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addSubCommandParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addFilePathParameter

return type: `CommandBuilder` this    
parameters:   

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addOperatorParameter

return type: `CommandBuilder` this    
parameters: 

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|

#### addEnumParameter

return type: `CommandBuilder` this    
parameters:   

|name|type|comment|
|--|--|--|
|name|`string`|arg name|
|optional|`boolean`|if it's an optional arg|
|enums|`...string`|available enums|

#### register

Register command that built just now into PNX.    
return type: `CommandBuilder` this    

