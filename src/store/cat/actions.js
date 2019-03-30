import axios from 'axios'

export async function fetch ({ commit }, payload) {
  try {
    let page = 0
    let perPage = 6
    let pushData = false

    if (payload && payload.pushData) {
      pushData = payload.pushData
    }

    if (payload && payload.page) {
      page = payload.page
    }

    if (payload && payload.perPage) {
      perPage = payload.perPage
    }

    let resp = await axios.get('api/cat', {
      params: {
        page: page,
        per_page: perPage
      }
    })

    let listData = resp.data.list.data
    let listMeta = resp.data.list.meta

    if (pushData) {
      listData.forEach((data) => {
        commit('pushData', data)
      })
    } else {
      commit('clearList')
      commit('setData', listData)
    }

    commit('setMeta', listMeta)

    return Promise.resolve(resp)
  } catch (err) {
    return Promise.reject(err)
  }
}
