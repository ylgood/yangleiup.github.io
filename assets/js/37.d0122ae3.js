(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{308:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"redux与mobx区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux与mobx区别","aria-hidden":"true"}},[t._v("#")]),t._v(" redux与mobx区别")]),t._v(" "),a("p",[t._v("他们都是用来管理应用的state"),a("br"),t._v("\n不使用状态管理在如下场景中比较麻烦：")]),t._v(" "),a("ul",[a("li",[t._v("某一个状态需要在多个组件间共享（访问，更新）；")]),t._v(" "),a("li",[t._v("某组件内交互需要触发其他组件的状态更新；")])]),t._v(" "),a("h2",{attrs:{id:"区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),a("h3",{attrs:{id:"函数式和面向对象："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式和面向对象：","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数式和面向对象：")]),t._v(" "),a("p",[t._v("Redux更多的是遵循函数式编程（Functional Programming, FP）思想，而Mobx则更多从面向对象角度考虑问题。")]),t._v(" "),a("p",[t._v("Redux提倡编写函数式代码，如reducer就是一个纯函数（pure function），如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("复制代码纯函数，接受输入，然后输出结果，除此之外不会有任何影响，也包括不会影响接收的参数；对于相同的输入总是输出相同的结果。")]),t._v(" "),a("p",[t._v("Mobx设计更多偏向于面向对象编程（OOP）和响应式编程（Reactive Programming），通常将状态包装成可观察对象，于是我们就可以使用可观察对象的所有能力，一旦状态对象变更，就能自动获得更新。")]),t._v(" "),a("h3",{attrs:{id:"单一store和多store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单一store和多store","aria-hidden":"true"}},[t._v("#")]),t._v(" 单一store和多store")]),t._v(" "),a("p",[t._v("store是应用管理数据的地方，在Redux应用中，我们总是将所有共享的应用数据集中在一个大的store中，")]),t._v(" "),a("p",[t._v("而Mobx则通常按模块将应用状态划分，在多个独立的store中管理。")]),t._v(" "),a("h3",{attrs:{id:"javascript对象和可观察对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript对象和可观察对象","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript对象和可观察对象")]),t._v(" "),a("p",[t._v("Redux默认以JavaScript原生对象形式存储数据，而Mobx使用可观察对象：")]),t._v(" "),a("p",[t._v("Redux需要手动追踪所有状态对象的变更；")]),t._v(" "),a("p",[t._v("Mobx中可以监听可观察对象，当其变更时将自动触发监听；")]),t._v(" "),a("h3",{attrs:{id:"不可变（immutable）和可变（mutable）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可变（immutable）和可变（mutable）","aria-hidden":"true"}},[t._v("#")]),t._v(" 不可变（Immutable）和可变（Mutable）")]),t._v(" "),a("p",[t._v("Redux状态对象通常是不可变的（Immutable）：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REQUEST_POST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("post\n  \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    retur nstate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("复制代码我们不能直接操作状态对象，而总是在原来状态对象基础上返回一个新的状态对象，这样就能很方便的返回应用上一状态；"),a("br"),t._v("\n而Mobx中可以直接使用新值更新状态对象。")]),t._v(" "),a("h3",{attrs:{id:"mobx-react和react-redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobx-react和react-redux","aria-hidden":"true"}},[t._v("#")]),t._v(" mobx-react和react-redux")]),t._v(" "),a("p",[t._v("使用Redux和React应用连接时，需要使用react-redux提供的Provider和connect：")]),t._v(" "),a("p",[t._v("Provider：负责将Store注入React应用；"),a("br"),t._v("\nconnect：负责将store state注入容器组件，并选择特定状态作为容器组件props传递；")]),t._v(" "),a("p",[t._v("对于Mobx而言，同样需要两个步骤：")]),t._v(" "),a("p",[t._v("Provider：使用mobx-react提供的Provider将所有stores注入应用；"),a("br"),t._v("\n使用inject将特定store注入某组件，store可以传递状态或action；然后使用observer保证组件能响应store中的可观察对象（observable）变更，即store更新，组件视图响应式更新。")]),t._v(" "),a("h2",{attrs:{id:"选择mobx的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择mobx的原因","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择Mobx的原因")]),t._v(" "),a("p",[t._v("学习成本少：Mobx基础知识很简单，学习了半小时官方文档和示例代码就搭建了新项目实例；"),a("br"),t._v("\n而Redux确较繁琐，流程较多，需要配置，创建store，编写reducer，action，如果涉及异步任务，还需要引入redux-thunk或redux-saga编写额外代码，Mobx流程相比就简单很多，并且不需要额外异步处理库；")]),t._v(" "),a("p",[t._v("面向对象编程：Mobx支持面向对象编程，我们可以使用@observable and @observer，以面向对象编程方式使得JavaScript对象具有响应式能力；"),a("br"),t._v("\n而Redux最推荐遵循函数式编程，当然Mobx也支持函数式编程；")]),t._v(" "),a("p",[t._v("模版代码少：相对于Redux的各种模版代码，如，actionCreater，reducer，saga／thunk等，Mobx则不需要编写这类模板代码；")]),t._v(" "),a("p",[t._v("##不选择Mobx的可能原因")]),t._v(" "),a("p",[t._v("过于自由：Mobx提供的约定及模版代码很少，这导致开发代码编写很自由，如果不做一些约定，比较容易导致团队代码风格不统一，所以当团队成员较多时，确实需要添加一些约定；")]),t._v(" "),a("p",[t._v("可拓展，可维护性：也许你会担心Mobx能不能适应后期项目发展壮大呢？确实Mobx更适合用在中小型项目中，但这并不表示其不能支撑大型项目，关键在于大型项目通常需要特别注意可拓展性，可维护性，相比而言，规范的Redux更有优势，而Mobx更自由，需要我们自己制定一些规则来确保项目后期拓展，维护难易程度；")]),t._v(" "),a("p",[t._v("Mobx 的代码要精简得多。通过 OOP 风格和良好的开发实践，你可以快速的构建各种应用。\n最大的弊病是很容易编写糟糕的不可维护的代码。\n社区发展方面 Mobx 在国内的发展还是比较缓慢的，遇到的问题可能社区都没有遇到过。")]),t._v(" "),a("p",[t._v("而 Redux 更受欢迎一些，而且特别适合构建大型复杂应用。这是一个规定严格的框架，其规则确保开发人员可以编写易于测试和可维护的代码。但是，的确不适合开发小项目。")]),t._v(" "),a("h2",{attrs:{id:"redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux","aria-hidden":"true"}},[t._v("#")]),t._v(" Redux")]),t._v(" "),a("h3",{attrs:{id:"redux三大核心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux三大核心","aria-hidden":"true"}},[t._v("#")]),t._v(" Redux三大核心")]),t._v(" "),a("p",[t._v("Redux，最为核心的概念就是 action 、reducer、store 以及 state")]),t._v(" "),a("ol",[a("li",[t._v("action")]),t._v(" "),a("li",[t._v("reducer:指明如何更新 state")]),t._v(" "),a("li",[t._v("Store：把 action、Reducer 联系到一起的对象，负责维持、获取和更新state")])]),t._v(" "),a("h3",{attrs:{id:"数据流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据流","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据流")]),t._v(" "),a("p",[t._v("严格的单向数据流是 Redux 架构的设计核心。")]),t._v(" "),a("p",[t._v("使用过 Redux 的人会有这些痛点：难懂的 API、复杂的逻辑、过多的代码侵入。"),a("br"),t._v("\nRedux 采用单一根节点、函数式编程、动作分离管理（似乎让项目很容易管理），这些都是 Redux 过于复杂的原因")]),t._v(" "),a("h3",{attrs:{id:"异步流-后续重点学习下中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步流-后续重点学习下中间件","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("异步流")]),t._v("(后续重点学习下中间件)")]),t._v(" "),a("p",[t._v("由于Redux所有对store状态的变更，都应该通过action触发，异步任务（通常都是业务或获取数据任务）也不例外，而为了不将业务或数据相关的任务混入React组件中，就需要使用其他框架配合管理异步任务流程，如redux-thunk，redux-saga等；\n、")]),t._v(" "),a("h2",{attrs:{id:"mobx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobx","aria-hidden":"true"}},[t._v("#")]),t._v(" Mobx")]),t._v(" "),a("p",[t._v("MobX，它通过透明的函数响应式编程(transparently applying functional reactive programming - TFRP)使得状态管理变得简单和可扩展。")]),t._v(" "),a("p",[t._v("比起Redux，Mobx基于观察者模式，采用多节点管理数据，是一个很轻量、入手简单、代码耦合小的数据框架。")]),t._v(" "),a("h3",{attrs:{id:"数据流-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据流-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据流")]),t._v(" "),a("p",[t._v("MobX 为单向数据流，也就是动作改变状态，而状态的改变会更新所有受影响的视图。")]),t._v(" "),a("p",[t._v("它由几个部分组成：Actions、State、Computed Values、Reactions。使用 MobX 将一个应用变成响应式的可归纳为以下步骤:")]),t._v(" "),a("ul",[a("li",[t._v("通过事件驱动（UI 事件、网络请求…）触发 Actions")]),t._v(" "),a("li",[t._v("在 Actions 中修改了 State 中的值，这里的 State 既应用中的 store 树（存储数据）")]),t._v(" "),a("li",[t._v("然后根据新的 State 中的数据计算出所需要的计算属性（computed values）值")]),t._v(" "),a("li",[t._v("响应（react）到 UI 视图层")])]),t._v(" "),a("h3",{attrs:{id:"observable-state（可被观察的状态）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observable-state（可被观察的状态）","aria-hidden":"true"}},[t._v("#")]),t._v(" Observable state（可被观察的状态）")]),t._v(" "),a("p",[t._v("MobX 为现有的数据结构(如对象，数组和类实例)添加了可观察的功能。 通过使用 @observable 装饰器来给你的类属性添加注解就可以简单地完成这一切。这样改属性就变成了“被观察者”。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Store")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @observable a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello Word!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"observer（观察者）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observer（观察者）","aria-hidden":"true"}},[t._v("#")]),t._v(" Observer（观察者）")]),t._v(" "),a("p",[t._v("observer 函数装饰器可以用来将 React 组件转变成响应式组件。 它用 mobx.autorun 包装了组件的 render 函数以确保任何组件渲染中使用的数据变化时都可以强制刷新组件。 observer 是由单独的 mobx-react 包提供的。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@observer\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Index")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("这样 Index 组件就变成了一个响应式的组件（智能组件），当“被观察者”改变时，该组件就会自动更新。")]),t._v(" "),a("h3",{attrs:{id:"componentwillreact-生命周期钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentwillreact-生命周期钩子","aria-hidden":"true"}},[t._v("#")]),t._v(" componentWillReact (生命周期钩子)")]),t._v(" "),a("p",[t._v("React 组件通常在新的堆栈上渲染，这使得通常很难弄清楚是什么导致组件的重新渲染。 当使用 mobx-react 时可以定义一个新的生命周期钩子函数 componentWillReact。当组件因为它观察的数据发生了改变，它会安排重新渲染，这个时候 componentWillReact 会被触发。这使得它很容易追溯渲染并找到导致渲染的操作(action)。")]),t._v(" "),a("h3",{attrs:{id:"inject（注入）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inject（注入）","aria-hidden":"true"}},[t._v("#")]),t._v(" inject（注入）")]),t._v(" "),a("p",[t._v("inject 函数装饰器可以将 Store 数据注入到组件当中。inject 是由单独的 mobx-react 包提供的。")]),t._v(" "),a("p",[t._v('@inject("store")')]),t._v(" "),a("h3",{attrs:{id:"computed-values-计算值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-values-计算值","aria-hidden":"true"}},[t._v("#")]),t._v(" Computed values(计算值)")]),t._v(" "),a("p",[t._v("使用 MobX，可以定义在相关数据发生变化时自动更新的值。 通过 @computed 装饰器调用 的getter / setter 函数来进行使用。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ItemsStore")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @observable items "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  @computed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("total")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("当添加了一个新的 items 时，MobX 会确保 total 自动更新。")]),t._v(" "),a("h3",{attrs:{id:"action（动作）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action（动作）","aria-hidden":"true"}},[t._v("#")]),t._v(" Action（动作）")]),t._v(" "),a("p",[t._v("action 是任一一段可以改变状态的代码。具体实现代码如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HomeStore")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @observable num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  @action "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("plus")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  @action "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("minus")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("如果是在严格模式:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useStrict "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mobx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useStrict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("那么 MobX 会强制只有在动作之中才可以修改状态。对于任何不使用动作的状态修改，MobX 都会抛出异常。")]),t._v(" "),a("h3",{attrs:{id:"异步-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步-action","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步 Action")]),t._v(" "),a("p",[t._v("action 包装/装饰器只会影响当前运行的函数，而不会影响当前函数调度(但不是调用)的函数！ 这意味着如果你有一个 setTimeout、promise 的 then 或 async 语句，并且在回调函数中某些状态改变了，这些回调函数也应该包装在 action 中。可以使用 action 关键字来包装 promises 回调函数")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@action\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fetchData")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fetchRes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fetchSuccess'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fetchError'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// err")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("异步 action 实现的方式还有多种，这里只列举了 action 关键子的模式")])])}),[],!1,null,null,null);s.default=e.exports}}]);