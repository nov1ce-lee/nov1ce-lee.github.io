---
title: 在Ubuntu上部署Vuepress搭建个人博客&笔记网站
tags:
- Vuepress
- Ubuntu
createTime: 2024/12/23 12:34:07
permalink: /blog/buildblog/
---
## 一些碎碎念
依旧是做不进去“正事”的时候瞎搞出来的东西，去年期末寄搭建网站时在阿里云租的服务器即将到期，于是乎又在腾讯云上租了一台2核2G的服务器，比去年的强了许多

终于也算是考完了这个折磨我很长时间的试，虽然还有一门期末课程没有学（预习），但此时的心情已经是放松许多了。尽管结果大抵是考不上了，也该思考一下后续究竟是继续考研还是准备工作，感觉自己很长一段时间都没有想清楚自己到底想干什么

昨晚考完试老师就找我聊了聊天，谈了些关于毕设的事情，也谈了谈关于我个人后续发展的问题，悲观和压抑的情绪有所缓解，剩下的事情就是休息一下然后继续开始做吧

下面进入正题
## Vuepress介绍
`Vuepress`是一款以**Markdown**为中心的静态网站生成器，你可以使用**Markdown**来书写内容，如博客、笔记等，然后通过`Vuepress`生成一个静态网站来展示他们
[访问Vuepress官网](https://vuepress.vuejs.org/zh/)

## 运行环境设置
- 建议使用`VS Code`<Icon name="skill-icons:vscode-dark" size="2em"/> 的拓展`Remote-SSH`进行远程连接，跳转教程[VS Code配置SSH远程连接服务器环境](./vscodessh.md)

**环境依赖**
- [Node.js](https://nodejs.org/zh-cn)
如何在Ubuntu中安装Node.js
- 包管理器，如[pnpm](https://pnpm.io/zh/)、[yarn](https://classic.yarnpkg.com/en/)、[npm](https://classic.yarnpkg.com/en/)等
::: tip 不同的Vuepress的主题模板也许会要求不同版本的Node.js
:::
## 创建项目
项目的创建可以从0开始：[Vuepress快速上手](https://vuepress.vuejs.org/zh/guide/getting-started.html)，也可以使用现有市场中的主题模板来进行快速部署，这里我使用现有市场的主题模板进行部署，更加方便也更加美观

### 创建项目模板
在终端中进入你想要创建项目的位置，在终端中执行下列命令
::: code-tabs
@tab npm
```sh
npm init theme@latest foldername
```
:::
其中`theme`可替换为
`vuepress-theme-hope`、`vuepress-theme-plume`、`vuepress-theme-gungnir`、`vuepress-theme-dog`，详细风格可以点击[主题](https://marketplace.vuejs.press/zh/themes/blog.html)
查看

`foldername`可修改为任意名字，将在终端所处文件夹下创建一个该名字的文件夹，然后在该名字的文件夹内创建项目模板

这里以`vuepress-theme-plume`为例
```sh
npm init vuepress-theme-plume@latest myblog
```
若出现proceed无响应的情况，则使用sudo命令
```sh
sudo npm init vuepress-theme-plume@latest myblog
```
::: tip 注意
在安装中可以通过键盘↑↓选择，一定要选择安装依赖
:::
### 终端启动项目
安装完成后执行以下命令即可启动：
```sh
cd myblog
npm run docs:dev
```
稍等片刻后，就可以通过[localhost:8080/](localhost:8080/)访问开发服务器了

::: important PS
VS code的Remote-SSH拓展中自带端口映射功能，可以将连接的远程服务器的端口映射到本地计算机的端口进行访问，这样在调试网站时就会更加方便
:::

## Nginx静态部署
- 如果服务期尚未安装`Nginx`，跳转教程[Ubuntu中Nginx的安装与配置](./nginx.md)
### 构建网站
- 在`myblog`文件夹内，输入
```sh
npm run docs:build
```
- 该操作会在`.vuepress/dist`下生成网站的静态文件
### 配置nginx
- 打开`nginx`安装目录下的`conf/nginx.conf`，找到`location`
```
server {
        listen       80;
        server_name  www.novishare.site;

        location / {
            root    /home/ubuntu/app/blog/plume/docs/.vuepress/dist;
            index   index.html index.htm;
        }
}
```
- 修改`root`对应根目录，该目录地址为绝对地址，设置为刚刚生成的静态文件目录
- 在`nginx`安装目录执行命令，重新加载配置文件
```sh
./sbin/nginx -s -reaload
```
- 此时应当可以通过ip地址直接访问网站

## 绑定域名
### 注册域名
- 在`腾讯云`注册域名[腾讯云域名注册](https://buy.cloud.tencent.com/domain)
### SSL证书的下载与配置
- SSL证书：实现HTTPS，对网站数据传输加密，防劫持、防篡改、防监听
- 免费申请90天证书[腾讯云证书](https://console.cloud.tencent.com/ssl)

![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215431196.png)
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215513313.png)
- 申请成功后点击下载，选择Nginx场景

![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215525807.png)
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215539161.png)

- 将下载的`.pem`文件和`.key`文件上传至`nginx`安装目录下的`conf`文件夹内

![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215549653.png)
- 打开`nginx`安装目录下的`conf/nginx.conf`，找到`HTTPS server`配置内容，将`ssl_certificate`和`ssl_certificate_key`的内容填写为刚刚下载上传的文件名，将`location`下的`root`位置填写为与前面一致的位置
```
# HTTPS server
    server {
       listen       443 ssl;
       server_name  www.novishare.site;

       ssl_certificate      novishare.site_bundle.pem;
       ssl_certificate_key  novishare.site.key;

       ssl_session_cache    shared:SSL:1m;
       ssl_session_timeout  5m;

       ssl_ciphers  HIGH:!aNULL:!MD5;
       ssl_prefer_server_ciphers  on;

       location / {
           root   /home/ubuntu/app/blog/plume/docs/.vuepress/dist;
           index  index.html index.htm;
       }
    }
```
- 保存后在`nginx`文件夹下重新加载配置即可
```sh
./sbin/nginx -s reload
```
::: important
初始配置完成后，能通过域名直接访问网站

但是一定要去进行`域名备案`(国内)，否则网站访问很快就会被封掉
:::