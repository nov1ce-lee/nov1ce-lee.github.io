---
title: 系统重装利器：多镜像启动U盘
tags:
- Windows
- Linux
- MacOs
createTime: 2025/08/28 22:28:34
permalink: /blog/system_reinstall/
---

在日常生活中，我们可能会有系统重装的需要，亦或是组装了新的主机需要安装系统，此时一个好用的U盘启动器就派上了用场

本文将使用 `Ventoy` 作为系统启动盘安装工具，简单来说， `Ventoy` 是一个制作可启动U盘的开源工具

有了 `Ventoy` 你就无需反复地格式化U盘，你只需要把 `ISO/WIM/IMG/VHD(x)/EFI` 等类型的文件直接拷贝到U盘里面就可以启动了，无需其他操作

你可以一次性拷贝很多个不同类型的镜像文件， `Ventoy` 会在启动时显示一个菜单来供你进行选择

下面就让我们开始吧！

---
## 准备工作

1. 一个 ≥ 16G 的 U 盘（越大越好，方便放多个镜像）
:::warning 注意
制作过程中会清空 U 盘数据
:::

2. 需要的镜像文件（比如 `Ubuntu，Windows、PE` 等等）
    
3. 在电脑上下载 Ventoy：
    - 官方网站：[https://www.ventoy.net](https://www.ventoy.net/)
    - GitHub Release：[https://github.com/ventoy/Ventoy/releases](https://github.com/ventoy/Ventoy/releases)

## 安装 Ventoy 到 U 盘

1. 插入 U 盘
    
2. 打开 Ventoy 工具：
    
    - Windows：解压后运行 `Ventoy2Disk.exe`
        
    - Linux / Mac：命令行运行 `Ventoy2Disk.sh`
        
3. 在界面里选择你的 **U 盘设备**（一定要确认是 U 盘，不要选错硬盘 ⚠️）
    
4. 点击 **安装 (Install)**
    
    - 第一次会提示格式化，点确认。
        
    - 等待完成，大约 1 分钟。
        

这样，U 盘就变成一个 **Ventoy 启动盘** 了