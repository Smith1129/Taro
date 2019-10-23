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
    render () {
        const {tabList,currentList} = this.state 
        // const tabList = [{title:'标签1'},{title:'标签2'}]
        return (<View className='food_content'>
            <AtTabs current={this.state.current} onClick={this.handleClick.bind(this)}  tabList={tabList}>
                <AtTabsPane>
                    <View className='food_body'>
                        <Cata onLabChange={this.changeLab}/><FoodList currentList={currentList} onFoodChange={this.changeFood}/>
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
    changeLab(index){
        console.log(index,'zzz')
    }
    changeFood(){

    }
    // handleCataClick(index){
    //     this.setState({
    //         actIndex:index
    //     })
    // }
}
export default Food;