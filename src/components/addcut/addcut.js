import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './addcut.less'
class AddCut extends Component{
    constructor (props){ 
        super(props)
        this.state={
            count:0
        }
     }
     handleCount(index){
        let num = this.state.count
        
        if(index===0 && num>0){
            num--;
            this.setState({
                count:num
            })
        }else if(index===1){
            num++
            this.setState({
                count:num
            })
        }
     }
    render () {
        return (<View className='addcut'>
            <Image className='cut_image' src={require('../../assets/image/cut.png')} onClick={this.handleCount.bind(this,0)}></Image>
            <Text className='food_num'>{this.state.count}</Text>
            <Image className='cut_image' src={require('../../assets/image/add.png')} onClick={this.handleCount.bind(this,1)}></Image>
        </View>)
    }
}
export default AddCut