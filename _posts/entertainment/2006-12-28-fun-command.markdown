---
layout: post
title:  "用于娱乐的命令"
date:   2006-12-28 00:00:00
---
* content
{:toc}

对于以下命令，如果敲完之后提示“命令未找到”，那么需要安装一下。

# 恶搞

## sl

ls 是一个非常常用的命令。因为经常敲，所以很有可能就敲错了。不小心打反了，会发生什么事儿呢……

![sl]({{ site.baseurl }}/images/entertainment/fun/sl.png)

一辆火车开过

`sl -l` 是个小车，｀sl -F` 火车会飞起来。

可以趁人不注意在他的电脑上输入：`alias ls=sl`

## tac

cat 是显示文件内容的命令。那么，既然 tac 是把 cat 倒着写的，那么这个命令当然就会把文件内容倒着输出了。

## dd

虽然说 dd 有时候很危险，但是其实有时候也可以无公害地恶搞一下。

进入纯文本终端（Ctrl-Alt-F1），登录之后输入：

    sudo dd if=/dev/urandom of=/dev/fb0

因为 /dev/urandom 是随机数发生器，所以每次执行的结果都不一样。

## fork 炸弹

去找个苹果电脑的体验店，打开终端（按 Control-Space 然后输入 Terminal），输入以下命令。记住，按下回车之后赶紧走人：

    :() { :|: & };:

你应该知道不赶快走人的后果（专卖店的人发现你把电脑搞死机了……）。

## yes

输入 yes 之后会显示满屏幕的 y。可以通过管道到 yes 来对付很多 y/n 的程序。

## xeyes

X11 为什么会内置这么一个无聊的东西？

# 彩蛋

## moo

直接输入：`apt-get moo`

还有一个：`apt-build moo`

## 没有彩蛋

    aptitude moo

aptitude 会提示没有彩蛋。不要上当，继续输入：

    aptitude -v moo
    aptitude -vv moo
    aptitude -vvv moo
    aptitude -vvvv moo
    aptitude -vvvvv moo
    aptitude -vvvvvv moo
    aptitude -vvvvvvv moo

经过我们软磨硬泡，aptitude 投降了。

## cal

`cal 9 1752`：谁说今天是 9 月 2 日，明天就一定是 9 月 3 日？

# ASCII 艺术

## 大字报

* figlet

* toilet

* banner

![banner]({{ site.baseurl }}/images/entertainment/fun/banner.png)

这才叫大字报。

## cowsay

![cowsay]({{ site.baseurl }}/images/entertainment/fun/cowsay.png)

* `cowsay "Hello world"`: 一头奶牛在说话
* 试试把 cowsay 换成 cowthink：一头奶牛在思考
* cowsay 后面跟一些参数，可以换动物。
* 安装 fortune，并且执行 `fortune | cowsay`：一头有哲理的奶牛。
* 安装 fortune-zh，执行 `fortune | cowsay`：会背古诗的奶牛。

## bb

光用 ASCII 显示图片就太 low 了。bb 演示的是动画（而且是三维的！），并且附带音乐。

## 黑客帝国

cmatrix

## telnet

如果有网络：

    telnet towel.blinkenlights.nl

一部 ASCII 电影。

网站说，如果你有 IPv6 连接，还能看到彩色版本。

## asciiquarium

ASCII 水族馆

# 其他

## factor

`factor 60`：分解质因数

## oneko

一只小猫跟着鼠标跑。按 Ctrl-C 停止。
