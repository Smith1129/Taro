import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Image } from "@tarojs/components-rn";
import addcutStyleSheet from "./addcut_styles";
import { getEvent, getFoodCount, setFoodCount } from "../../utils/common";
var _styleSheet = addcutStyleSheet;

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
let AddCut = class AddCut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    this.setState({
      count: getFoodCount(this.props.food)
    });
    myEvent.on('labChange', () => {
      this.setState({
        count: getFoodCount(this.props.food)
      });
    });
  }
  handleCount(index) {
    if (index === 0) {
      if (this.props.food) {
        if (this.state.count >= 1) {
          setFoodCount(this.props.food, this.state.count, 'cut', () => {
            console.log(9999);
            // myEvent.emit('addcut')
            let num = getFoodCount(this.props.food);
            console.log(num, 'cutnum');
            this.setState({
              count: num
            });
          });
        } else {
          console.error('异常');
        }
      }
    } else if (index === 1) {
      if (this.props.food) {
        setFoodCount(this.props.food, this.state.count, 'add', () => {
          console.log(777777);
          //  myEvent.emit('addcut')
          let num = getFoodCount(this.props.food);
          this.setState({
            count: num
          });
        });
      }
    }
    myEvent.emit('addcut');
  }
  render() {
    let { count } = this.state;
    let show = count === 0 ? 'noshow' : '';
    return <View style={_styleSheet["addcut"]}>
            <Image src={require('../../assets/image/cut.png')} onClick={this.handleCount.bind(this, 0)} style={_getStyle('cut_image ' + show)}></Image>
            <Text style={_getStyle('food_num ' + show)}>{count}</Text>
            <Image src={require('../../assets/image/add.png')} onClick={this.handleCount.bind(this, 1)} style={_styleSheet["cut_image"]}></Image>
        </View>;
  }
};

export default AddCut;