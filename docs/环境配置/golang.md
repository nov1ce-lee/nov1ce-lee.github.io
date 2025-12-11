---
title: Golang起步篇：如何配置Golang开发环境
tags:
- Golang
- Windows
- Mac
- Vs Code
createTime: 2025/04/10 17:21:49
permalink: /blog/golang/
---

本篇文章将讲解如何在 Windows 端和 Mac 端配置`Golang`环境
___
## ::ri:windows-fill:: Windows下搭建Golang开 发环境
### 下载安装包
- 在浏览器访问Go语言官网下载地址 [All releases](https://go.dev/dl/)，根据你的系统下载合适的版本
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215634886.png)

### 安装Go语言
- 下载完成后，双击该安装包打开安装向导，按照步骤安装
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215705603.png)
> 可以设置安装目录，注意设定全英文路径


### 配置环境变量
- 打开系统环境变量      
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215717663.png)
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215725839.png)
- 添加用户变量 `GOROOT` 和 `GOPATH`     
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215735963.png)
```sh
GOROOT=D:\Software\Go           # 设置为你的Golang安装目录
GOPATH=D:\Software\Go\tools     # 设置为你的olang工具包安装目录
```
- 编辑系统变量 `Path`，点击编辑->新建
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215804540.png)
- 输入 `%GOROOT%\bin` 或刚刚安装的位置 `D:\Software\Go\bin`
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215814129.png)
- 配置完毕，点击所有确认保存

### 检查是否安装成功
- ==windows+R== 输入 `cmd` 打开终端并输入如下命令
```sh
go version  # 查看Go版本
```
- 若显示类似如下的内容说明安装成功      
> go version go1.24.1 windows/amd64

### 配置GO默认环境变量
- 继续在终端输入如下命令
```sh
# 开启mod模式->用于项目管理
go env -w GO111MODULE=on

# 重新设置镜像源->国内加速访问
go env -w GOPROXY=https://goproxy.cn,direct
# 或 go env -w GOPROXY=https://mirrors.aliyun.com/goproxy

# 关闭包的MD5校验
go env -w GOSUMDB=off

# 查看环境变量
go env
```

> [!TIP]
> 恭喜你！我们的Go语言开发环境准备完毕，可以开始编程之旅啦！

## ::iconoir:apple-imac-2021:: Mac下搭建Golang开发环境

### 下载安装包
- 查看系统架构
```zsh
uname -a
```
> 比如我的显示为    
`Pro.local 24.2.0 Darwin Kernel Version 24.2.0: Fri Dec  6 19:04:03 PST 2024; root:xnu-11215.61.5~2/RELEASE_ARM64_T8132 arm64`     
因此我的系统架构为`arm64`
- 在浏览器访问Go语言官网下载地址 [All releases](https://go.dev/dl/)，根据你的系统下载合适的版本，根据我的系统应该下载`go1.24.2.darwin-arm64.pkg`
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215825255.png)

### 安装Go语言
- 下载完成后，双击该安装包打开安装向导，按照步骤安装
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215825255.png)
- 默认安装到`/usr/local/go`目录

### 检查是否安装成功
- 在终端输入
```zsh
go version
```
> [!TIP]
> 若显示类似```go version go1.24.2 darwin/arm64```的内容说明安装成功    

### 配置环境变量
- 编辑 `~/.zshrc`文件
```zsh
nano ~/.zshrc
```
- 向文件中添加如下环境变量并保存
```sh
export GOROOT=/usr/local/go                 # Go的安装目录(默认正常)
export GOPATH=$HOME/go                      # 你的Go代码工作目录
export PATH=$PATH:$GOROOT/bin               # 添加go命令所在路径
export export GO111MODULE=on                # 启用 Go Modules（推荐）
```
- 在终端执行如下命令使该文件中的环境变量生效
```zsh
source ~/zshrc
```
### 配置GO默认环境变量
- 在终端中输入
```zsh
# 开启mod模式->用于项目管理
go env -w GO111MODULE=on

# 重新设置镜像源->国内加速访问
go env -w GOPROXY=https://goproxy.cn,direct
# 或 go env -w GOPROXY=https://mirrors.aliyun.com/goproxy

# 关闭包的MD5校验
go env -w GOSUMDB=off

# 查看环境变量
go env
```
    
> 若修改正常，那么恭喜你！我们的Go语言开发环境准备完毕，可以开始编程之旅啦！
