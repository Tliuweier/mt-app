import Router from 'koa-router'
import axios from './utils/axios'
import GoodsDetail from '../dbs/model/gooddetails'
let router = new Router({ prefix: '/goodsdetail' })

router.get('/getGoodsDetail', async ctx => {
  let dealId = { dealId: 51588402 }
  let result = await GoodsDetail.find(dealId)
  //console.log(result)
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
router.get('/getcomment', async ctx => {
  let page = Number(ctx.query.page)
  let dealId = { dealId: 51588402 }
  let condition = { comment: 1, _id: 0 }
  let result = await GoodsDetail.aggregate(
    [
      { $match: dealId },
      {
        $project: {
          'comment.comments': {
            $slice: ['$comment.comments', (page - 1) * 8, 8 * page]
          },
          _id: 0,
          'comment.tags': 1,
          'comment.count': 1
        }
      }
    ],
    function(err, result) {
      if (err) {
        //console.log(err)
        return
      }
    }
  )
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
