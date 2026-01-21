---
title: 轻松搭建AI大模型集成平台：Open WebUI + Poe + Ollama 整合部署详解
tags:
- Open WebUI
- Poe
- Ollama
- API
- AI
createTime: 2025/02/16 11:53:08
permalink: /blog/aiplatform/
---
本篇博客将讲解如何从0到1搭建一个完整的AI大语言模型集成平台。我将使用`Open WebUI`作为主要界面，配合`poe2openai`实现API转换从而调用`poe.com`提供的模型，并集成`Ollama`来运行本地模型。

这套方案的优势在于：
>1. 完全自托管，数据安全可控
>2. 提供统一的Web管理界面
>3. 支持多种模型接入
>4. 支持多用户管理
>5. 支持对话内容编辑和保存功能
>6. 支持根据html等实时生成界面功能
>7. 内置知识库功能
>8. 界面友好，易于使用

## 环境准备
该AI大模型集成平台的部署和使用都可以在`Windows`或`Linux`系统中完成，只要满足基础的环境配置即可，包括`python3`、`Git`、`科学上网工具`。

后续也许会补充使用`Docker部署`的方式，但我目前是使用`tmux`实现了脱机运行。

## Open WebUI 部署

### 通过 Python pip 🐍 安装

可以使用 `Python` 包安装程序 `pip` 进行安装。在继续之前，请确保您使用的是 `Python 3.11` 以避免兼容性问题。

1. **激活虚拟环境 -** 使用venv创建虚拟环境以免影响其他程序运行：
    
    ```bash
    # 创建文件夹
    mkdir openWebUI
    cd 
    # 创建虚拟环境
    python3 -m venv myenv
    
    # 激活虚拟环境
    # Windows
    myenv\Scripts\activate
    # Linux/Mac
    source myenv/bin/activate
    
    # 退出虚拟环境
    deactivate
    ```
    
2. **安装 Open WebUI -** 在激活的虚拟环境中运行以下命令以安装 Open WebUI：
    
    ```bash
    # 国内使用pip安装可以换源以提高速度
    
    # 如果您到 pip 默认源的网络连接较差，临时使用本镜像站来升级 pip：
    python3 -m pip install -i https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple --upgrade pip
    
    # 升级 pip 到最新的版本后进行配置：
    python3 -m pip install --upgrade pip
    pip config set global.index-url https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple
    
    # 安装Open WebUI
    pip install open-webui
    ```
    
3. **使用终端复用工具tmux运行 Open WebUI -** 安装后，可以通过执行以下作来启动 Open WebUI：
    
    ```bash
    # 启动新会话并命名
    tmux new -s openwebui
    # 启动Open WebUI
    open-webui serve
    ```
    
    这将启动 Open WebUI 服务器，您可以在 [http://localhost:8080](http://localhost:8080/)访问

## poe2openai 部署


这是一个转换器，可以将 `Poe` 提供的 `API` 令牌转换为 `OpenAI` 的 `API` 格式，从而使依赖于 `OpenAI API` 的其他应用程序可以使用 `Poe` 的 `API`

:::tip
现在poe提供openai接口，所以可以不使用转换器

需要注意的是，只有订阅了 `Poe` 才可以访问 `API` 密钥 (订阅可以上tb代充)

同时该程序运行需要`科学上网`的环境
:::

### 通过 Python pip & Git 安装
1. 将此存储库克隆到本地机器：
```bash
git clone https://github.com/formzs/poe-to-gpt.git
cd poe-to-gpt/
```
2. 从 requirements.txt 安装依赖项：
```bash
pip install -r requirements.txt
```
3. 在项目的根目录中创建配置文件。指令已写在注释中：
```bash
cp .env.example .env
vim .env
```
4. 启动项目：
```bash
# 默认运行在端口 3700
python app.py
```