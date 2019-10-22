import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './index.less'
import Child from './child'
import Head from '../../components/head/head.js'

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
        <Head />
      </View>
    )
  }
}
