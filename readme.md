# vue-mini-bus

[![NPM](https://nodei.co/npm/vue-mini-bus.png)](https://nodei.co/npm/vue-mini-bus/)

基于Vue的跨级通信库

实现组件内部有限作用域的跨级通信，组件仅能获取到当前组件向上最接近的bus实例

# 引用

npm安装

```
npm install vue-mini-bus --save
```

在项目main.js 引入

```
import MiniBus from 'vue-mini-bus'

Vue.use(MiniBus)
```

# apis

## $b_init (创建bus实例)

在页面组件中调用 this.$b_init(data) 方法，用以创建bus实例

方法返回Object, 在data中可使用扩展运算符

```
// code..
data () {
  return {
    ...this.$b_init()
  }
}
// code...
```

| 参数名   | 类型   | 说明   | 
|:----|:----|:----|
| data   | Object   | 向bus中加入的默认数据   | 

## $b_get (获取数据)

在bus子组件中调用 this.$b_get(name, def) 方法，用以获取数据

```
// 更改msg对象, 并设置默认值
this.$b_get('msg', {header: 0})
// 获取msg对象中header属性
this.$b_get('msg.header')
```

| 参数名   | 类型   | 说明   | 
|:----|:----|:----|
| name   | String   | 键名   | 
| def   | any   | 可选，如果键名不存在，将设置默认值   | 

## $b_set (更改数据)

在bus子组件中调用 this.$b_set(data) 方法，用以更改数据

```
// 更改msg对象
this.$b_set({msg: {header: 0}})
// 更改msg对象中header属性
this.$b_set({'msg.header': 0})
```

| 参数名   | 类型   | 说明   | 
|:----|:----|:----|
| data   | Object   | 更改内部属性需要确保对象已经存在  （如不存在，会被忽略）   | 

## $b_watch (监听数据)

在bus子组件中调用 this.$b_watch(name, callback, option) 方法，用以监听数据

```
// 监听msg更改
this.$b_watch('msg', (newVal, oldVal) => {
  // code...
})
// 监听msg对象中header属性更改
this.$b_watch('msg.header', (newVal, oldVal) => {
  // code...
}, {
  deep: false,
  immediate: true
})
```

| 参数名   | 类型   | 说明   | 
|:----|:----|:----|
| name   | String   | 键名   | 
| callback   | Function   | 回调函数   | 
| option   | Object   | 可选， {deep, immediate}   | 

## $b_emmit (触发事件)

在bus子组件中调用 this.$b_emmit(event, ...arg) 方法，用以触发自定义事件

```
// 触发事件
this.$b_emmit('event', ...arg)
```

| 参数名   | 类型   | 说明   | 
|:----|:----|:----|
| event   | String   | 事件名   | 
| arg   | any   | 参数   | 

## $b_on (监听事件)

在bus子组件中调用 this.$b_on(event, eventHandler) 方法，用以监听自定义事件

```
// 监听事件
this.$b_on('event', this.eventHandler)
```

| 参数名   | 类型   | 说明   | 
|:----|:----|:----|
| event   | String   | 事件名   | 
| eventHandler   | Function   | 回调函数   | 

## $b_off (解除监听事件)

在bus子组件中调用 this.$b_off(event, callback) 方法，用以解除监听自定义事件

```
// 解除监听事件
this.$b_on('event', this.eventHandler)
```

| 参数名   | 类型   | 说明   | 
|:----|:----|:----|
| event   | String   | 事件名   | 
| eventHandler   | Function   | 回调函数   | 

## busGetters （数据映射）

与 mapGetters 类似，在bus子组件中调用 busGetters(names) 方法，将bus数据映射到computed中

注意：与 mapGetters 不同的是，下面的 ```{header: 0}``` 为 msg 的默认值

```
import {busGetters} from 'vue-mini-bus'

computed: {
  // 单条数据
  ...busGetters('msg'),
  // 多条数据
  ...busGetters(['msg']),
  // 多条带默认值数据
  ...busGetters({
    'msg': {header: 0}
  })
}
```

| 参数名   | 类型   | 说明   | 
|:----:|:----|:----|
| names | String   | 键名   | 
|    | Array   | 键名集合   | 
|    | Object   | 带默认值的数据集合   |