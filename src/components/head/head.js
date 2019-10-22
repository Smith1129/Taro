import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import Top from './top'
class Head extends Component{
    state = {}
    render () {
        return (<view className='head'>
            <Top/>
        </view>
        )
    }
}
export default Head;