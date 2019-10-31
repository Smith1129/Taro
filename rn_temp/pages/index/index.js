var _class, _temp2;

import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";
import Head from "../../components/head/head";
import Food from "../../components/food/food";
import Bottom from "../../components/bottom/bottom";
var _styleSheet = indexStyleSheet;
let Index = (_temp2 = _class = class Index extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      name: 'zzz'
    }, _temp;
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View style={_styleSheet["index"]}>
        <Head></Head>
        <Food></Food>
        <Bottom></Bottom>
      </View>;
  }
}, _class.config = {
  navigationBarTitleText: '首页'
}, _temp2);
export { Index as default };