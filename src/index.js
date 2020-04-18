// 库的入口文件
import { busInit, busGet, busSet, busWatch, busEmit, busOn, busOnce, busOff } from './main'
import { findChildComponents, findParentComponents } from './utils'

export default {
  install: (Vue) => {
    // 初始化
    Vue.prototype.$b_init = busInit
    // 数据通信
    Vue.prototype.$b_get = busGet
    Vue.prototype.$b_set = busSet
    Vue.prototype.$b_watch = busWatch
    // 事件通信
    Vue.prototype.$b_emit = busEmit
    Vue.prototype.$b_on = busOn
    Vue.prototype.$b_once = busOnce
    Vue.prototype.$b_off = busOff
    // 寻找组件
    Vue.prototype.$findParentComponents = findParentComponents
    Vue.prototype.$findChildComponents = findChildComponents
  }
}
