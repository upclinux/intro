---
layout: post
title:  "【未完成】桌面环境"
date:   2003-12-29 00:00:00
---
* content
{:toc}

由于 Windows 和 OS X 使用固定的桌面环境 (例如，Windows 用任务栏和“开始菜单”，OS X 用 Dock 和 Launchpad)，因此这两个系统的用户可能对“桌面环境”的感觉并不明显。而在 Linux 系统中，由于自由气氛非常明显，所以就由不同的开发团队开发了不同的桌面环境。只要用户会操作，桌面环境可以随意更换。

# 桌面环境列表

桌面环境  | 典型特征                                       | 文件管理器 | 重量* | 典型系统
---------|----------------------------------------------|----------|------|------------------
GNOME 2  | 全局菜单在屏幕顶端，下端有窗口列表。风格略显老土。    | Nautilus | 轻   | 比较旧的 Linux 发行版
Unity    | 应用列表、窗口列表等全部集中在左侧，以图标形式呈现。  | Nautilus | 重   | Ubuntu**
GNOME 3  | 全局菜单在屏幕顶端，鼠标放左上角出现窗口列表和应用程序列表。<br>界面与操作类似平板电脑。 | Nautilus | 重 | Fedora、Debian
MATE     | 和 GNOME 2 一样。MATE 是接管被抛弃的 GNOME 2 之后的项目。 | Caja  | 轻 | 预装 MATE 的系统 (Fedora、Ubuntu 等)
Xfce     | 全局菜单和窗口列表在屏幕顶端。界面可能有点土。       | Thunar | 轻 | Xubuntu、CDLinux
LXDE     | 和 Windows 一样有个“开始”菜单和“任务栏”，不过设置更灵活。 | PCManFM | 轻 | Lubuntu、Raspbian
Cinnamon | 基于 GNOME 2 开发，但更加现代化。                | Nautilus | 轻 | Linux Mint
KDE***   | 看起来非常有质感。可定制性非常强。                 | Dolphin | 重 | openSUSE

<small>
* 轻重: 轻型桌面环境指对系统资源 (内存、显卡等) 要求和消耗较低的桌面环境。一般情况下，轻型桌面环境可以在低配电脑，甚至嵌入式系统中运行。<br>
** Unity 由 Ubuntu 开发。目前只支持 Ubuntu 系统。
*** 常见的桌面环境都基于 GTK+，而 KDE 基于 Qt。KDE 与其他桌面环境有着很大的不同。
</small>

# 环境设置

## 基本设置

大多数桌面环境都有一系列详细配置程序，可以对桌面环境的各方面 (例如主题、外观、行为) 进行定制。

但是 GNOME 3 和 Unity 例外。这两个桌面环境自带的设置少得可怜。

* GNOME 3 可通过 `gnome-tweak-tool` (Ubuntu 系统的软件包名) 进行更多设置。
* Unity 可通过 `unity-tweak-tool` 进行更多设置。

## 插件

GNOME 3 和 KDE 自带插件管理。
