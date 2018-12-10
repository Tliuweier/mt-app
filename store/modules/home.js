const state = () => ({ hotPlace: [] })

const mutations = {
  setHotPlace(state, val) {
    state.hotPlace = val
  }
}
const actions = {
  setHotPlace: ({ commit }, position) => {
    commit('setHotPlace', position)
  }
}

export default { namespaced: true, state, mutations, actions }
