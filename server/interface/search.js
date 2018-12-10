import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({ prefix: '/search' })

const sign = '66e0627b024e4118f901f5d523887e48'

//搜索
router.get('/top', async (ctx) => {
  let {
    status,
    data: { top }
  } = await axios.get(`http://cp-tools.cn/search/top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign
    }
  })
  if (status === 200) {
    ctx.body = {
      top
    }
  } else {
    ctx.body = {
      top: []
    }
  }
})
//热门
router.get('/hotPlace', async (ctx) => {
  console.log(ctx.store)
  let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
  let {
    status,
    data: { result }
  } = await axios.get(`http://cp-tools.cn/search/hotPlace`, {
    params: {
      city,
      sign
    }
  })
  if (status === 200) {
    ctx.body = {
      result
    }
  } else {
    ctx.body = {
      result: []
    }
  }
})
//推荐

export default router
