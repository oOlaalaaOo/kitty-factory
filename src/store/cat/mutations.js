export function setData (state, data) {
  state.list = data
}

export function pushData (state, data) {
  state.list.push(data)
}

export function setMeta (state, data) {
  state.meta = data
}

export function clearList (state) {
  state.list = []
  state.meta = {}
}
