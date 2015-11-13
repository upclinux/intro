---
layout: post
title:  "构建 Android 开发环境"
date:   2007-12-26 00:00:00
---
* content
{:toc}

iOS 应用只能用 Mac/Xcode 开发，Windows Phone 应用只能在 Windows/VS 下开发，所以它们没什么麻烦事儿。但是，因为 Android 本身就比较乱，而且是谷歌搞的，有一个你懂得的问题，所以……

因为 Android 开发环境配置比较麻烦，为了节省大家的时间，大家照着本文操作即可。

# 配置环境

过去常用的软件是 Eclipse+ADT 插件，不过 ADT 已经停止支持，所以当然要用官方新推出的 Android Studio。

Android Studio 基于 IDEA 平台，因此用过 IntelliJ IDEA、WebStorm、PyCharm 等等软件的人一定会感到非常熟悉。反过来也一样。

## Android Studio

因为 Android 官网被墙，因此有人专门将其汇总了，提供了国内的镜像。我们可以从[http://www.androiddevtools.cn](http://www.androiddevtools.cn)下载。

截止到这里，只下载一个 Android Studio 就可以了，其他组件我们可以通过 Android Studio 来安装。

## 安装组件

[% callout %]
网络测试

打开命令提示符，输入：

    ping dl.l.google.com

如果能 Ping 得通（IP 可能是 203.208.41.\*），那么我们就可以直接通过官方源来安装组件了。
[% endcallout %]

第一次启动 Android Studio 时，软件会提醒你安装 Android SDK。如果 dl.l.google.com 没有被墙，那么直接“下一步”就可以了。如果被墙，软件当然会提示“无法下载”。

[% callout %]
如果被墙……

实际上它没被墙。如果你不嫌麻烦，你也可以手动下载和解压以下组件：

1. SDK Tools
2. SDK Platform-Tools
3. Build-Tools
4. SDK（注意 API 版本）
5. Android SDK Extras 和 Support Library

把它们放到同一个目录中，然后到 Android Studio 的设置中把 Android SDK 的目录指定成你刚解压的位置。
[% endcallout %]

[% callout %]
2015年11月3日的情况

* dl.l.google.com 能正常访问，所以大多数组件都能正常下载。
* dl-ssl.google.com 被墙，所以谷歌眼镜 SDK 无法下载。

虽然事实上很多 Google IP 都能保证网站正常访问，但是 Android Studio 会认为证书不正确（事实上是正确的）从而拒绝下载。
[% endcallout %]

## 下载不同版本 SDK

因为绝大多数人的手机还处于 4.x（有的人甚至是 2.x），所以要下载低版本 SDK 来保证大多数人能够正常使用。

如果希望照顾多数人，推荐下载 API 17（4.2.2）。如果希望照顾绝大多数<span class="blackout">山寨机</span>，那么就要下载 API 10 了（2.3.3）。

在第一次启动时，如果它能够顺利地从官方源下载文件，那么直接去系统设置，把低版本 SDK 打勾，然后软件会下载低版本 SDK。如果被墙了，那么你需要自己手动下载低版本 SDK 然后手动解压了。

## 模拟器

GenyMotion 是一个比较好用的模拟器。详细说明可以看[这里]({{site.baseurl}}/12/genymotion/)。

因为我们是要调试程序，所以不光要下载模拟器和 VirtualBox（没有它模拟器无法运行），还要在 Android Studio 中安装 GenyMotion 插件。当然，因为 Android Studio 本身就可以在线查找下载安装插件，所以一点都不麻烦，更不用自己跑官网上去下载。

虽然 GenyMotion 也可以免费用（当然功能少很多），但是用于商业用途的话是需要掏钱的。

# Hello world

按照国际惯例，把编程软件安装好之后，当然要用 Hello world 测试一下。

新建一个项目，命名为 HelloAndroid。

* API 选多少呢——最起码得让你自己手机能跑起来吧。
* 带不带 Activity 呢？当然要带一个了。

打开 res/layout/activity_main.xml，应该能看到一个可视化编辑器。我们往里面添一个 Plain Text 和一个 Button，分别把 id 设置为 nameText 和 helloButton。

在代码中找到 MainActivity，把 onCreate() 改成：

{% highlight java %}
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    Button helloButton = (Button) findViewById(R.id.helloButton);
    helloButton.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            EditText nameText = (EditText) findViewById(R.id.nameText);
            String name = nameText.getText().toString();

            AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this);
            builder.setTitle("Hello world");
            builder.setMessage("Hello, " + name);
            builder.show();
        }
    });
}
{% endhighlight %}

在前面一堆 import 中加入

{% highlight java %}
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.app.AlertDialog;
{% endhighlight %}

把手机的 USB 调试打开，跟电脑连上，然后点击运行……

如果感觉不错，想打包发布，那么只需要点击 Build 菜单里的 Generate Signed APK，然后按照向导操作签名即可。
