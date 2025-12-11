---
title: Ubuntu中Nginx的安装与配置
tags:
- Nginx
- Ubuntu
createTime: 2024/12/27 22:26:54
permalink: /blog/nginx/
---
## 简介
### Nginx是什么
- `Nginx(Engine X)`是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务，其特点是**占有内存少、并发能力强**，同时支持`热部署`，可以连续长时间不间断运行，因它的稳定性、丰富的功能集、简单的配置文件和低系统资源的消耗而闻名

### 正向代理和反向代理
- 代理相当于一个`中介`，比如A和B之间需要连接，添加一个C在A与B之间，A与B不直接连接，而是通过C作为中介进行连接
- 一个完整的请求的组成：`client(客户端)`->`proxy(代理)`->`server(服务端)`

#### 正向代理(Forward Proxy)
- `正向代理`位于客户端和目标服务器之间，客户端通过代理服务器访问无法直接到达的服务器资源
- 对于目标服务器来说，它看到的是代理服务器而不是真正的客户端，从而`绕过访问限制`、`提高访问速度(通过缓存)`、`隐藏客户端的真实IP地址来保护用户隐私`

![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215907200.png)
#### 反向代理(Reverse Proxy)
- `反向代理`位于客户端和一组服务器之间，它接收来自客户端的请求并将其分发到后端的服务器
- 对于客户端来说，它感知不到后端的服务器，只能与`代理服务器`进行交互
- 反向代理的主要作用是：`负载均衡`、`提高访问速度`、`隐藏服务器的真实IP地址`、`提供额外的安全保护`

![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215923372.png)
## Nginx的下载和安装
### 安装环境
- Linux Ubuntu(WSL)：Linux version 5.15.167.4-microsoft-standard-WSL2 (gcc (GCC) 11.2.0, GNU ld (GNU Binutils) 2.37)
- 首先更新系统包列表
```sh
sudo apt update
sudo apt upgrade -y
```
- 安装必要的依赖包
```sh
sudo apt install -y build-essential libpcre3 libpcre3-dev zlib1g zlib1g-dev libssl-dev wget
```
## Nginx的安装
### 使用nginx压缩包安装
::: tip 提示
该方式可以精确部署，如安装在用户文件夹中，避免一些访问和修改的权限问题
:::
- 下载nginx源码
```sh
cd data/nginx
sudo wget http://nginx.org/download/nginx-1.27.3.tar.gz
```
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215930881.png)
- 解压压缩包
```sh
# 解压到当前目录下
tar -xzvf nginx-1.27.3.tar.gz
cd nginx-1.27.3
```
- 配置编译选项
```sh
# --prefix=path 指定nginx的安装目录
# --with-pcre: 启用PCRE支持（正则表达式）
# --with-http_ssl_module: 启用SSL模块
# --with-http_v2_module: 启用HTTP/2支持
# --with-http_gzip_static_module: 启用Gzip静态压缩模块
# --with-stream & --with-stream_ssl_module: 启用TCP/UDP流支持及其SSL模块
sudo ./configure \
  --prefix=/home/novice/data/nginx \
  --with-pcre \
  --with-http_ssl_module \
  --with-http_v2_module \
  --with-http_gzip_static_module \
  --with-stream \
  --with-stream_ssl_module
```
- 编译
```sh
# 若显示Permission denied，则输入sudo make
make
```
- 编译完成后，执行make的install命令安装Nginx服务器
```sh
# 若显示Permission denied，则输入sudo make install
make install
```
### 使用apt安装
::: tip 提示
该方式需要root权限，建议使用前一种方式
:::
- 执行安装命令
```sh
sudo apt install nginx
```
- 安装完成后查看nginx运行状态
```sh
systemctl status nginx
```
- 查看nginx进程
```sh
ps aux | grep nginx
```

## Nginx的管理
- 在启动服务器之前，可以通过如下指令来查看Nginx服务器配置文件是否有语法错误：
```sh
# 绝对路径
/home/novice/data/nginx/sbin/nginx -t
# 相对路径
./sbin/nginx -t
```
- 查看Nginx服务器版本
```sh
./sbin/nginx -v
```
- 使用默认配置启动Nginx
```sh
./sbin/nginx
``` 
- 查看Nginx进程状态
```sh
ps -ef|grep nginx
```
- 停止Nginx服务器
```sh
# 相对路径
./sbin/nginx -s stop
``` 
- 重启Nginx服务器
```sh
./sbin/nginx -s reopen
``` 
- 重新载入配置文件
```sh
./sbin/nginx -s reload
```
## 特殊情况处理
- 若启动后出现`403 Forbidden`

将`nginx.conf文件中的user改为root，重新加载配置即可
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215939486.png)

## 成果图
- 此时进入localhost:80时，显示如下内容时，说明安装已完成

![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215946161.png)