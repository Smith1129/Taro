import Taro, { Component } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import './top.less'
class Top extends Component{
    render () {
        return (<View className='top'>
            <View className='left'>
                <Image className='img' src={require('../../assets/image/back.png')}></Image>
            </View>
            <View className='right'>
                <Image className='img' src={require('../../assets/image/search.png')}></Image>
                <Image className='img' src={require('../../assets/image/star.png')}></Image>
                <Image className='img' src={require('../../assets/image/ping.png')}></Image>
                <Image className='img' src={require('../../assets/image/more.png')}></Image>
            </View>
        </View>
        )
    }
}
export default Top;