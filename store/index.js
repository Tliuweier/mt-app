import Vue from 'Vue'
import Vuex from 'Vuex'
import geo from './modules/geo'
import home from './modules/home'
import index from './modules/index'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: {
      geo,
      home,
      index
    },
    actions: {
      async nuxtServerInit({ commit }, { eq, app }) {
        const {
          status,
          data: { province, city, ip }
        } = await app.$axios.get('/geo/getPosition')
        commit(
          'geo/setPositions',
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
            city:
              app.store.state.geo.position.city == null
                ? '北京市'
                : app.store.state.geo.position.city.replace('市', '')
          }
        })
        commit('home/setHotPlace', status3 === 200 ? result : [])
        console.log(result)
        //获取热门城市
        //相邻城市
        //全部城市
        //最近访问城市
      }
    },
    plugins: [createLogger()],
    strict: process.env.NODE_ENV !== 'production'
  })

export default store
