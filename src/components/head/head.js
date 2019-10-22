import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Image } from '@tarojs/components'
import Top from './top'
import './head.less'
import Activity from './activity'
class Head extends Component{
    constructor(props){
        super(props)
        this.state = {
            store:{
                name:'川湘居',
                tag:'欢迎光临，很高兴为您服务~',
                desc:['味道赞','主食真好','分量足']
            }
        }
    }
    render () {
        let {store} = this.state
        return (<view className='head'>
            <Top/>
            <Image className='back' src={require('../../assets/image/food.jpg')}></Image>
            <View className='store'>
                <Image className='store_img' src={require('../../assets/image/store.jpg')}></Image>
                <View className='store_text'>
                    <Text>{store.name}</Text>
                    <Text>{store.tag}</Text>
                    <View>
                        {
                           store.desc.map((item,index)=>{return(<Text className='desc_text' key={index}>{item}</Text>)})
                        }
                    </View>
                </View>
            </View>
            <Activity />
        </view>
        )
    }
}
export default Head;