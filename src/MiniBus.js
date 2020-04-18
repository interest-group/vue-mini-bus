import Vue from 'vue'

export default class {
  constructor (data) {
    this.data = data
    this.vueInstance = new Vue({
      data: { data }
    })
  }

  // 获取minibus内部数据
  get (name, def = null) {
    const { data, attr } = this.getDataByDot(name)
    if (data && attr in data) {
      return data[attr]
    }
    this.set({ [name]: def })
    return this.get(name, def)
  }

  // 设置迷你bus内部数据
  set (data) {
    Object.entries(data).forEach(([name, value]) => {
      const { data, attr } = this.getDataByDot(name)
      if (data) {
        this.vueInstance.$set(data, attr, value)
      }
    })
  }

  watch (name, ...arg) {
    this.vueInstance.$watch(`data.${name}`, ...arg)
  }

  // 触发minibus事件
  emit (...arg) {
    this.vueInstance.$emit(...arg)
  }

  // 监听minibus事件
  on (...arg) {
    this.vueInstance.$on(...arg)
  }

  // 监听一次minibus事件
  once (...arg) {
    this.vueInstance.$once(...arg)
  }

  // 解绑minibus事件
  off (...arg) {
    this.vueInstance.$off(...arg)
  }

  // 通过点分割对象属性，获取指定数据
  getDataByDot (name) {
    // 'value.username1'
    const names = name.split('.')
    const attr = names.pop()
    let data = this.data
    names.forEach(name => data && (data = data[name]))
    return { data, attr }
  }
}
