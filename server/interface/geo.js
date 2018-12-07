import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({ prefix: '/geo' })

const sign = '66e0627b024e4118f901f5d523887e48'

router.get('/getPosition', async (ctx) => {
  let {
    status,
    data: { province, city, ip }
  } = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  //console.log(data)
  if (status === 200) {
    ctx.body = {
      province,
      city,
      ip
    }
  } else {
    ctx.body = {
      province: '',
      city: '',
      ip: ''
    }
  }
})
router.get('/getMenu',async (ctx) => {
  let {
    status,
    data: { menu }
  } = await axios.get(`http://cp-tools.cn/geo/menu?sign=${sign}`)
  if (status === 200) {
    ctx.body = {
      menu
    }
  } else {
    ctx.body = {
      menu: []
    }
  }
})
export default router
