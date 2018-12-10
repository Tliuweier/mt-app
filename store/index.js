import Vue from 'Vue'
import Vuex from 'Vuex'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: {
      geo,
      home
    },
    actions: {
      async nuxtServerInit({ commit }, { eq, app }) {
        const {
          status,
          data: { province, city, ip }
        } = await app.$axios.get('/geo/getPosition')
        commit(
          'geo/setPosition',
          status === 200
            ? { city, province, ip }
            : { city: '', province: '', ip: '' }
        )
        const {
          status: status2,
          data: { menu }
        } = await app.$axios.get('/geo/getMenu')
        commit('geo/setMenu', status2 === 200 ? menu : [])
        const {
          status: status3,
          data: { result }
        } = await app.$axios.get('/search/hotPlace', {
          params: {
            city: app.store.state.geo.position.city.replace('市', '')
          }
        })
        commit('home/setHotPlace', status3 === 200 ? result : [])
      }
    }
  })

export default store
