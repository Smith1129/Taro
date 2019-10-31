import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import cataStyleSheet from "./cata_styles";
import { getEvent } from "../../utils/common";
var _styleSheet = cataStyleSheet;

function _getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();

  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = _getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();

      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }

  return className.join(' ').trim();
}

function _getStyle(classNameExpression) {
  var className = _getClassName(classNameExpression);

  var classNameArr = className.split(/\s+/);
  var style = [];

  if (classNameArr.length === 1) {
    style.push(_styleSheet[classNameArr[0].trim()]);
  } else {
    classNameArr.forEach(function (cls) {
      style.push(_styleSheet[cls.trim()]);
    });
  }

  return style;
}

let myEvent = getEvent();
let Cata = class Cata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actIndex: 0,
      cataInfo: [{ name: '专场', id: 1 }, { name: '热销', id: 2 }, { name: '折扣', id: 3 }, { name: '主食', id: 4 }, { name: '热炒', id: 5 }, { name: '凉菜', id: 6 }, { name: '特色乱炖', id: 7 }]
    };
  }
  handleCataClick(id) {
    this.setState({
      actIndex: id
    }, this.props.onLabChange(id));
    myEvent.emit("labChange");
  }
  render() {
    const { cataInfo } = this.state;
    if (cataInfo) {
      return <View style={_styleSheet["cata_content"]}>
            {cataInfo.map((item, index) => {
          return <Text onClick={this.handleCataClick.bind(this, item.id)} key={index} style={_getStyle(this.state.actIndex === item.id ? 'cata_title active' : 'cata_title')}>{item.name}</Text>;
        })}
        </View>;
    } else {
      return `11`;
    }
  }
};

export default Cata;