
<p align="center">
  <img width="320" src="https://img.yzcdn.cn/vant/logo.png">
</p>
<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
</p>


## 简介

> 本模板基于`vant`组件，非集成方案, 只是做底层的一套基本配置,包括以下内容

```
1. 路由
2. axios 封装
3. 移动端适配
4. px 自动转 rem

```

## 目录

```bash
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── api                   接口
│   ├── assets                静态资源
│       ├── styles            css
│   ├── components            组件
│   ├── router                路由
│   ├── store                 vx
│   ├── utils                 公共方法
│   ├── views                 视图单页
│   ├── App.vue               根组件
│   └── main.js               入口
├── .env.development          开发接口
├── .env.production           生产接口
├── babel.config.js
├── package.json
├── postcss.config.js
├── README.md
└── vue.config.js
```

## 开发

```bash
# 克隆项目
git clone git@github.com:hellobili/vue-vant-mobile-template.git

# 进入项目目录
cd vue-vant-mobile-template

# 安装依赖
npm i

# 启动
npm run serve
```