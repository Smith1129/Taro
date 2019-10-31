import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Image } from "@tarojs/components-rn";
import topStyleSheet from "./top_styles";
var _styleSheet = topStyleSheet;
let Top = class Top extends Component {
  render() {
    return <View style={_styleSheet["top"]}>
            <View style={_styleSheet["left"]}>
                <Image src={require('../../assets/image/back.png')} style={_styleSheet["img"]}></Image>
            </View>
            <View style={_styleSheet["right"]}>
                <Image src={require('../../assets/image/search.png')} style={_styleSheet["img"]}></Image>
                <Image src={require('../../assets/image/star.png')} style={_styleSheet["img"]}></Image>
                <Image src={require('../../assets/image/ping.png')} style={_styleSheet["img"]}></Image>
                <Image src={require('../../assets/image/more.png')} style={_styleSheet["img"]}></Image>
            </View>
        </View>;
  }
};

export default Top;