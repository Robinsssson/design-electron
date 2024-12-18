``` python
my-electron-app/
├── src/                # 源代码目录
│   ├── main/           # 主进程相关代码
│   │   ├── main.js     # 主进程入口文件
│   │   ├── preload.js  # 预加载脚本
│   │   └── utils/      # 主进程工具函数或模块
│   ├── renderer/       # 渲染进程相关代码
│   │   ├── index.html  # 渲染进程入口 HTML
│   │   ├── renderer.js # 渲染进程入口文件
│   │   ├── styles/     # CSS 或 SCSS 文件
│   │   └── components/ # 可复用的前端组件
│   └── shared/         # 主进程和渲染进程共享的代码（如常量、工具等）
├── assets/             # 静态资源（图片、图标等）
├── dist/               # 打包后输出的文件（由构建工具生成）
├── scripts/            # 构建、打包、测试相关脚本
├── node_modules/       # Node.js 依赖
├── .env                # 环境变量配置文件
├── .gitignore          # Git 忽略文件配置
├── package.json        # 项目元数据和依赖
├── package-lock.json   # 依赖锁定文件
├── webpack.config.js   # Webpack 配置（如果使用 Webpack）
├── electron-builder.yml# Electron 打包配置（如果使用 electron-builder）
└── README.md           # 项目说明文件
```