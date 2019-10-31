import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Image } from "@tarojs/components-rn";
import bottomStyleSheet from "./bottom_styles";
import { getAllFoodPrice, getEvent } from "../../utils/common";
var _styleSheet = bottomStyleSheet;
let Event = getEvent();
let Bottom = class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 3,
      sendPrice: 3,
      getSelf: true,
      mustPrice: 20,
      allPrice: 0
    };
  }
  componentDidMount() {
    let { allPrice, allNum } = getAllFoodPrice();
    this.setState({
      num: allNum,
      allPrice: allPrice
    });
    Event.on('addcut', () => {
      let { allPrice, allNum } = getAllFoodPrice();
      this.setState({
        num: allNum,
        allPrice: allPrice
      });
    });
  }
  render() {
    let { num, sendPrice, getSelf, mustPrice, allPrice } = this.state;
    return <View style={_styleSheet["bottom_content"]}>
            {num === 0 ? null : <View style={_styleSheet["num"]}>{num}</View>}
            <Image src={num ? require('../../assets/image/foodstore.png') : require('../../assets/image/emptystore.png')} style={_styleSheet["bottom_pic"]}></Image>
            <View style={_styleSheet["info"]}>
                {allPrice ? <Text style={_styleSheet["price"]}>{allPrice}</Text> : <Text>{`另需配送费￥${sendPrice}|`}</Text>}
               <Text>{getSelf ? '支持自取' : ''}</Text>
            </View>
            <View style={_styleSheet["submit"]}>
            {allPrice > mustPrice ? <Text style={_styleSheet["gopay"]}>去结算</Text> : <Text>{mustPrice ? `￥${mustPrice}起送` : ''}</Text>}
           </View>
        </View>;
  }
};

export default Bottom;