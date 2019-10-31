var _class, _temp;

import { Provider as TCRNProvider } from '@tarojs/components-rn';
import TaroRouter from '@tarojs/taro-router-rn';
import pagesIndexIndex from './pages/index/index';
import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";


import appStyleSheet from "./app_styles";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

var _styleSheet = appStyleSheet;
let App = (_temp = _class = class App extends Component {
  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <TCRNProvider>
                  <RootStack />
                </TCRNProvider>;
  }

  componentWillUnmount() {
    this.componentDidHide && this.componentDidHide();
  }

}, _class.config = {
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}, _temp);
const RootStack = TaroRouter.initRouter([['pages/index/index', pagesIndexIndex]], Taro, App.config);
Taro.initNativeApi(Taro);
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
export default App;