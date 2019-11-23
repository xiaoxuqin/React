import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div id="sidebar">
                    <div class="panel">
                        <div class="header">
                            <span class="col_fade">作者</span>
                        </div>
                        <div class="inner">
                            <div class="user_card">
                                <div>
                                    <a class="user_avatar" href="/user/atian25">
                                        <img src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120" title="atian25" />
                                    </a>
                                    <span class="user_name"><a class="dark" href="/user/atian25">atian25</a></span>
                                    <div class="board clearfix">
                                    <div class="floor">
                                        <span class="big">积分: 9130 </span>
                                    </div>
                                </div>
                                <div class="space clearfix"></div>
                                    <span class="signature">“追求卓越，成功就会在不经意间追上你。”</span>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div class="panel">
                        <div class="inner ads">   
                            <a href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc_540_130&amp;utm_campaign=huodong&amp;utm_content=gift&amp;ytag=cnodejs" target="_blank" class="banner sponsor_outlink" data-label="ucloud-banner">
                                <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" />
                            </a>
                            <div class="sep10"></div>
                            <a href="https://www.qiniu.com/events/cdn-package?code=cnode" target="_blank" class="banner sponsor_outlink" data-label="qiniu-sidebar">
                                <img src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" />
                            </a>
                            <div class="sep10"></div>
                            <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" class="banner sponsor_outlink" data-label="alinode">
                                <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" />
                            </a>  
                        </div>
                    </div>
                    <div class="panel">
                        <div class="header">
                            <span class="col_fade">作者其它话题</span>
                        </div>
                        <div class="inner">
                            <ul class="unstyled">
                                <li>
                                    <div>
                                        <a class="dark topic_title" href="/topic/5cc7a5b105ae566f637fdb7c" title="如果你还有 Node 6.x 的项目，请珍惜它，因为今天是 LastDay 了，请点灯 🕯🕯">如果你还有 Node 6.x 的项目，请珍惜它，因为今天是 LastDay 了，请点灯 🕯🕯</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a class="dark topic_title" href="/topic/5c6657630752e020af943d12" title="Egg 支持 JS 智能提示">Egg 支持 JS 智能提示</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a class="dark topic_title" href="/topic/5b0fb21b57137f22415c47c8" title="deno issue 的狂欢，是中国开发者的耻辱柱">deno issue 的狂欢，是中国开发者的耻辱柱</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a class="dark topic_title" href="/topic/5ba5fd6237a6965f59051bd1" title="EggJS 10000 Star + 2 years - 阿里 Node 企业级框架 ✨✨✨">EggJS 10000 Star + 2 years - 阿里 Node 企业级框架 ✨✨✨</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a class="dark topic_title" href="/topic/59faded263db6ac51afed9c7" title="[eggjs-feed-05] Node 8 LTS + Egg 2.x 计划">[eggjs-feed-05] Node 8 LTS + Egg 2.x 计划</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="panel">
                        <div class="header">
                            <span class="col_fade">无人回复的话题</span>
                        </div>
                        <div class="inner">
                            <ul class="unstyled">
                                <li>
                                    <div>
                                        <a class="dark topic_title" href="/topic/5dc0f464ece3813ad9ba65d0" title="发现一款性能比Kong强的开源网关：Goku">发现一款性能比Kong强的开源网关：Goku</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a class="dark topic_title" href="/topic/5dc007a9ece3813ad9ba6400" title="一种支持插件式开发的命令行工具开发模式">一种支持插件式开发的命令行工具开发模式</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a class="dark topic_title" href="/topic/5dbfe24e865a9844a301fc51" title="请问缓存的内存模型是什么呢">请问缓存的内存模型是什么呢</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a class="dark topic_title" href="/topic/5dbea628865a9844a301f8d2" title="Hackers周刊第十期（2019-11-03）">Hackers周刊第十期（2019-11-03）</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a class="dark topic_title" href="/topic/5dbe83cd865a9844a301f894" title="写了个在测试中，控制函数日志打印的npm包">写了个在测试中，控制函数日志打印的npm包</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
