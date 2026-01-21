---
title: 基于Ollama快速本地部署DeepSeek
tags:
- DeepSeek
- Ollama
- Windows
- Ubuntu
createTime: 2025/01/31 15:57:23
permalink: /blog/deepseek/
---

在这篇文章中，我将基于`Ollama`，在`Windows`和`Ubuntu`系统中快速部署`DeepSeek`

当然，要想使用响应更快速、效果更优秀的模型，还是需要更好的`GPU`来支持的

## Ollama的下载与安装
> Ollama是一个轻量级的工具，可以帮助你在本地快速部署和运行大语言模型

::: tabs 
@tab Windows
点击进入`Ollama`官网下载Ollama  [Download Ollama](https://www.ollama.com/download/windows)  

@tab Ubuntu
```
# 输入如下命令安装ollama
curl -fsSL https://ollama.com/install.sh | sh
```
:::

## DeepSeek模型的下载运行 

Ollama安装完成后打开终端，根据需要选择安装模型 [DeepSeek模型列表](https://www.ollama.com/library/deepseek-r1)

![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215634886.png)

在终端输入如下命令即可完成安装并运行

```shell
# Default 7B model (4.7GB - ideal for consumer GPUs)
ollama run deepseek-r1

# Larger 70B model (requires 24GB+ VRAM)
ollama run deepseek-r1:70b

# Actual DeepSeek-R1 (requires 336GB+ VRAM for 4-bit quantization) 
ollama run deepseek-r1:671b
```
::: tip
下载速度很快，若下载速度降低可以取消后再次输入命令，有断点续传功能，速度可以再次跑满
:::

## DeepSeek-r1 效果
![](https://obsidian-pic-1326566629.cos.ap-shanghai.myqcloud.com/20250727215623113.png)

## 导航
**DeepSeek**  [Github](https://github.com/deepseek-ai)

**DeepSeek配置要求** [PC端 完全本地部署deepseek的配置要求](https://ngabbs.com/read.php?tid=43169616&rand=73)

**Open WebUI**  [Github](https://github.com/open-webui/open-webui)
