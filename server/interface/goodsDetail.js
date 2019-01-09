import Router from 'koa-router'
import axios from './utils/axios'
import GoodsDetail from '../dbs/model/gooddetails'
let router = new Router({ prefix: '/goodsdetail' })

router.get('/getGoodsDetail', async ctx => {
  let dealId = { dealId: 51588402 }
  let result = await GoodsDetail.find(dealId)
  console.log(result)
  try {
    ctx.body = {
      code: 0,
      data: result ? result : {}
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      data: {}
    }
  }
})

export default router
