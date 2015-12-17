---
layout: post
title:  "网络诊断命令"
---
* content
{:toc}

以下是一些系统自带的、常用的网络相关的命令。有趣的是，其中有很多命令是在 Windows、Linux 和 Mac 中通用的——用法基本相同。

# ifconfig/ipconfig

ipconfig 是 Windows 的命令，ifconfig 是 Linux/Mac 的命令。

这两个命令可以查看本机网络配置（网卡数量、MAC 地址、IP 地址等）。

如果有 root 权限，ifconfig 命令可以控制网卡的开闭、更改本机 IP 和 MAC 地址等。但 Windows 的 ipconfig 只能查看不能修改。

在 Linux/Mac 系统中，网关需要用 route 命令查看。DNS 配置在 /etc/resolv.conf 文件中。而 Windows 的 ipconfig 会把这些信息都显示出来。

# ping

ping 是一个非常常用的命令。判断一个主机（网站等）能否连通，只需拿 ping 命令试一下，例如：

    ping www.baidu.com

ping 会不断尝试（Windows 系统只尝试四次，除非有相关参数），如果能够连通，会显示来自对方的回应（响应时间、TTL），否则显示错误信息。

如果连通而且响应时间不高，说明网络连接状况*应该*很好。如果出现错误，说明自己或对方的网络可能出现问题（网络故障、网络不稳定、运营商故意丢包、被墙等）。

此外 TTL 值可用于简单地分辨操作系统，如 Windows 的 TTL 大约在 100~130 之间，Unix/Linux 大约在 240~255 之间。

在 Linux/Mac 系统中，IPv6 的 ping 叫做 ping6，而 Windows 系统中则是 ping -6。

[% callout %]
ping 不是万能的

主机或防火墙可以过滤 ping 流量，因此“ping 不通”不代表连接不上。同样，连接得上也不见得 ping 得通。

由于长城可以封锁指定端口，如 22、443，因此能 Ping 通国外 IP 也不代表一定能连接上。
[% endcallout %]

[% callout %]
ping 不是武器

ICMP Flood 是一种攻击方式，但是操作系统自带的 ping 工具（以及相关 API）对发包能力做了限制——攻击效果就像挠痒痒一样。因此需要发动攻击的时候要使用其他工具。
[% endcallout %]

# traceroute

备注：IPv6 的版本叫做 traceroute6，而在 Windows 系统中，IPv4 和 IPv6 都是 tracert。

traceroute 会追踪路上经过的所有路由器列表。通过尝试不同跳数，可以用来确定网络问题是发生在网关还是主机等。

注意，“\* \* \*”不一定表示连不通，有可能是数据包被防火墙过滤了。

# nslookup

nslookup 用于查询 DNS 记录。可用于查看域名解析是否正常<span class="blackout">是否被污染</span>。

常见的用法有：

查询域名的 A 记录：

    nslookup www.baidu.com
    nslookup www.baidu.com 114.114.114.114

查询其他记录：

    nslookup -qt=CNAME dl.google.com

查询缓存：

    nslookup -d www.baidu.com

# netstat

netstat 可以列出系统上所有的套接字连接情况，包括哪些处于监听状态。常用于查看端口监听和占用情况，例如查看 Apache 是否启动并进行监听。

例如：

* `netstat -a`：列出所有连接
* `netstat -an`：禁止反向域名解析，提高查询速度。
* `netstat -t`：只查看 TCP 连接（-u 是 UDP 连接）
* `netstat -nl`：只列举监听中的连接
* 查看哪个进程占用了端口：Linux 为 `netstat -nlp`，Windows 为 `netstat -b`。

# hostname

该命令可以查看和修改主机名。

不过在 Windows 系统中这个命令只能查看不能修改。

# arp

arp 命令用于查看和修改本机 ARP 缓存。

# route

route 命令用于查看和修改路由表。此命令在 Windows、Linux、Mac 用法各不相同。

以 Ubuntu 为例，如果未设置网关，可通过以下命令设置：

    route add default gw 192.168.1.1

# ftp、tftp、telnet

一些客户端而已。

# 实例：判断网络故障

1. 检查网络连接是否正确。
2. `ifconfig`、`route`、`cat /etc/resolv.conf`（Linux/Mac）或`ipconfig`（Windows），观察 IP、网关、DNS 等配置是否正确。
3. `ping 114.114.114.114`，观察能否联网。
4. `traceroute 114.114.114.114`，如果无法联网，观察在哪个路由器处发生错误。
5. `nslookup www.baidu.com`，观察目标域名是否被正确解析。
6. `ping www.baidu.com`，观察目标是否能 ping 通。注意，ping 不通不代表连不通。
7. `curl -Iv https://www.baidu.com`（Windows 需要自己安装 curl），观察网站的访问过程，判断是否出现故障。

# 实例：判断是否被墙

总有人说“xxx被墙了”（或者“xxx能访问了”），但其他人却能正常使用（不能访问），所以在下结论之前，应该收集一些证据。

1. 首先把所有翻墙工具关掉，屏蔽 hosts，以免得出错误结论。
2. 刷新 DNS 缓存。Windows 用`ipconfig /flushdns`（需要管理员权限），Linux 用`sudo /etc/init.d/nscd restart`，Mac 则是`sudo dscacheutil -flushcache`。
3. 充分条件：`curl -vI https://www.google.com`（Windows 需要自己安装 curl）

以下只是必要条件：

1. `ping www.google.com`：最直接判断方法是 ping。
2. 如果处于教育网等环境，应同时测试`ping6 www.google.com`（Linux/Mac）或`ping -6 www.google.com`（Windows），查看 IPv6 下的连接情况。
3. `nslookup www.google.com`，观察 IP 解析结果是否正确。对于互联网大佬来说，往往一个域名可以解析出多个 IP，并且有 IPv6 地址。如果只是个简单的“159.106.121.75”（一个常用的污染 IP），说明可能被 DNS 污染了。
4. 到在线查询网站上查询所得的 IP 是否为目标网站的 IP。
5. 如果 IP 正确，不妨多 ping 几次，并使用 traceroute 跟踪，查看是否有掉包的情况。

由于很多大佬都采用了多播技术，这就意味着，只要有一个 IP 好使，服务就能使用。可以在支持英文搜索的搜索引擎上寻找“online nslookup”，找到可用 IP。
