import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './bottom.less'
import {getAllFoodPrice,getEvent} from '../../utils/common'
let Event = getEvent()
class Bottom extends Component{
    constructor (props){ 
        super(props)
        this.state={
            num:3,
            sendPrice:3,
            getSelf:true,
            mustPrice:20,
            allPrice:0
        }
     }
     componentDidMount(){
         let{allPrice,allNum} = getAllFoodPrice()
         this.setState({
             num:allNum,
             allPrice:allPrice
         })
         Event.on('addcut',()=>{
            let{allPrice,allNum} = getAllFoodPrice()
            this.setState({
                num:allNum,
                allPrice:allPrice
            })
         })
     }
    render () {
        let {num,sendPrice,getSelf,mustPrice,allPrice} = this.state
        return (<View className='bottom_content'>
            {num === 0?null:<View className={'num'}>{num}</View>}
            <Image className='bottom_pic' src={num?require('../../assets/image/foodstore.png'):require('../../assets/image/emptystore.png')}></Image>
            <View className='info'>
                {
                    allPrice?<Text className='price'>{allPrice}</Text>:<Text>{`另需配送费￥${sendPrice}|`}</Text>
                }
               <Text>{getSelf?'支持自取':''}</Text>
            </View>
            <View className='submit'>
            {
                allPrice>mustPrice?
                <Text className='gopay'>去结算</Text>
                :
                <Text>{mustPrice?`￥${mustPrice}起送`:''}</Text>
            }
           </View>
        </View>)
    }
}
export default Bottom