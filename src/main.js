import MiniBus from './MiniBus'

// 向上寻找minibus实例
function findMiniBusInstance (context) {
  if (context._miniBusInstance) {
    return context._miniBusInstance
  }
  let current = context
  while (current) {
    if (current.miniBusInstance) {
      context._miniBusInstance = current.miniBusInstance
      return current.miniBusInstance
    }
    current = current.$parent
  }
  if (!context) {
    console.error('context 不存在')
  } else {
    console.error(`${context.$options.name} 不包含minibus实例`)
  }
  return busInit()
}

// 初始化一个通信Bus
export function busInit (...arg) {
  return {
    miniBusInstance: new MiniBus(...arg)
  }
}
// 获取通信Bus的内部数据
export function busGet (...arg) {
  return findMiniBusInstance(this).get(...arg)
}

// 序列化参数
function normalizeMap (map) {
  if (typeof map === 'string') {
    return [{ key: map, val: null }]
  } else if (Array.isArray(map)) {
    return map.map(key => ({ key, val: null }))
  }
  return Object.entries(map).map(([key, val]) => ({ key, val }))
}
// computed内部使用，参考mapGetters
export function busGetters (name) {
  const res = {}
  normalizeMap(name).forEach(({ key, val }) => (res[key.split('.').pop()] = function () {
    return findMiniBusInstance(this).get(key, val)
  }))
  return res
}

// 设置通信Bus的内部数据
export function busSet (...arg) {
  return findMiniBusInstance(this).set(...arg)
}

export function busWatch (...arg) {
  return findMiniBusInstance(this).watch(...arg)
}

// 触发通信Bus的事件
export function busEmit (...arg) {
  return findMiniBusInstance(this).emit(...arg)
}

// 监听通信Bus的事件
export function busOn (...arg) {
  return findMiniBusInstance(this).on(...arg)
}

// 监听一次通信Bus的事件
export function busOnce (...arg) {
  return findMiniBusInstance(this).once(...arg)
}

// 解绑通信Bus的事件
export function busOff (...arg) {
  return findMiniBusInstance(this).off(...arg)
}
