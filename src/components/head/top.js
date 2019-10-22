import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './top.less'
class Top extends Component{
    render () {
        return (<view className='top'>
            <view className='left'>
                <Image className='img' src={require('../../assets/image/back.png')}></Image>
            </view>
            <view className='right'>
                <Image className='img' src={require('../../assets/image/search.png')}></Image>
                <Image className='img' src={require('../../assets/image/star.png')}></Image>
                <Image className='img' src={require('../../assets/image/ping.png')}></Image>
                <Image className='img' src={require('../../assets/image/more.png')}></Image>
            </view>
        </view>
        )
    }
}
export default Top;