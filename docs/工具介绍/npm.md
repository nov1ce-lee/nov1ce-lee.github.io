---
title: Nginx Proxy Manager 使用教程
tags:
- Nginx
- Docker
- 网页代理
createTime: 2026/04/02 19:37:06
permalink: /blog/nginx-proxy-manager/
---



==Nginx==相信大家都不陌生，当然如果陌生的话也没关系，它是一种高性能的HTTP和反向代理web服务器，其特点是占有内存少、并发能力强，同时支持热部署，可以连续长时间不间断运行，因它的稳定性、丰富的功能集、简单的配置文件和低系统资源的消耗而闻名

而本篇文章将要介绍的 `Nginx Proxy Manager` ，则是一种可以使用图形化界面方便快捷且直观地配置 nginx 反向代理的工具，同时能够支持自动申请和续期HTTPS证书，十分好用

值得一提的是，该工具目前已经支持多语言功能，可以直接配置中文界面，不需要像之前那样找汉化的工具或是别的汉化仓库

<div style="text-align: center;">
  <img src="https://nginxproxymanager.com/logo.svg" alt="Nginx Proxy Manager Logo" width="100" height="auto">
  <p style="margin-top: 8px; color: #666; font-size: 14px;">Nginx Proxy Manager</p>
</div>

---

### **前期准备**

`Nginx Proxy Manager` 可以使用 `Docker` 一键部署，因此你的服务器上需要安装 `Docker` 与 `Docker Compose`

如果尚未安装，可以使用如下脚本一键安装 `Docker`

```bash
bash <(curl -sSL https://xuanyuan.cloud/docker.sh)
```

这里也有更详细的安装教程： [Docker安装教程](/blog/docker/)

---

### **安装流程**
#### 创建容器启动文件
- 首先在你想要安装工具的位置创建文件目录，并新建一个 `docker-compose.yml` 文件，填写如下内容
```yml
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    environment:
      - TZ=Asia/Shanghai
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```

- 其中各个参数的意义为
    1. **image**: 镜像配置，这里表示使用 `jc21/nginx-proxy-manager` 这个官方镜像，`:latest` 表示使用最新版本标签（当前是 `v2.14.0`）
    2. **restart**: 重启策略，这里 `unless-stopped` 表示除了手动停止时不会重启，其他任何情况导致的关闭都会重启服务，其他可选值包括：`no:不再重启`、`always:总是重启（不论何种原因）`、`on-failure:特殊情况时重启`
    3. **environment**: 环境配置，这里`TZ=Asia/Shanghai`表示设置为中国时区
    4. **ports**: 端口映射，其中`80:80`是HTTP端口，`81:81`是 NPM 的 Web 管理界面端口，`443:443`则是 HTTPS 端口，用于接收 HTTPS 流量（SSL 加密）
    5. **volumes**: 数据卷挂载，用于挂载宿主机路径到容器内，`/data`用于存储 NPM 配置、数据库、日志，`/letsencrypt`用于存储 `Let's Encrypt SSL` 证书
    > 宿主机到容器的映射方式表示为， `:` 之前表示宿主机， `:` 之后表示容器

#### 启动与访问容器

- 在 `docker-compose.yml` 所在目录执行如下命令即可在后台启动服务
```sh
docker compose up -d
```

- 更多指令
```sh
# 查看运行状态
docker compose ps

# 查看实时日志
docker compose logs -f
```

- 启动成功后，即可通过浏览器访问管理界面（要记得配置服务器防火墙开启端口）
```
http://your-sever-ip:81
```
---

### **应用场景**
#### 代理到本地 Web 服务
假设你有一个运行在 8080 端口的 Web 服务，想要使用域名访问

- 打开`代理服务`配置页面
![](https://pic-1326566629.cos.ap-shanghai.myqcloud.com/blog/20260405170939740.png)
- 打开`添加代理服务`面板
![](https://pic-1326566629.cos.ap-shanghai.myqcloud.com/blog/20260405171103091.png)
- 域名填写你的域名，端口填写`8080`，转发主机ip填写`172.17.0.1`（Docker 网关）
<div style="max-width: 800px; margin: 0 auto; text-align: center;">
  <img src="https://pic-1326566629.cos.ap-shanghai.myqcloud.com/blog/20260405171149280.png" style="width: 50%; height: auto;">
</div>

- 勾选静态资源开启缓存静态资源缓存功能以加快网站访问速度，勾选阻止常见攻击功能，点击保存即可

#### 托管静态文件
在前面的容器启动配置文件中，我们曾设置`./data`为挂载的目录，因此可以在该文件夹下创建新的文件夹等存储静态文件，抑或是挂载外部文件目录

- 我目前使用方式就是在`./data`文件夹下创建`pages`目录，这样可以创建并托管多个目录的静态文件，比如我这里想要托管`./data/pages/blog`路径下的静态文件
![](https://pic-1326566629.cos.ap-shanghai.myqcloud.com/blog/20260405195145591.png)
- 打开添加代理服务面板，点击右上角的齿轮配置按钮，填写自定义配置
```nginx
# 主 location
location / {
    root /data/pages/blog;        # 文件路径，填写/data下的路径
    index index.html index.htm;
    try_files $uri $uri/ =404;
}

# 添加这个：处理 CSS、JS、图片等静态资源，可选
location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot|webp|mp4|webm)$ {
    root /data/pages/blog;
    expires 30d;
    add_header Cache-Control "public, immutable";
    try_files $uri =404;
}
```
- 配置域名、主机名和端口后，点击保存即可（同前面）

这样一来，我们就可以方便快捷地对我们的Web服务和静态页面进行快速地反向代理使用了~

---

### **相关链接**

<LinkCard title="Github仓库" icon="mdi:github" href="https://github.com/NginxProxyManager/nginx-proxy-manager"> </LinkCard>
<LinkCard title="Nginx Proxy Manager官网" icon="cbi:nginx-proxy-manager" href="https://nginxproxymanager.com/"> </LinkCard>
