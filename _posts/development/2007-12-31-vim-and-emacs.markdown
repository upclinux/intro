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

这两个是世界上最顶级的文本编辑器。

[% callout style=danger %]

#### 禁忌

不要问 Vim 和 Emacs 到底哪个好用。有一个词语叫做[“编辑器之战”](https://zh.wikipedia.org/wiki/编辑器之战)，指的是这两个编辑器的用户互相取笑对方所用编辑器的事情。

[% endcallout %]

# 优势

如果你经常写代码，建议你去稍微了解一下背景，挑`其中一个`来进行学习。

这两种编辑器的特点都是一开始很不好学，但是一旦学会，就很可能习惯了。

当你熟悉这两种编辑器之后，建议你去查一下如何写配置文件、如何装插件。通过自己的定制来使编辑器更加顺手。

# Vim

## 安装

* Linux 自带精简版 Vim。需要手动装一下 Vim 才能有完整的体验。GUI 版则是另外的软件包，例如 `vim-gnome`。
* OS X 自带完整的 Vim。如果想要 GUI 版，可以装个 `MacVim`。
* Windows 需要手动[下载](http://www.vim.org)和安装。建议把 Vim 所在目录添加到 PATH 环境变量中。

## 学习

对于 Linux/Unix 系统，只需在“终端”中输入

	vimtutor

对于 Windows 系统，则是到“开始”菜单中去找“Vim tutor”图标。

# Emacs

## 安装

* Linux 下需要手动安装 Emacs。
* OS X 有纯文本模式的 Emacs，不过版本有些旧。可以通过软件包管理器（例如 MacPorts）安装新版本的 Emacs。
* Windows 需要手动[下载](http://ftp.gnu.org/gnu/emacs/)和安装。建议把 Emacs 所在目录添加到 PATH 环境变量中。

## 学习

打开 Emacs，按 <kbd>C-h t</kbd> (先按 <kbd>Ctrl-H</kbd>，松手，再按字母 t。OS X 是 <kbd>Control-H</kbd>) 进入教程。

# 我觉得 Visual Studio 更好用……

## Emacs 和 Vim 是一种信仰

Emacs 最早于 1975 年由 Richard Stallman 等人开发。vi 最早于 1976 年于 Bill Joy 开发，其改进版 Vim 最早于 1991 年由 Bram Moolenaar 开发。

Emacs 和 Vim 仍然经久不衰，其重要原因在于强大的文本编辑功能。

它们是黑客创造出的东西，本身蕴含着黑客精神，因此它们更像是一种信仰、一种宗教。在 Linux/Unix 社区里嘲笑或鄙视这两种编辑器，后果可能非常严重。

## Visual Studio 是 IDE

Emacs 和 Vim 是文本编辑器，本身不针对特定的语言 (Emacs Lisp 除外)。因此语法补全、上下文补全、项目文件管理、编译、调试等功能都需要依靠插件和脚本完成，而二进制文件、资源文件、图形界面等需要依靠其他软件来完成。

Visual Studio 是最好用的 IDE (集成开发环境) 之一。它针对 .Net 语言设计，着重为用户“服务”。

不过 Visual Studio 仍然有支持 Vim 编辑方式的插件 VsVim。

据说微软内部开发人员很少使用 VS。他们也在广泛地使用 Emacs 和 Vim。
