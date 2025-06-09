---
title: 安装
---

<b-back-top></b-back-top>

# 安装

注意，bin-grid-layout 仅支持 Vue3。本组件库主要是基于[vue-grid-layout](https://jbaysolutions.github.io/vue-grid-layout/zh/)，主要是为了兼容vue3版本

## 最新版本

[![NPM version](https://img.shields.io/npm/v/bin-grid-layout.svg)](https://www.npmjs.com/package/bin-grid-layout)

## npm

推荐使用 pnpm 进行安装，它能更好地和打包工具配合使用。而且可以更好的和 typescript 配合使用。并且支持按需引入

```sh
npm i bin-grid-layout
# or
yarn add bin-grid-layout
# or
pnpm add bin-grid-layout
```

## 在 SFC 中使用

如果你想使用单文件组件风格（SFC - Single File Component），可以选择直接引入或全局安装在 Vue App 中。

## 全量引入 （推荐）

由于本库仅只有两个组件且全必须使用，所以也可以直接进行全局引入，这样使用的时候就不必手动导入

```javascript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import BinGridLayout from 'bin-grid-layout'

const app = createApp(App)
app.use(BinGridLayout)
app.mount('#app')
```

## 直接引入 （推荐）

你可以直接导入组件并进行使用这种情况下，只有导入的组件才会被打包。

如果你想知道如何按需引入主题和语言包，请参考 [按需引入](/docs/import-on-demand.html)。

```vue
<template>
  <BGridLayout></BGridLayout>
</template>

<script lang="ts" setup>
import { BGridLayout, BGridItem } from 'bin-grid-layout'
</script>
```
