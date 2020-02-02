(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{288:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("继 "),s("code",[t._v("0.3-stable")]),t._v(" （以下简称 v0.3）后，这里开始将解读 "),s("code",[t._v("16.8.6")]),t._v(" （以下简称 v16.8.6）版本，此版本上标签于 2019 年 3 月 28 日。\n那么接下来，我将从几个方面来解读这个版本的源码。（目录含有 v0.3 ）")])]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://zongzi531.com/2019/04/01/LSC-React-01/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 源码学习（一）：HTML 元素渲染"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zongzi531.com/2019/04/02/LSC-React-02/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 源码学习（二）：HTML 子元素渲染"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zongzi531.com/2019/04/03/LSC-React-03/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 源码学习（三）：CSS 样式及 DOM 属性"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zongzi531.com/2019/04/04/LSC-React-04/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 源码学习（四）：事务机制"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zongzi531.com/2019/04/05/LSC-React-05/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 源码学习（五）：事件机制"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zongzi531.com/2019/04/06/LSC-React-06/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 源码学习（六）：组件渲染"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zongzi531.com/2019/04/07/LSC-React-07/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 源码学习（七）：生命周期"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zongzi531.com/2019/04/08/LSC-React-08/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 源码学习（八）：组件更新"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zongzi531.com/2019/12/18/LSC-React-09/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 源码学习（九）：“脱胎换骨”"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zongzi531.com/2019/12/19/LSC-React-10/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 源码学习（十）：Fiber"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zongzi531.com/2019/12/20/LSC-React-11/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 源码学习（十一）：Scheduling"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zongzi531.com/2019/12/21/LSC-React-12/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 源码学习（十二）：Reconciliation"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"什么是-fiber-？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-fiber-？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 Fiber ？")]),t._v(" "),s("p",[t._v("Fiber 是 React 16 中新的协调引擎。他的主要目的是使 "),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom",target:"_blank",rel:"noopener noreferrer"}},[t._v("Virtual DOM"),s("OutboundLink")],1),t._v(" 可以进行增量式渲染。"),s("strong",[s("a",{attrs:{href:"https://github.com/acdlite/react-fiber-architecture",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解更多"),s("OutboundLink")],1)])]),t._v(" "),s("blockquote",[s("p",[t._v("建议阅读"),s("strong",[t._v("了解更多")]),t._v("来理解 Fiber ，或者阅读译文"),s("a",{attrs:{href:"https://juejin.im/post/5ddb722cf265da7e264736a0",target:"_blank",rel:"noopener noreferrer"}},[t._v("《【翻译】React Fiber 架构》"),s("OutboundLink")],1),t._v("了解。")])]),t._v(" "),s("p",[t._v("从数据结构来理解 Fiber ，他其实是一个链表数据结构，分别通过 "),s("code",[t._v("return")]),t._v(" ， "),s("code",[t._v("child")]),t._v(" ， "),s("code",[t._v("sibling")]),t._v(" 连接着另一个 Fiber 。同样的也可以通过 "),s("code",[t._v("nextEffect")]),t._v(" 通往下一个副作用 Fiber ，或是通过 "),s("code",[t._v("firstEffect")]),t._v(" 或 "),s("code",[t._v("lastEffect")]),t._v(" 跳转到第一个或最后一个副作用 Fiber 。接下来，让我们看到源码：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" type Fiber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fiber 标签，用于判断 Fiber 类型")]),t._v("\n  tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" WorkTag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 唯一标识")]),t._v("\n  key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 元素类型，协调时使用")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检索源码可以发现 elementType 有存在与 type 、 String 类型、 ReactSymbols 进行比较")]),t._v("\n  elementType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类型")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本地状态")]),t._v("\n  stateNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父级 Fiber")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Fiber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单链列表树结构。")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子 Fiber")]),t._v("\n  child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Fiber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 兄弟 Fiber")]),t._v("\n  sibling"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Fiber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前索引")]),t._v("\n  index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ref 引用支持 callback 函数或者 React.createRef")]),t._v("\n  ref"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mixed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("_stringRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" RefObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新时等待的 props")]),t._v("\n  pendingProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建时使用的 props")]),t._v("\n  memoizedProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新队列，即协调时使用")]),t._v("\n  updateQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UpdateQueue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("any"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建时使用的 state")]),t._v("\n  memoizedState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上下文以来链表结构")]),t._v("\n  contextDependencies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ContextDependencyList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 位域，描述有关 Fiber 及其子树的属性。例如， ConcurrentMode 标志指示子树是否应默认为异步。")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 Fiber 时，他将继承其父级的模式。可以在创建时设置其他标志，但是此后，该值应在 Fiber 的整个生命周期中保持不变，尤其是在创建其子 Fiber 之前。")]),t._v("\n  mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TypeOfMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 副作用标签")]),t._v("\n  effectTag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SideEffectTag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单链表列出了具有副作用的通往下一个 Fiber 的快速路径。")]),t._v("\n  nextEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Fiber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该子树中具有副作用的第一个和最后一个 Fiber 。 当我们重用此 Fiber 中完成的工作时，这使我们可以重用链表的一部分。")]),t._v("\n  firstEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Fiber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  lastEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Fiber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前 Fiber 的到期时间，用于调度时排序使用，将到期时间越早的排在越前面进行执行。")]),t._v("\n  expirationTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ExpirationTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子的到期时间，用于快速确定子树是否没有挂起的更改。")]),t._v("\n  childExpirationTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ExpirationTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WorkInProgress 存放处（双缓存技术）")]),t._v("\n  alternate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Fiber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br")])]),s("p",[t._v("源码中依然会有一些难以理解的字段内容，但是没关系，相信在看完调度和调和，你会对 Fiber 有更深刻的理解，因为他贯穿在整个调和中。")]),t._v(" "),s("p",[t._v("当然啦，也可以在 "),s("a",{attrs:{href:"https://github.com/facebook/react/blob/16.8.6/packages/react-reconciler/src/ReactFiber.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReactFiber.js"),s("OutboundLink")],1),t._v(" 中看到有关 Fiber 创建函数的内容，有兴趣可以点击查看。")]),t._v(" "),s("p",[t._v("同样的，在调和中会认识到一个新的数据结构 "),s("code",[t._v("FiberRoot")]),t._v(" ，他和调和密切相关，也可以先通过 "),s("a",{attrs:{href:"https://github.com/facebook/react/blob/16.8.6/packages/react-reconciler/src/ReactFiberRoot.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReactFiberRoot.js"),s("OutboundLink")],1),t._v(" 进行了解。")]),t._v(" "),s("p",[t._v("那么后面我们将介绍以 Fiber 为最小单位的时间切片（ Time Slicing ）概念的一种实现："),s("strong",[t._v("调度")]),t._v("。")])])}),[],!1,null,null,null);n.default=e.exports}}]);