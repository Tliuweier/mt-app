import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import passport from './utils/passport'
import User from '../dbs/model/user'
import axios from './utils/axios'
import Email from '../dbs/config'

let router = new Router({ prefix: '/users' })
let Store = new Redis().client
router.post('/signup', async (ctx) => {
  //console.log(ctx.query.code)
  const { username, password, email, code } = ctx.request.body
  console.log(username, password, email, code)
  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, 'code')
    console.log(saveCode)
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请输入正确的验证码'
      }
      return
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
    return
  }
  let user = await User.find({ username })
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '已被注册'
    }
    return
  }
  let nuser = await User.create({ username, password, email })
  console.log(nuser)
  if (nuser) {
    let res = await axios.post('/users/signin', { username, password })
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'error'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})

router.post('/getUser', async (ctx) => {
  console.log(ctx.request.body.username)
  ctx.body = {
    code: -1,
    msg: '注册失败'
  }
})
router.post('/signin',async (ctx, next) =>{
  return passport.authenticate('local', function(err, user, info, status) {
    if (err) {
      console.log(err)
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
})
router.post('/verify',async (ctx,next) => {
  let username = ctx.request.body.username
  const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
  if (saveExpire && new Date() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: '验证请求过于频繁，1分钟内1次'
    }
    return false
  }
  let transporter = nodeMailer.createTransport({
    service: 'qq',
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })
  let ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  }
  let mailOptions = {
    from: `"认证邮件"<${Email.smtp.user}>`,
    to: ko.email,
    subject: '假的美团网注册码',
    html: `你在假的美团网中注册，你的邀请码是${ko.code}`
  }
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    } else {
      Store.hmset(
        `nodemail:${ko.user}`,
        'code',
        ko.code,
        'expire',
        ko.expire,
        'email',
        ko.email
      )
    }
  })
  ctx.body = {
    code: 0,
    msg: '验证码已发送，可能会有延时，有效期1分钟'
  }
})
export default router
