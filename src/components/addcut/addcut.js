import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './addcut.less'
import {getEvent,getFoodCount,setFoodCount} from '../../utils/common'
let myEvent = getEvent()
class AddCut extends Component{
    constructor (props){ 
        super(props)
        this.state={
            count:0
        }
     }
     componentDidMount(){
         this.setState({
             count:getFoodCount(this.props.food)
         })
         myEvent.on('labChange',()=>{
             this.setState({
                 count:getFoodCount(this.props.food)
             })
         })
     }
     handleCount(index){
         if(index===0){
            if(this.props.food){
                if(this.state.count >=1){
                    setFoodCount(this.props.food,this.state.count,'cut',()=>{
                        console.log(9999)
                        // myEvent.emit('addcut')
                        let num = getFoodCount(this.props.food)
                        console.log(num,'cutnum')
                        this.setState({
                            count:num
                        })
                    })
                }else{
                    console.error('异常')
                }
            }
         }else if(index===1){
             if(this.props.food){
                 setFoodCount(this.props.food,this.state.count,'add',()=>{
                     console.log(777777)
                    //  myEvent.emit('addcut')
                     let num =  getFoodCount(this.props.food)
                     this.setState({
                        count: num
                    })
                 })
             }
         }
         myEvent.emit('addcut')
     }
    render () {
        let {count} = this.state
        let show = count===0?'noshow':''
        return (<View className='addcut'>
            <Image className={'cut_image '+show} src={require('../../assets/image/cut.png')} onClick={this.handleCount.bind(this,0)}></Image>
            <Text className={'food_num '+show}>{count}</Text>
            <Image className='cut_image' src={require('../../assets/image/add.png')} onClick={this.handleCount.bind(this,1)}></Image>
        </View>)
    }
}
export default AddCut