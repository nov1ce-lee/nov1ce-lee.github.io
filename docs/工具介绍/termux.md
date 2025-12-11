---
title: Termux完全使用指南
tags:
- Linux
- Termux
createTime: 2025/05/22 13:07:10
permalink: /blog/termux/
---

## Termux介绍
Temmux是一款可以在安卓手机上运行的终端模拟器，可以为手机提供LINUX环境   
用户可以通过它进行编程、开发、系统管理等操作

## 基本配置
- 访问如下Github仓库下载最新apk文件
<LinkCard icon="mdi:github" title="termux-app" href="https://github.com/termux/termux-app" />

- 安装完成后使用如下命令行替换官方源为镜像源
```bash
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/apt/termux-main stable main@' $PREFIX/etc/apt/sources.list
apt update && apt upgrade
```
### 配置社区源
- 安装Root和X11
```bash
# x11-repo
# 仅当你的 Android 设备已 Root，并且需要在 Termux 中使用 root 权限时才需要安装
# 未 Root 的设备安装后也无法使用相关功能
pkg install x11-repo
# root-repo
# 仅当你想在 Termux 中运行图形界面程序时才需要安装
# 需要额外配置
pkg install root-repo
```

- 更换镜像源
```bash
# x11-repo
sed -i 's@^\(deb.*x11 main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/apt/termux-x11 x11 main @' $PREFIX/etc/apt/sources.list.d/x11.list 
apt update && apt upgrade
# root-repo
sed -i 's@^\(deb.*root main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/apt/termux-root root main @' $PREFIX/etc/apt/sources.list.d/root.list 
apt update && apt upgrade
```

- 查看手机IP地址
```bash
ifconfig -a # 仅关注局域网IP即可
```

- 查看用户名和密码
```bash
# 用户名
whoami
# 密码
passwd userid # 如果还未设置密码，输入`passwd`设置密码即可
```



## 安装Linux
### 安装基础内容proot-distro
- 安装命令
```sh
pkg install proot-distro 
```
- 查看帮助
```sh
proot-distro help
```
- 查看可安装的Linux系统
```sh
proot-distro list
```
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250522213742867.png)
- 选择`ubuntu`进行安装
```sh
proot-distro install ubuntu
```
- 登录系统
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250522215119413.png)
```sh
proot-distro login ubuntu
```

## ssh连接
### Termux安装Openssh
- 安装
```bash
pkg install openssh
```

- 启动
```bash
# 在2222端口开放ssh
sshd -p 2222
```

- 关闭
```bash
pkill ssh
```

### Ubuntu安装Openssh服务端
- 安装并启动
```bash
apt-get install openssh-server
service ssh start
```

- 编辑 `/etc/ssh/sshd_config`，修改 Port（如 2223），然后重启
```bash
nano /etc/ssh/sshd_config  # 修改 Port
service ssh restart
```

- 查看ssh是否启动成功
```bash
ps -e | grep sshd
```

- 关闭sshd
```bash
pkill ssh
```

- 使用同一局域网下其他终端连接sshd
```bash
ssh userid@ip -p 2223
```

### VS Code连接方案
- 在VS Code使用Remote-SSH连接时可能会提示
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250522211855728.png)
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250522211745206.png)
- 这是由于新安装服务器没有对应的库/库不够新，更新对应库即可
```bash
# Ubuntu/Debian系统
sudo apt update && sudo apt upgrade -y
sudo apt install libstdc++6 glibc -y
 
# CentOS/RHEL系统
sudo yum update glibc libstdc++ -y
```
