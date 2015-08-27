---
layout: post
title:  "C 语言学习环境 (全平台)"
date:   2004-12-30 00:00:00
---
* content
{:toc}

如何在各种操作系统环境下练 C 语言？本文将给你一些提示——

# Windows

* 有些老师会推荐 Visual C++ 6.0，不过它是那个曾经流行 98 的年代的产物，现在的操作系统不兼容（Windows 8/8.1/10 甚至可能无法启动）。所以，有条件的话应该使用新版，比如 Visual Studio 2015。
* 有些老师会推荐 Code::Blocks。值得注意的是，这个软件有两种版本，一种安装包 20 多 MB (不带编译器)，另一种安装包 90 多 MB (带编译器)。要选择那个`体积较大`的，否则你即使写完代码也无法运行程序，因为 Windows 系统没有自带编译器。

# Linux

多数 Linux 发行版自带 C 语言编译器，所以说只需要一个合适的编程软件。

* Visual C++ 6.0：虽然可以通过黑科技 (wine) 运行，但是实际效果不好。
* Code::Blocks：这是一个比较好用的 IDE。对于 Ubuntu 系统，可通过以下命令安装：

		sudo apt-get install codeblocks

	如果不愿意敲命令，也可以去“软件中心”里面找。但是，事实上可能敲命令会更轻松一些。

# OS X

OS X 既不带 C 语言编译器又不带 IDE，所以都要自己装。

## 安装编译器

在“终端”中输入下面命令（别忘了敲回车）：

	xcode-select --install

如果提示 `xcode-select: error: command line tools are already installed, use "Software Update" to install updates`，那么说明编译器已经装好，可以直接把窗口关掉了。如果弹出一个对话框并且要求你安装一些东西，那么你需要点击“安装”。安装过程需要联网下载软件。

## IDE

App Store 里有 Xcode，价格免费。但是对于 C 语言学习而言，数 GB 大小的 Xcode 显得非常重，因此可以换成轻型的 Code::Blocks。

Code::Blocks 同时支持 Windows、Linux、OS X 三个平台。由于版权问题，App Store 不提供 Code::Blocks 的下载，所以要自己搜索下载。

# Android

[% callout %]

#### 以下是吐槽

很多导员要求大一不能带电脑（某些丧心病狂的甚至要求大二都不能带），但是学校没有类似规定，于是把需要电脑的课全都挤到大一开……

[% endcallout %]

说正经的。解决方案——c4droid

去百度贴吧找 `c4droid吧`，置顶帖就有下载地址。安装的时候要装两个 apk，一个 GCC for c4droid（编译器，装完打不开），另一个是 c4droid 本身。

# iOS

应该没有人愿意因为一个实际上很不好用的软件而付钱。

# 其他系统

此时此刻应该考虑机房和网吧。
