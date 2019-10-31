import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './activity.less'
class Activity extends Component{
    constructor(props){
        super(props)
        this.state = {
            actInfo:{
                type:'cut',
                info:[{total:48,cut:10},{total:50,cut:15},{total:60,cut:20}],
                len:3
            }
        }
    }
    render () {
        let {actInfo} = this.state
        return (<View className='activity'>
            <Text className='type'>{actInfo.type==='cut'?'减':''}</Text>
            <Text>{actInfo.info.map((item,index)=>{return `满${item.total}减${item.cut};`})}</Text>
            <Text className='act_count'>{actInfo.len}个活动</Text>
        </View>)
    }
}
export default Activity