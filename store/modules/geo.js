const state = () => ({ position: {}, Menu: [] })

const mutations = {
  setPosition(state, val) {
    state.position = val
  },
  setMenu(state, val) {
    state.Menu = val
  }
}
const actions = {
  setPosition: ({ commit }, position) => {
    commit('setPosition', position)
  },
  setMenu: ({ commit }, menu) => {
    commit('setMenu', menu)
  }
}

export default { namespaced: true, state, mutations, actions }
