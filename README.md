# only

## 技术栈

- 打包相关：
  - [webpack^4.43.0](https://webpack.js.org/)
  - [yarn](https://yarnpkg.com/lang/zh-Hans/)
- 应用：
  - [typescript^3.2.4](https://www.typescriptlang.org/)
  - [react^16.13.x](https://reactjs.org/)
  - hooks
  - [react-redux^7.2.0](https://react-redux.js.org/)
  - [@reduxjs/toolkit^1.4.0](https://redux-toolkit.js.org/)
- UI
  - [antd^4.x](https://ant.design/)
  - [styled-components](https://styled-components.com/)
- 规范约束
  - [husky](https://github.com/typicode/husky)
  - [cz-conventional-changelog](https://github.com/typicode/husky)
  - prettier
  - eslint

## 开发及发布

### 快速开始

```bash
yarn

# dev mode
yarn start

# prod
yarn build
```

## 目录结构
```
├── config-overrides.js  //webpack overrides
├── node_modules
├── package.json
├── public             // 公共资源配置
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── README.md
├── src
│   ├── api  // api 相关
│   │   ├── layout.api.ts
│   │   ├── permission
│   │   │   └── role.api.ts
│   │   ├── request.ts
│   │   └── user.api.ts
│   ├── App.tsx 
│   ├── assets  
│   ├── components //公共组件
│   │   ├── button
│   │   │   └── Button.tsx
│   │   ├── customIcon
│   │   │   └── index.tsx
│   │   └── loading
│   │       └── FallbackLoading.tsx
│   ├── config  // 项目配置
│   │   └── menus.ts
│   ├── hooks // 全局 hooks
│   │   ├── index.ts
│   │   └── usePrevious.ts
│   ├── index.tsx
│   ├── interface // 全局 interface
│   │   ├── index.ts
│   │   ├── layout
│   │   │   ├── menu.interface.ts
│   │   │   ├── notice.interface.ts
│   │   │   └── tagsView.interface.ts
│   │   ├── permission
│   │   │   └── role.interface.ts
│   │   └── user
│   │       └── login.ts
│   ├── mock // 数据 mock
│   ├── pages // 视图组件
│   │   ├── 404.tsx
│   │   ├── account
│   │   │   └── index.tsx
│   │   ├── dashboard
│   │   │   └── index.tsx
│   │   ├── doucumentation
│   │   │   └── index.tsx
│   │   ├── layout
│   │   │   ├── HeaderContainer.tsx
│   │   │   ├── HeaderNotice.tsx
│   │   │   ├── index.tsx
│   │   │   ├── MenuContainer.tsx
│   │   │   ├── style.ts
│   │   │   └── tagView
│   │   │       ├── index.tsx
│   │   │       ├── TagsViewAction.tsx
│   │   │       └── tagViewSlice.ts // 页面组件内 rtk slice
│   │   ├── login
│   │   └── permission
│   │       └── config
│   │           ├── componnets // 页面 组件
│   │           │   ├── index.ts
│   │           │   ├── RoleAuthorizeDialog.tsx
│   │           │   ├── RoleCreateDialog.tsx
│   │           │   ├── RoleModifyDialog.tsx
│   │           │   ├── RoleSearch.tsx
│   │           │   └── RoleTable.tsx
│   │           ├── hooks // 页面 hooks
│   │           │   └── useGetRoleForm.tsx
│   │           ├── index.tsx
│   │           ├── style.ts
│   │           └── type.tsx // 页面 公共类型
│   ├── react-app-env.d.ts
│   ├── routes //项目路由
│   │   ├── index.tsx 
│   │   ├── PravateRoute.tsx
│   │   └── WrapperRoute.tsx
│   ├── serviceWorker.ts
│   ├── setupProxy.js
│   ├── store // 全局 store
│   │   ├── globalSlice.ts
│   │   ├── index.ts
│   │   ├── rootReducer.ts
│   │   └── userSlice.ts
│   ├── style.ts  // 项目样式
│   └── utils  // 项目 utils
│       └── index.ts
├── tsconfig.json
├── tsconfig.paths.json
└── yarn.lock
```