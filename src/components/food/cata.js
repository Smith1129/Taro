import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './cata.less'
class Cata extends Component{
    constructor (props){ 
        super(props)
        this.state={
            actIndex:1,
            cataInfo:[
                {name:'专场',id:1},
                {name:'热销',id:2},
                {name:'折扣',id:3},
                {name:'主食',id:4},
                {name:'热炒',id:5},
                {name:'凉菜',id:6},
                {name:'特色乱炖',id:7},
            ]
        }
     }
     handleCataClick(id){
         this.setState({
             actIndex:id
         },this.props.onLabChange(id))
     }
    render () {
        const {cataInfo} = this.state
        if(cataInfo){
            return (<View className='cata_content'>
            {cataInfo.map((item,index)=>{
                return (<Text className={this.state.actIndex === item.id ?'cata_title active':'cata_title'} onClick={this.handleCataClick.bind(this,item.id)} key={index}>{item.name}</Text>)
            })}
        </View>)
        }else{
            return `11`
        }
    }
}
export default Cata;