const React = (() => {

  let hooks = []
  let idx = 0

  const useState = initVal => {
    const state = hooks[idx] || initVal
    let _idx = idx
    const setState = v => {
      hooks[_idx] = v
    }
    
    idx++

    return [state, setState]
  }

  const render = component => {
    idx = 0
    const c = component()
    c.render()

    return c
  }

  const useEffect = (cb, deps) => {
    const oldDeps = hooks[idx]
    let hasChanged = true
    if (oldDeps) {
      hasChanged = deps.some((dep, i) => !Object.is(dep, oldDeps[i]))
    }

    if (hasChanged) {
      cb()
    }

    hooks[idx] = deps
    idx++
  }

  return {
    useState,
    render,
    useEffect
  }
})()


export default React