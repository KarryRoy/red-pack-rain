# red-pack-rain
自己写的第一个红包雨

使用方式
--
		rain = new redRain({
    		vm : _vm,
    		el : document.getElementsByClassName("count_wrap")[1],
    		clickfun : function() {
    		}
		});
		注意：`vm`是自定义需要传的参数，可以在插件里面修改。

构造函数可以传的参数
--
new redRain(obj); 

// obj的内容 <br>
`el` 元素容器<br>
`interval` 定时器<br>
`second` 红包出现时间<br>
`density` 1s内红包个数<br>
`callback` 回调函数<br>
