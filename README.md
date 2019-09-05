1、全局安装 cnpm install create-react-app create-react-app demo
2、安装antd cnpm install antd --save-dev
3、修改默认create-react-app默认配置和 babel-plugin-import 按需加载antd组件必须的插件
     cnpm install react-app-rewired customize-cra babel-plugin-import
    a、修改package.json文件 scripts
    b、在根目录创建文件config-overrides.js
4、安装路由 cnpm install react-router react-router-dom
   设置路由文件并设置相关的路由配置 初始
    <Link to="/">App</Link> |
    <Link to="/about">about</Link>
    <Route path="/" component={Hello} exact />
    <Route path="/about" component={Header}/>

5、安装express、body-parse cnpm install express body-parser
6、配置server.js
7、安装xios 这里需要在packjson里配置一下proxy
8、安装redux、react-redux、redux-logger、redux-thunk
https://juejin.im/post/5ae3317e6fb9a07ac021fba4#heading-3

9、安装less npm install less less-loader
10、修改overrides.js文件，添加addLessLoader
11、测试性能/?repily

生命周期渲染 父子组件渲染 ：
   父组件的componentWillMount =====父组件的render============ 子组件的componentWillMount======== 子组件的render 函数 ======孙子组件的componentWillMount
    === 孙子组件的render======= 孙子组件的componentDidMount  =========子组件的componentDidMount
