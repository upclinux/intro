---
layout: post
title:  "编辑器之神 & 神的编辑器"
date:   2007-12-31 00:00:00
---
* content
{:toc}

作为计算机高手，有两个顶级编辑器，即使你不用，你也一定要知道它们是什么——

* 编辑器之神——Vim
* 神的编辑器——Emacs

这两个是世界上最顶级的文本编辑器。到底哪个好用呢？

有一个词语叫做[“编辑器之战”](https://zh.wikipedia.org/wiki/编辑器之战)，说的就是这两个编辑器的用户互相对掐的事儿。所以，如果想在 Linux/Unix 社区引发一场战争，最简单的办法就是问“到底是 Vim 好用还是 Emacs 好用”。

## 好处？

如果你经常写代码，建议你去稍微了解一下背景，挑`其中一个`来进行学习。

这两种编辑器一开始很不好学，但是一旦学会，你有可能就习惯了。

当你熟悉这两种编辑器之后，建议你去查一下如何写配置文件、如何装插件。通过自己的定制来使编辑器更加顺手。

## Vim

### 安装

* Linux 自带精简版 Vim。需要手动装一下 Vim 才能有完整的体验。GUI 版则是另外的软件包，例如 `vim-gnome`。
* OS X 自带完整的 Vim。如果想要 GUI 版，可以装个 `MacVim`。
* Windows 需要手动[下载](http://www.vim.org)和安装。建议把 Vim 所在目录添加到 PATH 环境变量中。

### 学习

对于 *nix 系统，只需在“终端”中输入

	vimtutor
	
对于 Windows 系统，则是到“开始”菜单中去找“Vim tutor”图标。

## Emacs

### 安装

* Linux 下需要手动安装 Emacs。
* OS X 有纯文本模式的 Emacs，不过版本有些旧。可以通过某个软件包管理器（例如 MacPorts）安装新版本的 Emacs。
* Windows 需要手动[下载](http://ftp.gnu.org/gnu/emacs/)和安装。建议把 Emacs 所在目录添加到 PATH 环境变量中。

### 学习

打开 Emacs，按 <kbd>C-h t</kbd> (先按 <kbd>Ctrl-H</kbd>，松手，再按字母 t。OS X 是 <kbd>Control-H</kbd>) 进入教程。

## 可是我明明觉得 Visual Studio 或 Eclipse 更好用……

要知道 Emacs 和 Vim 是黑客创造出的东西，它们更像是一种信仰、一种宗教……

在 Linux/Unix 社区里表达对这两种编辑器的鄙视，就好比当着穆斯林的面焚烧《古兰经》。

此外还要注意，Emacs 和 Vim 是`编辑器` (PS: Emacs 是披着编辑器外衣的操作系统)，而 Visual Studio 和 Eclipse 是 `IDE`，它们不是同一类东西。