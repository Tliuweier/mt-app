const state = () => ({ position: {}, Menu: [], count: 1 })

const mutations = {
  setPositions(state, payload) {
    state.count++
    state.position = payload
    //state.position.province = payload.province
    //console.log(payload)
  },
  setMenu(state, val) {
    state.Menu = val
  },
  changeCitys(state, val) {
    state.count++
    state.position.city = val.city
    state.position.province = val.province
    console.log(val)
  }
}
const actions = {
  setPosition: ({ commit, state }, position) => {
    commit('setPositions', position)
  },
  setMenu: ({ commit, state }, menu) => {
    commit('setMenu', menu)
  },
  changeCity: ({ commit, state }, data) => {
    console.log(data)
    commit('changeCitys', data)
  }
}
const getters = {
  getCity(state) {
    console.log(state.position.city)
    return state.position.city
  }
}

export default { namespaced: true, state, mutations, actions, getters }
