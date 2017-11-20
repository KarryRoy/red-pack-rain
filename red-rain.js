function redRain(obj) {
    var me = this;

    me.el = obj.el;
    me.vm = obj.vm;
    me.interval = null;
    me.second = obj.second || 10; // 红包出现时间
    me.density = obj.density || 6; // 红包1s内的个数
    me.all = me.second * me.density; // 红包总个数
    me.data = new Array(me.all).fill(1);
    me.callback = obj.callback || function() {/*alert('over');*/};
    me.count = 0; // 抢到的红包数目

    me.create();

    $(obj.el).on('click', '.bao',function(e) {
        if (e.target.getAttribute("data-i") == 1) {
            me.count ++;
            $(e.target).addClass('grey');
            e.target.setAttribute("data-i", "0");
        }
    });
}

// 生成红包
redRain.prototype.start = function(data) {
    var me = this, len = me.data.length;

    me.interval = setInterval(function() {
        if (me.vm.secs <= 0) {
            clearInterval(me.interval);
        } else {
            me.vm.secs --;
        }
    }, 1000);

    me.data.forEach(function(v, i) {
        setTimeout(function() {
            me.move(v);
            if (i === len - 1) {
                me.clear();
                me.callback();
            }
        }, v.time);
    });
    
};

redRain.prototype.create = function(fun) {
    var me = this;
    me.data = me.data.map(function(v, i) {
        var o = get_xy();
        var node = document.createElement("div");

        node.style.top = o.btop;
        node.style.left = o.bleft;
        node.className = "bao trans";
        node.setAttribute("data-i", "1");
        v = {};
        v.node = node;
        v.top = o.etop;
        v.left = o.eleft;
        v.time = i * (1000 / me.density);

        return v;
    });

    function get_xy() {
        var o = {};
        var xs = 100; //x轴浮动范围
        var width = innerWidth - 50; // x轴起始位置最大值
        var height = innerHeight;

        o.btop = 0 + "px";
        o.etop = height + "px";
        o.bleft = parseInt(Math.random()*width);
        o.eleft = (parseInt(Math.random()*xs) + o.bleft - xs) + "px";
        o.bleft += "px";

        return o;
    }
};

redRain.prototype.move = function(v, fun) {
    this.el.appendChild(v.node);
    v.node.offsetHeight;
    setTimeout(function() {
        v.node.style.left = v.left;
        v.node.style.top = v.top;
        v.node.offsetHeight;
    }, 0);
};

redRain.prototype.clear = function(v) {
    // this.el.innerHTML = "";
    // this.el.style.display = "none";
    // this.interval = null;
    // this.callback();
};