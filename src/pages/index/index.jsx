import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './index.less'
import Head from '../../components/head/head.js'
import Food from '../../components/food/food.js'
import Bottom from '../../components/bottom/bottom'
import 'taro-ui/dist/style/index.scss'

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

  render () {
    return (
      <View className='index'>
        <Head></Head>
        <Food></Food>
        <Bottom></Bottom>
      </View>
    )
  }
}
