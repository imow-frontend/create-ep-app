# create-ep-app
> 创建一个[Nuxt.js](https://nuxtjs.org/)项目模板，模板链接[create-ep-app-template](https://github.com/imow-frontend/create-ep-app-template)

## Usage
首先要确保已经安装了[npx](https://www.npmjs.com/package/npx)（从[npm](https://www.npmjs.com/get-npm)5.2.0起，会自动安装）
```bash
npx create-ep-app <my-project>
```

## Features :tada:
1. `elementUI` 按需加载
2. 自定义主题为中力红`#d7000f`
3. 封装 `axios`，方便对接后台与`mock`数据
4. 初始化 `vuex` ，集成并跑通login逻辑
5. 增加`pm2`配置，方便部署