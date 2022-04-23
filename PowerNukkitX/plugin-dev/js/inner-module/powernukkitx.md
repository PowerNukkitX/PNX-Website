# powernukkitx内置模块  

## 成员  

### PowerNukkitX  

PowerNukkitX服务端操作对象  
类型：`PowerNukkitX`  

## 类  

### EventPriority  

事件优先级枚举，越低越优先执行

#### 静态成员  

##### LOWEST  
类型：`EventPriority`  

##### LOW
类型：`EventPriority`

##### NORMAL
类型：`EventPriority`

##### HIGH
类型：`EventPriority`

##### HIGHEST
类型：`EventPriority`

##### MONITOR
类型：`EventPriority`


### PowerNukkitX  

#### 方法  

##### getServerVersion  

获取PowerNukkitX服务器版本  
返回类型：`string`

##### listenEvent  

监听事件  
返回类型：`boolean` 是否监听成功    
参数：  

|名称|类型|注释|
|--|--|--|
|fullEventName|`string`|事件的java全限定类名|
|priority|`EventPriority`|事件监听器的优先级|
|callback|`(event) => void`|监听回调函数|

##### commandBuilder  

新建一个命令构造器  
返回类型：`CommandBuilder`  

### CommandBuilder  

#### 方法  

#### getCommandName

返回类型：`string` 命令名  

#### setCommandName

返回类型：`CommandBuilder` this  
参数：  

|名称|类型|注释|
|--|--|--|
||`string`||

#### getDescription

返回类型：`string` 命令描述  

#### setDescription

返回类型：`CommandBuilder` this  
参数：

|名称|类型|注释|
|--|--|--|
||`string`||

#### getUsageMessage

返回类型：`string` 命令用法提示


#### setUsageMessage

返回类型：`CommandBuilder` this  
参数：

|名称|类型|注释|
|--|--|--|
||`string`||

#### getAlias

返回类型：`string[]` 命令别名  


#### setAlias

返回类型：`CommandBuilder` this  
参数：

|名称|类型|注释|
|--|--|--|
||`...string`|全部命令别名|

#### addAlias

返回类型：`CommandBuilder` this  
参数：

|名称|类型|注释|
|--|--|--|
||`...string`|新增的命令别名|

#### getPermission

返回类型：`string` 使用命令所需的权限节点  

#### setPermission

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
||`string`||


#### getPermissionMessage

返回类型：`string` 无命令权限提示信息  

#### setPermissionMessage

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
||`string`||

#### getCommandParameters

返回类型：`Map<string, Object[]>` 命令所有参数组  

#### setCommandParameters

返回类型：`CommandBuilder` this  
参数：

|名称|类型|注释|
|--|--|--|
|parameterJavaMap|`Map<string, Object[]>`|所有命令参数组的Map|

#### getCallback

返回类型：`() => (sender, string[])` 命令回调函数  


#### setCallback

返回类型：`CommandBuilder` this  
参数：

|名称|类型|注释|
|--|--|--|
|callback|`(sender, string[]) => void`|命令回调函数，sender为发送者，string[]为命令参数|

#### createCommandPattern

开始创建一个命令参数组
返回类型：`CommandBuilder` this  
参数：

|名称|类型|注释|
|--|--|--|
||`string`|新建的命令参数组名称|

#### createDefaultPattern  

开始覆写默认命令参数组
返回类型：`CommandBuilder` this  


#### addTypeParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|
|commandParamType|`Object`|参数种类|

#### addIntParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addFloatParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addValueParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addWildcardIntParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addTargetParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addWildcardTargetParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addStringParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addBlockPositionParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addPositionParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addMessageParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addTextParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addJsonParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addSubCommandParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addFilePathParameter

返回类型：`CommandBuilder` this    
参数：  

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addOperatorParameter

返回类型：`CommandBuilder` this    
参数：

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|

#### addEnumParameter

返回类型：`CommandBuilder` this    
参数：  

|名称|类型|注释|
|--|--|--|
|name|`string`|参数名称|
|optional|`boolean`|是否为可选参数|
|enums|`...string`|可选的枚举值|

#### register

正式将此构造器构造的命令注册到PNX中  
返回类型：`CommandBuilder` this    

