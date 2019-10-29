import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Image } from '@tarojs/components'
import './foodlist.less'
import AddCut from '../addcut/addcut.js'
class FoodList extends Component{
    constructor (props){ 
        super(props)
        this.state={}
     }
    render () {
        const {currentList} = this.props
        console.log(currentList)
        return (<View className='foodlist'>
            <Text>热销</Text>
            <View className="foodlist_content">
                {
                    currentList.map((item,index)=>{
                        return (<View className='foodlist_item'>
                            <Image className='foodlist_img' src={item.imgUrl===1?require('../../assets/image/1.jpg'):require('../../assets/image/2.jpg')}></Image>
                            <View className='item_info'>
                                <Text>{item.title}</Text>
                                <Text>月售:{item.sole}</Text>
                                <Text className='price'>￥{item.price}</Text>
                                <AddCut food={item}></AddCut>
                            </View>
                        </View>)
                    })
                }
            </View>
        </View>)
    }
}
export default FoodList;