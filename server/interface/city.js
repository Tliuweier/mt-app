import Router from 'koa-router'
import axios from './utils/axios'
import cityModel from '../dbs/model/city'

let router = new Router({ prefix: '/citys' })

router.get('/getCity', async ctx => {
  let cityId = { cityId: 112522 }
  try {
    let result = await cityModel.find({})
    ctx.body = {
      code: -1,
      data: result
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      data: {}
    }
  }
})
export default router
