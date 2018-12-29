const state = () => ({ routerName: [] })
const mutations = {
  setRouterName(state, val) {
    state.routerName.push(val)
  }
}
const actions = {
  setRouterName: ({ commit }, position) => {
    commit('setRouterName', position)
  }
}
export default { namespaced: true, state, mutations, actions }
