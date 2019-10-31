
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "bottom_content": {
    "display": "flex",
    "flexDirection": "row",
    "fontSize": "#89888D",
    "justifyContent": "space-between",
    "position": "fixed",
    "bottom": 10,
    "left": 0,
    "width": "100%",
    "paddingTop": 0,
    "paddingRight": 10,
    "paddingBottom": 0,
    "paddingLeft": 10,
    "borderRadius": 50,
    "backgroundColor": "#3A3B36",
    "boxSizing": "border-box",
    "height": 60
  }
})
