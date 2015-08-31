---
layout: post
title:  "有点意思的命令"
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

可以趁人不注意，在他的电脑上装个 sl，然后输入：`alias ls=sl`

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

如果自己想仿写一个，那也很简单：

    #include <stdio.h>

    int main(int argc, char *argv[])
    {
        char *s = (argc>1) ? argv[1] : "y";
        while (1) printf("%s\n", s);
        return 0;
    }

## xeyes

![xeyes]({{ site.baseurl }}/images/entertainment/fun/xeyes.png)

一只眼睛盯着鼠标。不知 X11 为什么会内置这么一个无聊的东西？

还有一个更无聊的——xlogo。除了一个丑陋的 X，什么功能都没有了。

## xkill

想当一把死神吗？

输入 xkill，鼠标会变成“x”形，然后你点哪个窗口，哪个进程就直接被叉了。

和任务管理器比，xkill 真是又快又准。

（备注：因为是 X 的程序，所以在 OS X 中只对 X11 环境的应用有效。）

## fuck

人类是机器的主人。不小心输了错误的命令，但是机器不客气地回复错误信息，我们当然生气了。

现在，我们骂它一句，它就得乖乖地承认自己的错误，把敲错的命令改成正确的……

[这里是项目主页](https://github.com/nvbn/thefuck)。按照说明安装之后，以后再敲错命令——直接骂一句“fuck”！

温馨提示：不要对人说脏话，这是很不礼貌的行为。

# 彩蛋

## moo

这是 apt-get 的彩蛋。

直接输入：`apt-get moo`

还有一个：`apt-build moo`

## 没有彩蛋

需要安装 aptitude。当然，使用 deb 系列系统的才有机会看到。

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

### figlet

![figlet]({{ site.baseurl }}/images/entertainment/fun/figlet.png)

### toilet

toilet 可不是厕所，而是……

![toilet]({{ site.baseurl }}/images/entertainment/fun/toilet.png)

### banner

![banner]({{ site.baseurl }}/images/entertainment/fun/banner.png)

这些才叫大字报。

## cowsay

![cowsay]({{ site.baseurl }}/images/entertainment/fun/cowsay.png)

* `cowsay "Hello world"`: 一头奶牛在说话
* 试试把 cowsay 换成 cowthink：一头奶牛在思考
* `cowsay -l`查看有哪些动物——`cowsay -f tux "Hello world"`：奶牛变成了 Tux。
* 安装 fortune，并且执行 `fortune | cowsay`：一头有哲理的奶牛。
* 安装 fortune-zh，执行 `fortune | cowsay`：会背古诗的奶牛。

## bb

光用 ASCII 显示图片就太 low 了。bb 演示的是动画（而且是三维的！），并且附带音乐。

## 黑客帝国

cmatrix:

![cmatrix]({{ site.baseurl }}/images/entertainment/fun/cmatrix.png)

## telnet

如果有网络：

    telnet towel.blinkenlights.nl

一部 ASCII 电影。

![blinkenlights]({{ site.baseurl }}/images/entertainment/fun/blinkenlights.png)

如果你有 IPv6 连接，那么网站会为你提供更多场景，而且会变成彩色的。

## asciiquarium

ASCII 水族馆

## lolcat

用渐变色显示文本。

![lolcat]({{ site.baseurl }}/images/entertainment/fun/lolcat.png)

lolcat 是 Gem 包，因此用 gem 命令安装。由于墙的原因，你需要换一下[软件源](https://ruby.taobao.org)才能正常安装。

# 其他

## factor

`factor 60`：分解质因数

## oneko

一只小猫跟着鼠标跑。按 Ctrl-C 停止。

## Python

不用学编程，只需要：

    python -m SimpleHTTPSerever

如果想通过局域网分享个大文件，这是个又快又省事儿的方法……当然别忘了先 cd 到文件所在的目录里去。
