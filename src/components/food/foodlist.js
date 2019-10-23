import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './foodlist.less'
class FoodList extends Component{
    constructor (props){ 
        super(props)
        this.state={}
     }
    render () {
        return (<View className=''>foodList</View>)
    }
}
export default FoodList;