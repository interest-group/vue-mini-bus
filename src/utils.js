// 向上寻找指定父组件
// @param context 当前组件
// @param name    父组件name
// @param cross    跨级父组件
// @return Array  父组件集合
export function findParentComponents (context, name, cross = false) {
  const names = [].concat(name)
  const components = []
  let parent = context.$parent
  while (parent) {
    if (names.includes(parent.$options.name)) {
      components.push(parent)
      if (!cross) break
    }
    parent = parent.$parent
  }
  return components
}
// 向下寻找指定子组件
// @param context 当前组件
// @param name    子组件name
// @param cross    跨级子组件
// @return Array  子组件集合
export function findChildComponents (context, name, cross = false) {
  const names = [].concat(name)
  return context.$children.reduce((components, child) => {
    if (names.includes(child.$options.name)) {
      components.push(child)
      if (!cross) return components
    }
    return components.concat(findChildComponents(child, name, cross))
  }, [])
}
