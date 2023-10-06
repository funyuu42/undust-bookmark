
# 随机展示不常浏览书签 New Tab扩展

## 简介

这个浏览器扩展会在用户打开新的标签页时,随机展示用户近7天内没有浏览过的书签。它可以帮助用户重新发现和关注那些不常用的书签网站。

## 功能

- 在新标签页随机展示用户近7天没有浏览过的书签

- 支持主流浏览器

## 使用

1. 安装浏览器扩展
2. 打开新的标签页,会随机看到不常浏览的书签


## 技术实现

这个扩展使用 Vite + Vue3 + TailwindCSS 编写。

它通过以下方式实现主要功能:

- 使用浏览器书签 API 读取用户书签并跟踪访问记录
- Vue组件获取统计数据并随机展示书签
- Tailwind CSS进行样式设计

## 开发者安装

1. 下载代码
2. 运行`npm install`安装依赖 
3. 运行`npm run dev`在浏览器中调试
4. 运行`npm run build`构建生产版本

这个仓库也可以作为使用 Vue 开发 Chrome 插件的脚手架。

欢迎提出建议和报告bug!


# Random Undiscovered Bookmarks New Tab Extension

## Introduction

This browser extension displays random bookmarks that the user hasn't visited in the past 7 days when opening a new tab. It helps users rediscover and re-engage with their neglected bookmarks.

## Features

- Shows random undiscovered bookmarks on new tabs

- Supports major browsers

## Usage

1. Install browser extension
2. See random undiscovered bookmarks when opening new tabs

## Implementation

This extension is built using Vite + Vue3 + TailwindCSS. 

It works by:

- Using browser bookmarks API to access bookmarks and track visits
- Vue components to retrieve stats and display random bookmarks
- Tailwind CSS for styling

## Installation for Developers

1. Download code
2. Run `npm install` to install dependencies
3. Run `npm run dev` to debug in the browser
4. Run `npm run build` to build production version

This repo can also serve as a scaffold for developing Chrome extensions with Vue.

Feedback and bug reports are welcome!
