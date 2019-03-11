import Router from 'koa-router'
import axios from './utils/axios'
import pageModel from '../dbs/model/page'

let router = new Router({ prefix: '/pages' })

router.get('/getPage', async ctx => {
  let page = Number(ctx.query.page)
  let rows = Number(ctx.query.rows)
  let query = await pageModel
    .find({})
    .limit(rows)
    .skip((page - 1) * rows)
  // let result = await pageModel.aggregate
  ctx.body = {
    data: query
  }
})
export default router
