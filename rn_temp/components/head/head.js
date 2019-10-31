import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Image } from "@tarojs/components-rn";
import Top from "./top";
import headStyleSheet from "./head_styles";
import Activity from "./activity";
var _styleSheet = headStyleSheet;
let Head = class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {
        name: '川湘居',
        tag: '欢迎光临，很高兴为您服务~',
        desc: ['味道赞', '主食真好', '分量足']
      }
    };
  }
  render() {
    let { store } = this.state;
    return <View style={_styleSheet["head"]}>
            <Top />
            <Image src={require('../../assets/image/food.jpg')} style={_styleSheet["back"]}></Image>
            <View style={_styleSheet["store"]}>
                <Image src={require('../../assets/image/store.jpg')} style={_styleSheet["store_img"]}></Image>
                <View style={_styleSheet["store_text"]}>
                    <Text>{store.name}</Text>
                    <Text>{store.tag}</Text>
                    <View>
                        {store.desc.map((item, index) => {
              return <Text key={index} style={_styleSheet["desc_text"]}>{item}</Text>;
            })}
                    </View>
                </View>
            </View>
            <Activity />
        </View>;
  }
};

export default Head;