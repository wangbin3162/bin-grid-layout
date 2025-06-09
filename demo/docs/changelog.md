---
title: 变更日志
---

<b-back-top></b-back-top>

# CHANGELOG

<div class="change-log">
  <h2 id="0.1.0" class="version">0.1.0</h2>
  <div class="date">2025-06-10</div>
  <div class="type">Feats</div>
  <p class="log-item">初始化工程</p>
  <p class="log-item">初始化文档</p>
</div>

<style scoped>
  .vp-doc {
    .change-log {
      margin-top: 24px;
      border-bottom: 1px solid #eee;
    }
    .version {
      display: inline-block;
      vertical-align: middle;
      padding: 0 16px;
      font-size: 22px;
      font-weight: 500;
      border: 1px solid #1890ff;
      border-radius: 5px;
      border-top: none;
      border-bottom: none;
    }
    .date {
      display: inline-block;
      vertical-align: middle;
      margin: 0 15px;
      background: #f2f4f5;
      padding: 0.1em 0.4em;
      border-radius: 3px;
      font-size: 0.9em;
      border: 1px solid #eee;
    }
    .type {
      margin-top: 16px;
      font-weight: 500;
      font-size: 18px;
    }
    .log-item {
      position: relative;
      padding-left: 30px;
      &::before {
        content: '';
        position: absolute;
        left: 14px;
        top: 8px;
        width: 0;
        height: 0;
        transform: rotateZ(90deg);
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 6px solid #5e6d82;
      }
      > i {
        margin-right: 6px;
      }
    }
  }
</style>
