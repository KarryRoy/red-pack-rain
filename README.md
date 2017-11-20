# red-pack-rain
自己写的第一个红包雨

# 使用方式
rain = new redRain({
    vm : _vm,
    el : document.getElementsByClassName("count_wrap")[1],
    clickfun : function() {
      // 回调函数
    }
});
注意：vm是自定义需要传的参数，可以在插件里面修改。

# 构造函数可以传的参数
el 元素容器
interval 定时器
second 红包出现时间
density 1s内红包个数
callback 回调函数
