---
title: VS Code配置SSH远程连接服务器环境
tags: 
- VS Code
- Ubuntu
createTime: 2024/12/23 17:52:12
permalink: /blog/remotessh/
---
## 碎碎念
在搭建网站的过程中刚好注意到了VS Code的这个插件，使用体验良好，遂在这里介绍一下使用方式

## 通过SSH连接服务器
- 打开`VS Code`，进入拓展`Ctrl+Shift+X`，安装拓展`Remote-SSH`
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215955761.png)
### 直接连接
- 打开命令面板`Ctrl+Shift+P`
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215955761.png)
- 选择`添加新的SSH主机`，进行远程连接信息配置
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727220006889.png)
- 选择更新文件`config`
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727220013880.png)
- 再次打开命令面板`Ctrl+Shift+P`，选择`连接到主机`，点击对应服务器进行连接，此时服务器会要求你输入密码，输入密码连接即可

### 使用远程资源管理器连接
- 在左边栏右键打开`远程资源管理器`

![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727220022304.png)
- 点击打开SSH配置文件，选择`config`文件

![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727220049225.png)
- 仿照如下格式填写信息
```
Host novishare.site
  HostName novishare.site
  User ubuntu
```
- 其中`Host`之后填写的是存储的`主机标识名`，`HostName`则是`ip地址`或`域名`，`User`填写连接的`用户名称`

## 配置免密登录方式
通过生成SSH使用的公钥/私钥对，实现服务器的免密登录
:::tabs
@tab Windows
### 生成密钥对
- 在本地启动终端`Windows+R运行cmd`，输入命令
```sh
ssh-keygen -t rsa
```
- 会出现以下提示
```
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\xxxx/.ssh/id_rsa):
```
- 设置存储位置后，可以得到
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727220054689.png)

- 其中`id_rsa`中是`私钥`，在本地储存，`id_rsa.pub`是`公钥`，在服务器端储存

### 将公钥上传至服务器
- 在服务器用户路径下创建`.ssh`文件夹
```sh
# 创建目录
mkdir ~/.ssh
# 进入目录
cd ~/.ssh
# 创建authorized_keys文件并编辑
nano authorized_keys
```
- 在本地打开`id_rsa.pub`，复制公钥内容，粘贴进`authorized_keys`文件尾部并保存
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727220104658.png)

### 本地配置私钥
- 打开前面配置SSH时的config文件，在配置内容后加入`IdentityFile`
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727220109701.png)
```
IdentityFile "c:\Users\xxx"
```
- 该文件路径指向生成的私钥即可，此时就可以实现服务器的免密登录连接
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727220116045.png)

@tab Mac
### 生成密钥对
- 启动终端并输入
```sh
ssh-keygen -t rsa
```
- 设置存储位置（默认终端所处位置）
> 其中`id_rsa`中是`私钥`，在本地储存，`id_rsa.pub`是`公钥`，在服务器端储存

### 将公钥上传至服务器
- 在服务器用户路径下创建`.ssh`文件夹
```sh
# 创建目录
mkdir ~/.ssh
# 进入目录
cd ~/.ssh
# 创建authorized_keys文件并编辑
nano authorized_keys
```
- 在本地打开`id_rsa.pub`，复制公钥内容，粘贴进`authorized_keys`文件尾部并保存
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727220116045.png)

### 本地配置私钥
- 打开前面配置SSH时的config文件，在配置内容后加入`IdentityFile`
```sh
Host myserver  # 自定义别名（如：myserver）
  HostName remote_ip  # 服务器IP或域名
  User username       # 登录用户名
  IdentityFile ~/.ssh/id_rsa  # 私钥路径
```
- 该文件路径指向生成的私钥即可，此时就可以实现服务器的免密登录连接
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727220211673.png)


```
:::