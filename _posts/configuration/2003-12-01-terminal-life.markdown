---
layout: post
title:  "在纯文本终端中生活"
---
* content
{:toc}

有些人喜欢一直在命令行里，就像 DOS 年代那样，颇有极客范！

Linux 就可以很好地满足你的需求——因为 DOS 系统太旧，已经没有人愿意用，而 Linux 是一个现代化以至于在计算机行业有着重要地位的操作系统。

纯文本终端的快捷键是<kbd>Ctrl-Alt-F1</kbd>，如果没反应 (F1 正好是图形界面)，可以试试 F2～F7。总之可以按出六个不同的纯文本终端。

# 配置终端

和 DOS 一样，Linux 的纯文本终端也不支持汉字——出来的都是扑克牌里的方块。因此首先要配置一下中文环境。

Linux 常用的中文环境为 fbterm。以 Ubuntu 为例：

    sudo apt-get install fbterm
    sudo apt-get install fcitx fcitx-frontend-fbterm
    sudo adduser $USER video
    sudo chmod u+s /usr/bin/fbterm

接下来修改 ~/.fbtermrc：

    font-names=Monaco,Consolas
    font-size=15
    text-encodings=utf8
    input-method=fcitx-fbterm

其中 Monaco 是一个来自 Mac 的字体，而 Consolas 是来自 Windows 的字体。这两种字体比较好看，所以可以到网上下载下来并安装。

之后便可以通过 `fbterm` 命令启动中文终端环境。

## 小小输入法

除了 fcitx，还有一个比较好用的输入法——小小输入法（yong）

首先要下载 yong 安装包并解压，然后（假如当前目录为 yong 解压后的所在目录）：

    sudo mv yong /usr/local
    cd /usr/local/yong
    sudo ./yong-tool.sh --install

64 位系统是 --install64。

然后修改 ~/.fbtermrc:

    input-method=yong

接下来修改 /usr/local/yong/yong.ini。这是输入法本身的偏好设置。

## 自动启动中文环境

每次都输入 fbterm 命令，太麻烦。所以可以让它自动启动。

如果你用的 shell 为 bash，那么可以在 ~/.bashrc 里添加一句：

    if [ "$TERM" == "linux" ]; then
        fbterm
    fi

# 应用

Emacs 被人称作“一个伪装成文本编辑器的操作系统”。所以，如果会用 Emacs 那是最好的。

以下均为软件包名称：

* 音乐播放器：moc（软件名 mocp）
* 视频播放器：mplayer
* 文件管理：vifm
* 浏览网页：w3m 和 w3m-img（如果无法正常工作，需要将 fbterm 换成 jfbterm）
* 文本编辑：当然是 Vim 或 Emacs。如果不会用，nano 也不错。
* 图片查看：fbi（必须退出 fbterm 才能工作）
* 截图：fbcat（软件名 fbgrab）
* 分屏：tmux
* IRC：irssi

# 开机不进图形界面

## 旧系统

旧版本的 Ubuntu 系统 (Ubuntu 13.10 及以前) 使用 upstart 作为启动管理。upstart 和 inittab 都采用启动级别，因此把启动级别由 5 改成 3 即可不进图形界面。

## 新系统

Ubuntu 14.04 及以后、Fedora 不太旧的版本、CentOS 7.x 均使用 systemd 作为启动管理。

所以开机禁止图形界面的命令很简单：

    sudo rm /etc/systemd/system/display-manager.service

恢复自启动 (假如桌面管理器是 lightdm)：

    sudo ln -s /lib/systemd/system/lightdm.service /etc/systemd/system/display-manager.service
