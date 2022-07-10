# HelloWorld  

本章中笔者将带您制作第一个js插件。  

## 插件格式  

一个JS插件即为一个在`plugins`文件夹中的以`@`为开头的文件夹中的内容。  
每个JS插件都需要包含`plugin.yml`配置文件和至少一个`js`文件，也可以包含任意数量的任意文件和文件夹。  
具体的格式说明可以在 [插件格式](../插件格式.html) 章节中查看。**强烈建议您仔细阅读插件格式章节**  

## 创建plugin.yml  

> 再次提醒，`@dir`文件夹指代您创建的插件文件夹  

在`@dir`文件夹中创建`plugin.yml`配置文件，并在其中填写插件的基本信息。  

```yaml
name: HelloWorld
main: index.js
version: "1.0.0"
api: ["1.0.13"]
load: POSTWORLD
author: 请把这行中的汉字替换为你的名字
description: 第一个HelloWorld插件
```

## 创建js文件  

刚刚我们在`plugin.yml`中的`main`字段中指定了我们的js入口文件叫做`index.js`，现在我们在`@dir`文件夹中创建一个名为`index.js`的js文件。  

```js
console.log("Hello World")

export function main() {
	console.warn("Hello World")
}

export function close() {
	console.error("Hello World");
}
```

上面的代码将会在服务端启动时、服务端开始初始化插件时，服务端关闭时分别在控制台以`INFO`、`WARN`、`ERROR`的方式输出`Hello World`。  

> PNX JS遵守ESM(EcmaScript Module)规范，因此您需要在编写时遵守ESM规范  
> 需要被外部调用的函数应当加上`export`关键字  
> 您可以在 [此处](https://zhuanlan.zhihu.com/p/400573436) 了解更多关于ESM的信息  

## 一些解释  

整个JS代码将在服务器刚启动时加载，请务必牢记：**大部分与游戏相关的内容，如监听事件，生成物品，操作地图，控制生物等等都不能在刚开始的时候进行！**  

`export main`函数将会在PNX服务器初始化完成后被调用，此函数被调用时及以后您可以进行与游戏相关的操作。  
`export close`函数将会在在PNX服务器关闭时或您的插件被卸载时调用，此时您应当进行一些清理收尾工作。  

