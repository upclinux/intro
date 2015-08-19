---
layout: post
title:  "【未完成】架设网站"
---
* content
{:toc}

本文简单介绍如何架设网站。注意，本文不讨论运营网站的问题。

# 首要问题

首先你需要知道以下几个问题：

* 网站是用什么语言写的。
* 需要什么样的数据库。
* 什么服务器。

不知道的话，就需要寻求帮助了：

* 如果程序还没写出来，可以看[这里]({{ site.baseurl}}/07/backend/)决定用什么编程语言和框架。
* 如果犯了选择综合症，建议用 PHP+MySQL。

关于服务器，也有一些问题：

* 如果只是想测试，可以把服务器装在自己电脑上，或者装到虚拟机里（免得把自己电脑搞得乱七八糟）。
* 在生产环境当然不能用普通电脑。[这里]({{ site.baseurl }}/08/cloud/)是一个靠谱的服务器列表。

# 部署

由于网上有很多教授具体操作步骤的资料，所以本文只是提示一下应该做什么事儿。

## PHP

流行的两个组合有：

* LAMP: Linux + Apache + MySQL + PHP
* LNMP: Linux + Nginx + MySQL + PHP (php-fpm)

此外还有 WAMP (Windows 环境)。可以用 WAMPServer 或 XMAPP 在 Windows 系统中快速搭建测试环境。

注意：

* 在有些发行版中（包括 OS X），Apache 被称作 httpd。
* Mac 自带 Apache 和 PHP，不带 MySQL。默认情况下 Apache 和 PHP 都不可用，所以要改一些配置文件。

## Java（未完成）

需要安装 Java 环境。Linux 中常用 OpenJDK。

使用 Apache Tomcat 作为网页服务器。

数据库常用 MySQL。

## ASP.NET（未完成）

### Windows

需要安装以下组件：

1. IIS
2. .Net Framework
3. SQL Server (如果数据库是 SQL Server)

### Linux

ASP.NET (C#) 可以在 Linux 中部署。.Net Framework 在 Linux 中的替代品为 Mono。

SQL Server 没有替代品，因此仍然需要换数据库服务器。

## Python

## Node.js

## Ruby
