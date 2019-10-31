import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Image } from "@tarojs/components-rn";
import foodlistStyleSheet from "./foodlist_styles";
import AddCut from "../addcut/addcut";
var _styleSheet = foodlistStyleSheet;
let FoodList = class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { currentList } = this.props;
    console.log(currentList);
    return <View style={_styleSheet["foodlist"]}>
            <Text>热销</Text>
            <View style={_styleSheet["foodlist_content"]}>
                {currentList.map((item, index) => {
          return <View style={_styleSheet["foodlist_item"]}>
                            <Image src={item.imgUrl === 1 ? require('../../assets/image/1.jpg') : require('../../assets/image/2.jpg')} style={_styleSheet["foodlist_img"]}></Image>
                            <View style={_styleSheet["item_info"]}>
                                <Text>{item.title}</Text>
                                <Text>月售:{item.sole}</Text>
                                <Text style={_styleSheet["price"]}>￥{item.price}</Text>
                                <AddCut food={item}></AddCut>
                            </View>
                        </View>;
        })}
            </View>
        </View>;
  }
};

export default FoodList;