import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import activityStyleSheet from "./activity_styles";
var _styleSheet = activityStyleSheet;
let Activity = class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actInfo: {
        type: 'cut',
        info: [{ total: 48, cut: 10 }, { total: 50, cut: 15 }, { total: 60, cut: 20 }],
        len: 3
      }
    };
  }
  render() {
    let { actInfo } = this.state;
    return <View style={_styleSheet["activity"]}>
            <Text style={_styleSheet["type"]}>{actInfo.type === 'cut' ? '减' : ''}</Text>
            <Text>{actInfo.info.map((item, index) => {
          return `满${item.total}减${item.cut};`;
        })}</Text>
            <Text style={_styleSheet["act_count"]}>{actInfo.len}个活动</Text>
        </View>;
  }
};

export default Activity;