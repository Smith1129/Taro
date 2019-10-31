
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "activity": {
    "marginTop": 10,
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "fontSize": 12,
    "paddingTop": 0,
    "paddingRight": 10,
    "paddingBottom": 0,
    "paddingLeft": 10
  }
})
