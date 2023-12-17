function bot_ui_ini() {
    var botui = new BotUI("hello-hotarugali")
    botui.message.add({
        delay: 800,
        content: "Hi, 欢迎来到我的博客星球👋👋👋"
    }).then(function () {
        botui.message.add({
            delay: 1100,
            content: "这里是 hotarugali "
        }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "一个忧郁的蓝孩纸 ~"
            }).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{
                        text: "然后呢？ 😃",
                        value: "sure"
                    }, {
                        text: "少废话！ 🙄",
                        value: "skip"
                    }]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
        botui.message.add({
            delay: 600,
            content: "😘"
        }).then(function () {
            secondpart()
        })
    },
    end = function () {
        botui.message.add({
            delay: 600,
            content: "![...](https://view.moezx.cc/images/2018/05/06/a1c4cd0452528b572af37952489372b6.md.jpg)"
        })
    },
    secondpart = function () {
        botui.message.add({
            delay: 1500,
            content: "目前大四刚毕业啦~"
        }).then(function () {
            botui.message.add({
                delay: 1500,
                content: "就读专业是计算机科学与技术"
            }).then(function () {
                botui.message.add({
                    delay: 1500,
                    content: "主攻 C/C++ 语言和 Python，会些 Linux Bash 和 MatLab，稍懂 Go，偶尔也折腾 HTML/JavaScript "
                }).then(function () {
                    botui.message.add({
                        delay: 1500,
                        content: "研究方向是计算机技术 / 计算机视觉、机器学习和深度学习"
                    }).then(function () {
                        botui.message.add({
                            delay: 1800,
                            content: "喜欢跑步和游泳，是个日系音乐控 ~"
                        }).then(function () {
                            botui.message.add({
                                delay: 1800,
                                content: "（一直想学会日语，奈何太懒 555 ~ ）"
                            }).then(function () {
                                botui.action.button({
                                    delay: 1100,
                                    action: [{
                                        text: "为什么网站名叫 [お前はどこまで見えている] 呢？ 🤔",
                                        value: "why-webname"
                                    }]
                                }).then(function (a) {
                                    thirdpart()
                                })
                            })
                        })
                    })
                })
            })
        })
    },
    thirdpart = function () {
        botui.message.add({
            delay: 1000,
            content: "[お前はどこまで見えている] 来自以前看的一部动画 ~"
        }).then(function () {
            botui.message.add({
                delay: 1500,
                content: "感觉很有人生深意 ~ 😃"
            }).then(function () {
                botui.message.add({
                    delay: 1500,
                    content: "是不是很有诗意 ~ ヾ(≧∇≦*)ゝ"
                }).then(function () {
                    botui.action.button({
                        delay: 1500,
                        action: [{
                            text: "那笔名为什么取 [hotarugali] 呢？ 🤔",
                            value: "why-cat"
                        }]
                    }).then(function (a) {
                        fourthpart()
                    })
                })
            })
        })
    },
    fourthpart = function () {
        botui.message.add({
            delay: 1E3,
            content: "[hotarugali] 对应日语「蛍狩」"
        }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "多美的意境啊 ~ 有木有"
            }).then(function () {
                botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "你这个主题是哪来的呢？ 🤔",
                        value: "why-domain"
                    }]
                }).then(function (a) {
                    fifthpart()
                })
            })
        })
    },
    fifthpart = function () {
        botui.message.add({
            delay: 1000,
            content: "当…… 当然是"
        }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "白嫖大佬的啦 ~ （真香）"
            }).then(function () {
                botui.message.add({
                    delay: 1100,
                    content: "用的是 Jerry 大佬在 github 开源的主题"
                }).then(function () {
                    botui.message.add({
                        delay: 1100,
                        content: "hexo-theme-butterfly"
                    }).then(function () {
                        botui.message.add({
                            delay: 1100,
                            content: "嗯…… 差不多了，就说这么多啦 ~"
                        }).then(function () {
                            botui.message.add({
                                delay: 1600,
                                content: "那么，开始一段博客星球之旅吧！ (*^▽^*)"
                            })
                        })
                    })
                })
            })
        })
    } 
}