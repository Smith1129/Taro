import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './food.less'
import Cata from './cata.js'
import FoodList from './foodlist.js'
class Food extends Component{
    constructor (props){ 
        super(props)
        this.state={
            current:0,
            tabList:[{title:'点菜'},{title:'评价'},{title:'商家'}],
            foodList:[],
            currentList:[]
        }
     }
     componentDidMount(){
         this.changeLab(1)
     }
    render () {
        const {tabList,currentList} = this.state 
        // const tabList = [{title:'标签1'},{title:'标签2'}]
        return (<View className='food_content'>
            <AtTabs current={this.state.current} onClick={this.handleClick.bind(this)}  tabList={tabList}>
                <AtTabsPane>
                    <View className='food_body'>
                        <Cata onLabChange={this.changeLab.bind(this)}></Cata>
                        <FoodList currentList={currentList} onFoodChange={this.changeFood}></FoodList>
                    </View>
                </AtTabsPane>
                <AtTabsPane>2</AtTabsPane>
                <AtTabsPane>3</AtTabsPane>
            </AtTabs>
        </View>)
    }
    handleClick(index){
        this.setState({
            current:index
        })
    }
    changeLab(id){
        let check = this.state.foodList.some((item)=>item.id === id)
        if(check){
            let currentList = this.state.foodList.filter((item)=>item.id===id)
            this.setState({
                currentList:currentList
            })
        }else{
            let data = this.getData(id)
            this.setState({
                foodList:this.state.foodList.concat(data)
            },()=>{
                this.setState({currentList:this.state.foodList.filter(item=>item.id===id)})	
            })
        }
    }
    changeFood(){
        

    }
    getData(id){
        let count = Math.round(Math.random()*2);
         return Array.from(Array(Math.round(Math.random()*20)),(v,k)=>({
            title:`分类${id}菜品${k+1}`,
            id:id,
            imgUrl:count,
            price:Math.round(Math.random()*20),
            sole:Math.round(Math.random()*50)
        }))
    }
   
}
export default Food;