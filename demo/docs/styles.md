---
title: 样式
---

<b-back-top></b-back-top>

# 定制样式

## 默认样式

组件提供一个默认样式，你如果你喜欢可以直接引入 `import 'bin-grid-layout/dist/styles/default.css'`

<preview path="./demo/00-style.vue"></preview>

## 修改占位符颜色

<preview path="./demo/01-style.vue"></preview>

## 综合示例

<preview path="./demo/02-style.vue"></preview>

## 其他元素样式

如果仍不满足需求，可以参考全部样式，按需修改。

```css
.bin-grid-item {
  transition: all 200ms ease;
  transition-property: left, top, right;
  &.no-touch {
    touch-action: none;
  }
  &.cssTransforms {
    transition-property: transform;
    left: 0;
    right: auto;
    &.render-rtl {
      left: auto;
      right: 0;
    }
  }
  &.resizing {
    opacity: 0.6;
    z-index: 3;
  }
  &.vue-draggable-dragging {
    transition: none;
    z-index: 3;
  }
  &.vue-grid-placeholder {
    background: red;
    opacity: 0.2;
    transition-duration: 100ms;
    z-index: 2;
    user-select: none;
  }
  > .vue-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    /* background: none; */
    background-position: bottom right;
    padding: 0 3px 3px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: se-resize;
  }
  > .vue-rtl-resizable-handle {
    bottom: 0;
    left: 0;
    /* background: none; */
    background-position: bottom left;
    padding-left: 3px;
    background-repeat: no-repeat;
    background-origin: content-box;
    cursor: sw-resize;
    right: auto;
  }
  &.disable-userselect {
    user-select: none;
  }
}
```
