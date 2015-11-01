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

这两个是世界上最顶级的文本编辑器，而且几十年前就是。

[% callout style=danger %]

#### 禁忌

不要问 Vim 和 Emacs 到底哪个好用。有一个词语叫做[“编辑器之战”](https://zh.wikipedia.org/wiki/编辑器之战)，指的是这两个编辑器的用户互相取笑对方所用编辑器的事情。

[% endcallout %]

# 优势

如果你经常写代码，建议你去稍微了解一下背景，挑`其中一个`来进行学习。

这两种编辑器的特点都是一开始很不好学，但是一旦学会，就很可能习惯了。

当你熟悉这两种编辑器之后，建议你去查一下如何写配置文件、如何装插件。通过自己的定制来使编辑器更加顺手。

[% callout %]
与时俱进

时代在不断变化，对于现代的软件项目，Emacs 和 Vim 用户可能需要花大量的时间进行配置才能达到其他现代化编辑器（如 Sublime Text）的效果。所以，我们不妨换个思路——在现代化编辑器里装 Emacs/Vim 编辑风格的插件——例如在 Visual Studio 中安装 VsVim。
[% endcallout %]

# Vim

## 安装

* Linux 自带精简版 Vim。需要手动装一下 Vim 才能有完整的体验。GUI 版则是另外的软件包，例如 `vim-gnome`。
* OS X 自带完整的 Vim。如果想要 GUI 版，可以装个 `MacVim`。
* Windows 需要手动[下载](http://www.vim.org)和安装。建议把 Vim 所在目录添加到 PATH 环境变量中。

## 学习

对于 Linux/Unix 系统，只需在“终端”中输入

	vimtutor

对于 Windows 系统，则是到“开始”菜单中去找“Vim tutor”图标。

## Windows 的编码问题

Vim 在 Windows 中可能会遇到编码问题（不能正确读取 UTF-8 编码的文件）。所以可以编辑`$VIM/_vimrc`并加入

	let &termencoding=&encoding
	set fileencodings=utf-8,gbk,ucs-bom,cp936

# Emacs

## 安装

* Linux 下需要手动安装 Emacs。
* OS X 有纯文本模式的 Emacs，不过版本有些旧。可以通过软件包管理器（例如 MacPorts）安装新版本的 Emacs。
* Windows 需要手动[下载](http://ftp.gnu.org/gnu/emacs/)和安装。建议把 Emacs 所在目录添加到 PATH 环境变量中。

## 学习

打开 Emacs，按 <kbd>C-h t</kbd> (先按 <kbd>Ctrl-H</kbd>，松手，再按字母 t。OS X 是 Control-H) 进入教程。

# Emacs 和 Vim 曾经是一种信仰

Emacs 最早于 1975 年由 Richard Stallman 等人开发。vi 最早于 1976 年于 Bill Joy 开发，其改进版 Vim 最早于 1991 年由 Bram Moolenaar 开发。

Emacs 和 Vim 仍然经久不衰，其重要原因在于强大的文本编辑功能。现在很多流行的编辑器都有 Emacs 和 Vim 编辑风格的插件。

它们是黑客创造出的东西，本身蕴含着黑客精神，因此它们更像是一种信仰、一种宗教。在 Linux/Unix 社区里嘲笑或鄙视这两种编辑器，后果可能非常严重。
