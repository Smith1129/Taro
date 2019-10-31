//获取菜品数量
//缓存数据 H5 小程序
import Taro from '@tarojs/taro'
import Event from './event'
let myEvent = new Event()
const foodKey = 'zzz_meituan'
export function getFoodCount(food){
    let store = Taro.getStorageSync(foodKey)
    if(store&&store[food.id]){
        return store[food.id].num
    }else{
        return 0
    }
}
//设置菜品数量
export function setFoodCount(food,num,type,callback){
    let store = Taro.getStorageSync(foodKey)
    if(!store){
        store = {}
    }
    if(type === 'cut'){
        if(num === 1){
            if(store[food.id]){
                delete store[food.id]
            }
        }else{
            if(store[food.id]){
                store[food.id].num-- 
            }
        }
        Taro.setStorageSync(foodKey,store)
    }else if(type === 'add'){
        if(store[food.id]){
            store[food.id].num++
        }else{
            store[food.id] = {...food,num:1}
        }
        Taro.setStorageSync(foodKey,store)
    }
    callback && callback()
} 
export function getEvent(){
    return myEvent
}
/////获取缓存中所有菜品的总价格
export function getAllFoodPrice(){
    let store = Taro.getStorageSync(foodKey);
    let allPrice = 0;
    let allNum = 0;
    if(store){
        Object.keys(store).map((key)=>{
            if(store[key]){
                allPrice += store[key].price*store[key].num;
                allNum += store[key].num;
            }
        })
    }
    console.log(allNum)
    return {allPrice,allNum}
}