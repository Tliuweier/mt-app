import Router from 'koa-router'
import axios from './utils/axios'
import StoreModel from '../dbs/model/storedetail'
let router = new Router({ prefix: '/storedetail' })
router.get('/getStoreDetail', async ctx => {
  let _id = { id: 170923677 }
  try {
    console.log(_id)
    let result = await StoreModel.find({})
    console.log(result)
    ctx.body = {
      code: 0,
      data: result ? result : {}
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      data: e
    }
  }
})

export default router
