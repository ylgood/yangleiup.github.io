(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{241:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"动画绘制实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动画绘制实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 动画绘制实现")]),t._v(" "),e("h3",{attrs:{id:"css3的动画属性transition，aniamtion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3的动画属性transition，aniamtion","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3的动画属性transition，aniamtion")]),t._v(" "),e("p",[t._v("缺点：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("CSS3的动画属性是存在兼容问题的，最明显的就是IE10之后才兼容。")])]),t._v(" "),e("li",[e("p",[t._v("有些动画效果CSS3无法实现，如改变元素scrollTop的值进行滚动，这样就只能使用js的相关方法了。")])]),t._v(" "),e("li",[e("p",[t._v("CSS3的动画无法实现过于复杂的动画效果，如CSS3支持控制动画速度赛贝尔曲线的数值有限，更复杂的动画效果得使用js结合相关算法才能完成。")])])]),t._v(" "),e("h3",{attrs:{id:"javascript的settimeout和setinterval方法（进行dom的样式循环改变达到动画效果）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript的settimeout和setinterval方法（进行dom的样式循环改变达到动画效果）","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript的setTImeOut和setInterval方法（进行DOM的样式循环改变达到动画效果）")]),t._v(" "),e("p",[t._v("js利用H5的requestAnimationFrame（）API实现动画效果\n为什么要使用requestAnimationFrame：")]),t._v(" "),e("p",[t._v("setTimeOut和setInterval出现的问题：")]),t._v(" "),e("p",[t._v("首先，我们得知道动画的渲染是一帧一帧的进行的，每一帧就是动画的一个静止状态，每一帧连起来就成为了一个动画。因此每一帧的时间间隔要足够短动画才显得平滑流畅，但每一帧又不能间隔得太短，因为浏览器每一秒的渲染能是有限的，而且屏幕的刷新能力也是有限的，大多数的显示器刷新频率是60H也就是每秒60帧，因此浏览器的重绘频率不会超过显示器的刷新频率。")]),t._v(" "),e("p",[t._v("所以每一帧大约17秒就是最佳的重绘间隔。那使用就直接使用setTimeOut或者setInterval，间隔设置为17不就得了？但这样还是不行的。")]),t._v(" "),e("p",[t._v("因浏览器的毫秒不精确：浏览器的计时器精度并非精确到毫秒级的，IE8的精确度是15ms多一点，而IE9等大多数的浏览器精确度都在4ms差不多。所以难以保证动画最佳的时间间隔。")]),t._v(" "),e("p",[t._v("不同的浏览器渲染能力不同，因此并非每一帧17ms就是最佳渲染间隔。")]),t._v(" "),e("p",[t._v("在不需要动画的地方，如后台标签页，动画任然在运行，消耗CPU的性能。")]),t._v(" "),e("h3",{attrs:{id:"h5的requestanimationframe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#h5的requestanimationframe","aria-hidden":"true"}},[t._v("#")]),t._v(" h5的requestAnimationFrame")]),t._v(" "),e("p",[t._v("requestAnimationFrame会把每一帧中所有的DOM操作集中起来，在一次重绘或者重排中就完成。")]),t._v(" "),e("p",[t._v("requestAnimationFrame重绘或者重排的时间间隔是系统的时间间隔，因为不同的浏览器的系统时间间隔不同，requestAnimationFrame将会保持最佳的绘制间隔，即不会因为绘制间隔时间过短而造成浏览器渲染能力跟不上，也不会因为绘制间隔时间过长，而造成动画卡顿。这样就能在不同的浏览器中实现最佳的绘制效果。\n在隐藏或者不可见的元素中，requestAnimationFrame将不会进行重排或者重绘，而运行在页面没有激活的情况下，如requestAnimationFrame运行在后台标签页中，动画将会暂停，有效的节省了CPU的开销。")])])}),[],!1,null,null,null);a.default=s.exports}}]);