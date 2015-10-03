---
layout: post
title:  "［就是这么简洁］常用编程软件"
---
* content
{:toc}

本文将用最简洁的语言向新手推荐好用的编程软件——

# 编辑器

[% callout %]
说好的简洁呢

“编程”本来就是个很宽泛的概念，所以，对于下面的内容，需要什么就去找什么，不需要的不要看。这样就很简洁了。:neutral_face:
[% endcallout %]

* 新手：学 C/C++ 语言用 `CodeBlocks`，考二级用 `Visual C++ 6.0`。考试通过之后就可以通通卸载了<span class="blackout">目前似乎只有二级考试和某气功还在用 VC6.0</span>:smirk:。
* 桌面程序：
    * 只管 Windows 的话，应用当然用 `Visual Studio`（可以选择 C# 或 Visual C++<span class="blackout">，不是 C++</span>）。不过 `Qt` 也不错。
    * 只管苹果的话，当然 `Xcode`。找教程的话要找“Swift”（推荐）或“Objective-C”，因为 Xcode 是软件的名字，这两个才是编程语言。
    * 同时考虑三大系统，可以用 `Qt`（其实不考虑也可以用）。只不过在 Linux 里 Qt 程序经常敲不了汉字。
    * Java：`Eclipse` 或 `IntelliJ IDEA`。
* 移动应用：
    * Android：`Android Studio`
    * iOS：`Xcode`
    * Windows Phone：`Visual Studio`（没有人会买 WP 的）
    * 如果做游戏，事实上已经有现成的跨平台框架，例如 Cocos2d-x 和 Unity。Unity 自带开发工具，而 Cocos2d-x 框架游戏一般用 Visual Studio 开发。
    * 最近 M$ 也改变战略，支持用 C# 语言开发 Android/iOS 应用了，甚至可以在 Linux 或 Mac 中进行开发——这个编程软件叫做 `Xamarin`。
* 网站（前后端兼备）：
    * PHP（＋＋）：`PHPStorm`
    * Python（＋）：`PyCharm`（做网站一般用框架，例如 Django）
    * Java（＋＋）：`Eclipse`（for EE）或 `IntelliJ IDEA`。
    * Node.js（＋）：`WebStorm`
    * Ruby：`RubyMine`（做网站一般用 Ruby on Rails 框架）

      <small>以上几个软件除了 Eclipse 都是同一个公司做的，所以破解的方法都一样——直接搜注册码。</small>

    * ASP.Net：`Visual Studio`（如果你坚持用 Linux 或苹果那么可以用 `Visual Studio Code`），记得用 C# 编程<span class="blackout">，因为用 VB 会被人笑话</span>。
    * ASP：如果真的想用经典的 ASP，那么当然要用旧版的 Visual Studio。
    * <small>有钱买主机的可以无视此条：以上有“＋＋”标记表示很容易找到一个部署的空间，“＋”表示比较容易，其他的不好找。</small>
    * C：能想到拿纯 C 语言做网站的，想必应该很熟悉嵌入式 Linux 那一套了——Makefile。如果真的不知道，可以学学 cgic 库的用法。
* 网站（纯粹前端）：虽然总有人推荐 Dreamweaver 但是它跟以下软件比起来简直是小巫见大巫。（推荐 FrontPage 的可以去:hankey:了）
    * 编辑器——可以随便挑一个然后装插件：`Sublime Text`、`WebStorm`、`Brackets`、`Atom`

      <small>Brackets 是 Adobe 开发的，说明连 Adobe 自己都觉得 Dreamweaver 难用了……</small>

    * 调试工具：Firefox+Firebug 或 Chrome+Chrome Dev Tools
* 通用编辑器：`Vim`（编辑器之神）、`Emacs`（神的编辑器）、`Notepad++`、`Sublime Text`、`Atom`……
    * [这里]({{site.baseurl}}/07/editor/)有更详细的介绍。
    * Vim 和 Emacs 的历史非常悠久了。当年人们愿意花时间把它们配置成类似 IDE 的东西，但是现在人们更倾向于当作快速的文本编辑器来用。
    * 这些编辑器都支持插件，用起来当然顺手了。
* ACM：ACM 比赛当然用 `CodeBlocks` 和 `Eclipse`，因为你根本没时间配置 Vim 和 Emacs。
* LaTeX：如果用 LaTeX 写论文或什么东西，推荐 `TexStudio`。
* 给领导工作的<s>秘书</s>:wink:：`Excel` 够用了，如果不够，加个 VBA（宏）就够了。<span class="blackout">其实女秘书需要的根本不是编程软件。</span>

# 版本控制与团队协作

如果几人小组合作编程，还在互相用 QQ 传代码，那就太:dog:了！所以说当然要找个更高效的工具——目前最火最流行的当然是 <s>GayHub</s>[GitHub](https://github.com) 啦。

（所以 GitHub 成为了一个不管有多么大“问题”都不敢被墙的网站:joy:）

# 编程参考手册

如果你没有把各种对象属性方法背得滚瓜烂熟，那么随手预备一个参考手册是非常有意义的。

* Mac/iOS：当然是 Dash。
    * App Store 上可免费下载，但是只有掏一大笔钱后才能随便使用，所以总有人找破解版。
* Windows：Dash 的 Windows 版叫 [Velocity](http://velocity.silverlakesoftware.com)。当然也要掏钱才行。
* Linux：Dash 不出 Linux 版，所以有人开发了 [Zeal](http://zealdocs.org)。自由软件，与 Dash 文档兼容，不过功能稍微少点。<span class="blackout">可能是因为高手用不着这些东西。</span>
* Android：[LovelyDocs](http://lovelydocs.io)，也要掏钱。
* 在线：[DevDocs](http://devdocs.io)，免费。当然，Google 和 StackOverflow（一个开发者的问答网站）也免费。
    * 如果在用 M$ 的编程语言和开发工具（Visual Studio），当然找 [MSDN](https://msdn.microsoft.com/library) 了。
