# qiankun-demo

主应用目前是用 react 子 应用也是 react 后续会慢慢加上其他技术栈

## run

```
 git clone https://github.com/sh-react-club/qiankun-demo.git
 cd qiankun-demo
 npm run all:install
 npm run all:start
```

## 碰到的问题

- 子项目路由没有加 basename 会报错
- 子项目 DOM render 的时候 需要拿 contianer 的 root

## 心得

最开始我是参考了别人博客来搭建的这个模板的,开发的过程中朋友很多报错,也都是通过搜索去解决的, 后面又重新把官网看了一遍发现碰到的问题官网上都有解决方案。建议如果刚学的话还是跟着官网一起走就行了

## 参考资料

- [微前端最佳实践](https://github.com/a1029563229/blogs/blob/master/BestPractices/qiankun/Start.md)
- [乾坤官网项目实战](https://qiankun.umijs.org/zh/guide/tutorial)