# 配置开发环境  

本章笔者将带您配置PNX JS开发环境。  

## 安装PNX服务器  

要开始开发PNX服务器，您需要首先安装PNX服务器作为测试服，您可以在[快速入门](../../../快速入门.html)
章节中查看安装方式，这里不再赘述。  

## 确保能够进入测试服  

如果您要开发插件，肯定需要对插件进行测试，您需要确认您能够使用mc客户端进入您的测试服务器。  

### 远程测试服务器  

在您的mc客户端中加入您的远程服务器IP地址和端口，然后进入您的测试服务器。  

### 本地测试服务器  

我们推荐您使用本地测试服务器，能够更好地利用相关工具进行开发调试。  
打开命令行，使用PNX-CLI启动PNX服务器，然后在您的mc客户端中输入IP`127.0.0.1`和相应端口，进入您的测试服务器。  

特别提醒：  
如果您使用Windows系统，您可能需要取消UWP本地回环限制，具体方法 [点击此处查看](https://www.mcbbs.net/thread-719888-1-1.html) 。  

## 在VsCode中进行开发  

PNX为您在VsCode中进行javascript/typescript插件开发提供良好的支持。  

### 使用模板一键配置  

您可以使用GitHub仓库模板来快速生成一个配置好的新插件项目：

- [JavaScript插件模板](https://github.com/PowerNukkitX/JavaScript-Template)
- TypeScript插件模板 (*即将到来*)

您可以根据模板仓库中的指引创建自己的插件仓库，而后在Vscode中点击最左侧垂直从上到下排列的第三个按钮，进入源代码管理页面，
点击`克隆仓库`按钮，登录GitHub账号，将刚刚生成的新插件项目拉取到本地开始开发。  

**请注意，您应当按照`plugin.yml`中的注释提示进行相应的修改！**

### 从头开始手动配置

#### 创建插件文件夹  

找到您的测试服的`./plugins`文件夹，然后在此文件夹中创建您的插件文件夹，文件夹名称需要以`@`开头。
接下来，我们将以`@dir`代指您这一步创建的插件文件夹。  

#### 添加类型定义文件  

类型定义文件能够使得vscode给您在插件开发时智能提示和纠错，强烈建议您使用类型定义文件。  

1. 在`@dir`文件夹下创建一个`.header`文件夹
2. [点击此处](https://assets.powernukkitx.cn/stable/pnx.d.ts) 下载PNX内置模块类型定义到刚刚创建的文件夹中
3. 使用 [PNX字节码分析工具](https://www.powernukkitx.cn/tools/jarInsight) 将你使用的核心的类型定义导出并下载到刚刚创建的文件夹中

> 如何使用PNX字节码分析工具？
> 1. [打开网页](https://www.powernukkitx.cn/tools/jarInsight)
> 2. 点击`选择文件`按钮，选择PNX核心Jar包。**注意，你应该使用4-5MB的没有内置依赖库的核心jar包，否则会导致生成过大的定义文件使得Vscode崩溃。**
> 3. 点击`保存d.ts定义文件`按钮，下载定义文件并移动到正确的文件夹中

4. 接下来，在`@dir`文件夹中创建一个`jsconfig.json`文件，并输入如下内容然后保存：  

```json
{
    "compilerOptions": {
        "allowJs": true,
        "module": "ES2022",
        "alwaysStrict": true,
        "lib": [
            "ES2015",
            "ES2016",
            "ES2017",
            "ES2018",
            "ES2019",
            "ES2020",
            "ES2021",
            "ES2022"
        ]
    },
    "include": [
        ".header/**/*.d.ts",
        "./**/*.js",
        "./**/*.ts"
    ]
}
```

> 如果在`ES2022`、`ES2021`等字样下方出现红色波浪线并报错，请尝试更新Typescript版本
> 笔者使用的是`4.7.4`版本，请您自行更新到较新的版本，[更新方法](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions)

## 恭喜完成  

至此，您已经完成了开发环境搭建，可以开始准备开发自己的第一个插件了！  

