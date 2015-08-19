---
layout: post
title:  "显卡驱动"
---

一般情况下，装完 Linux 系统，除了一些不常用的硬件（指纹识别、读卡器）和显卡，其他硬件的驱动其实都装好了。

但是，就是因为（双）显卡的驱动可能没装好，所以电脑的发热量可能特别大，而且耗电量也很大。

[% callout style=danger %]

#### 避免官方驱动

尽管在 Windows 里，装官方驱动是一个安全的选择。但是在 Linux 里，装官方显卡驱动是最危险的选择，因为官方显卡驱动照顾不了那么多的发行版，安装之后容易出现问题导致系统无法正常使用。因此应该优先使用发行版提供的显卡驱动。

[% endcallout %]

# Intel 核显

因为 Intel 很支持 Linux 所以 Intel 核显的驱动都装好了，不需要再干预。

# Nvidia 独显

（Linus 曾因为 Nvidia 不支持 Linux 而竖起中指大骂 Nvidia。）

Linux 对 Intel + Nvidia 双显卡切换支持不好。如果不打游戏，可以在 BIOS 中把独显关掉，解决发热和耗电的问题。

## bumblebee

bumblebee 是一个能够实现手动切换双显卡的软件。

新版本的 Linux (例如 Ubuntu 14.04) 的软件仓库已经包含这个软件，可以直接安装。如果没有（以 Ubuntu 为例）：

    sudo add-apt-repository ppa:bumblebee/stable
    sudo apt-get update
    sudo apt-get install bumblebee bumblebee-nvidia

默认情况下独显会被关掉。如果需要开启独显，用 optirun 命令，例如：

    optirun wine C:\cod\iw4sp.exe

# AMD 独显

从 BIOS 中关掉独显是最简单的办法。

如果不行，在 Ubuntu 中，AMD 显卡驱动的名字叫 fglrx，可以直接安装。

# 判断独显是否打开

在终端中输入 `lspci`，在列表中找到独显。如果后面的文字是“rev ff”，说明独显关闭，否则就是打开的。
