---
title: AI音色克隆工具：GPT-SoVITS
createTime: 2026/04/08 11:46:07
permalink: /notes/ai-llm/GPT-SoVITS/
---
### 介绍
**GPT-SoVITS (GSV)** 是B站大佬[花儿不哭](https://space.bilibili.com/5760446/)研发的低成本AI音色克隆工具

该工具目前只有 ==TTS（Text-To-Speech，文字转语音）== 功能，将来会更新变声功能

<LinkCard title="GPT-SoVITS-WebUI" icon="mdi:github" href="https://github.com/RVC-Boss/GPT-SoVITS">
功能强大的少样本语音转换和文本转语音 WebUI
</LinkCard>

#### GPT与SoVITS
- GPT是指基于 `GPT(Generative Pre-trained Transformer)` 架构的自回归模型，负责生成语音的内容
- SoVITS 是 `SoftVC VITS` 的缩写，是基于 VITS 架构改进的声学模型，负责生成语音的音色

---

### 使用方式
#### 下载整合包
直链下载（多线程下载满速）
- 默认显卡：[GPT-SoVITS-v2pro-20250604.7z](https://www.modelscope.cn/models/FlowerCry/gpt-sovits-7z-pacakges/resolve/master/GPT-SoVITS-v2pro-20250604.7z)
- 英伟达50系显卡专用：[GPT-SoVITS-v2pro-20250604-nvidia50.7z](https://www.modelscope.cn/models/FlowerCry/gpt-sovits-7z-pacakges/resolve/master/GPT-SoVITS-v2pro-20250604-nvidia50.7z)

#### 解压整合包并启动
- 解压整合包到任意目录，双击文件夹内的`go-webui.bat`文件启动控制台
![](https://pic-1326566629.cos.ap-shanghai.myqcloud.com/blog/20260408164552931.png)

- 稍加等待就会弹出网页，如果没有弹出网页可以复制 `http://0.0.0.0:9874` 到浏览器打开
---

### 参考链接
本文档参考 [bilibili@白菜工厂1145号员工](https://space.bilibili.com/518098961) 的 [GPT-SoVITS的一站式用户手册](https://www.yuque.com/baicaigongchang1145haoyuangong/ib3g1e)

[2025最新GPT-SoVITS视频教程.2025.12.03](https://www.bilibili.com/video/BV14xS8BDE1w/)

---

### 免责声明
:::note 作品简介模板
音声来源：[训练集音声来源]

免责声明：本作品仅作为娱乐目的发布，可能造成的后果与使用的语音合成项目的作者、贡献者无关
:::
最好发视频可以带上`GPT-SoVITS`的Tag，方便其他用户识别