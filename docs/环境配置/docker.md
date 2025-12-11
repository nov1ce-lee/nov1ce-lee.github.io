---
title: 四步在Ubuntu系统安装并使用Docker服务
tags:
- Docker
- Ubuntu
- Linux
createTime: 2025/08/25 00:10:53
permalink: /blog/ubuntu/docker/
---

<LinkCard
icon="vscode-icons:file-type-dockertest2"
title="Docker 中文教程文档"
href="https://dockerdocs.xuanyuan.me/install">
</LinkCard>

### 1. 更新包管理工具
```bash
sudo apt-get update
```

### 2. 添加阿里云源
由于网络原因，建议添加国内镜像源以加快安装速度：
```bash
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
sudo curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository -y "deb [arch=$(dpkg --print-architecture)] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
```

### 3. 安装Docker
```bash
sudo apt-get -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 4. 启动并设置自动启动
```bash
sudo systemctl start docker
sudo systemctl enable docker
```

### 5. 修改为国内镜像源
> 一些镜像源网站 https://toolshu.com/docker-mirror, https://zhuanlan.zhihu.com/p/1936728250236769211
- 创建并修改Docker镜像源配置文件
```bash
nano /etc/docker/daemon.json
```

- 添加镜像源
```json
{
"registry-mirrors": [
    "https://registry.docker-cn.com",
    "https://docker.mirrors.ustc.edu.cn"
    ]
}
```

- 重启Docker
```bash
service docker restart
```

- 查看配置是否生效
```bash
docker info|grep Mirrors -A 1
```
---
至此，你已经完成Docker及其相关组件的安装，同时修改了国内镜像源保证网络通畅，开始使用吧！