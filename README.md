# 抄站

从零搭建 react 抄站平台；

# 何为抄站

平台后台接口固定万年不变，前端逻辑按道理也是万年不变，唯一变化的是 UI 界面，我把这种功能开发的网站叫抄站；

# 目录结构

```
## config 开发、打包脚本

## dist 打包结果文件

## public 静态资源文件

## src 开发源文件

## src/assets 整个项目需要公用的静态文件

## src/components 整个项目需要公用的组件

## src/core 整个项目公用的 hook 逻辑

## src/mobileComponents 移动端开发所用的组件

## src/projects 项目文件集合

default                 // 默认项目
|---mobile              // 默认项目中的移动端
    |---router          // 路由
        |---routes.ts   // 路由集合
        |---index.tsx   // 路由组件
    |---App.tsx         // 入口组件
    |---index.scss      // 项目公用项目
    |---main.tsx        // 入口
|---web                 // 默认项目中的web端
    |---router          // 路由
        |---routes.ts   // 路由集合
        |---index.tsx   // 路由组件
    |---App.tsx         // 入口组件
    |---index.scss      // 项目公用项目
    |---main.tsx        // 入口

## service 封装的请求

|---fetch.ts // 封装的公用请求
|---index.ts // 向外暴露的
|---api // API 集合
|---index.ts
|---topic.api.ts // 主题相关 API 集合
|---interface // 接口集合
|---index.ts
|---topic.interface.ts // 主题相关接口集合
|---module // 模块集合
|---index.ts
|---topic.service.ts // 模块接口集合

## template 集合

└─default // 默认站点源码
├─mobile // 移动端
│ ├─about // 关于页面
│ ├─components // 公用组件
│ ├─home // 首页
│ ├─layout // 框架
│ ├─login // 登录
│ ├─my // 我的
│ ├─notFound // 404
│ └─topic // 详情
└─web // web 端
│ ├─about // 关于页面
│ ├─components // 公用组件
│ ├─home // 首页
│ ├─layout // 框架
│ ├─login // 登录
│ ├─my // 我的
│ ├─notFound // 404
│ └─topic // 详情


## types 全局类型文件声明

## utils 公用工具

browser.util.ts // 浏览器
dom.util.ts // DOM
index.ts
number.util.ts // 数据
other.util.ts // 其他
storage.util.ts // 缓存
string.util.ts // 字符
time.util.ts // 时间
type.util.ts // 判断
url.util.ts // url

```

# 在线项目

web 端 [https://myfirebug.github.io/cnode/default/web/index.html](https://myfirebug.github.io/cnode/default/web/index.html)

mobile 端 [https://myfirebug.github.io/cnode/default/mobile/index.html](https://myfirebug.github.io/cnode/default/mobile/index.html)

# git 提交格式 --> [类型][区域位置(可选)]: [描述]

feat(user): 新增用户功能

feat: 新功能、新特性

fix: 修改 bug

docs: 文档修改

style: 代码格式修改

refactor: 既不修复错误也不添加功能的代码更改

perf: 提高性能的代码更改

test: 测试用例新增、修改

chore: 对构建过程或辅助工具和库（例如文档生成）的更改
