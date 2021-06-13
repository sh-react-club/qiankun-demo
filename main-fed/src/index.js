import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import 'antd/dist/antd.css';
import App from './component/App'
import apps from './micro'


function render () {
  ReactDOM.render(
    <App></App>,
    document.getElementById('root')
  );
}

render();



registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 微应用加载前
  beforeLoad: (app) => {
    console.log("before load", app.name);
    return Promise.resolve();
  },
  // qiankun 生命周期钩子 - 微应用挂载后
  afterMount: (app) => {
    // 加载微应用前，进度条加载完成
    console.log("after mount", app.name);
    return Promise.resolve();
  },
});

start()