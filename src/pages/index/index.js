import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './index.less'
import Child from './child'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    name:'zzz'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  handleClick(){
    this.setState({
      name:'gggggggg'
    })
  }
  change(){
    console.log(1111)
    this.setState({
      name:'sb'
    })
  }

  render () {
    return (
      <View className='index'>
        <Child name={this.state.name} onchange={this.change.bind(this)} />
        <Button onClick={this.handleClick}>222</Button>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}
