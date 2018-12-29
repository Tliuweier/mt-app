const state = () => ({ hotCity: [], nearCities: [], allCities: [] })

const mutations = {
  setHotCity(state, val) {
    state.hotCity = val
  },
  setNearCities(state, val) {
    state.nearCities = val
  },
  setAllCities(state, val) {
    state.allCities = val
  }
}
const actions = {
  getHotCity: ({ commit }, hotPlace) => {
    commit('setHotCity', hotPlace)
  },
  getNearCities: ({ commit }, nearcity) => {
    commit('setNearCities', nearcity)
  },
  getAllCities: ({ commit }, allcity) => {
    commit('setAllCities', allcity)
  }
}

export default { namespaced: true, state, mutations, actions }
