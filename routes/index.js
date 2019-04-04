let express = require('express')
const Router = express.Router()

Router.post('login', (req, res) => { // 接口
  ;(async () => {
    try {
      let { token } = { token: ' ' }
      req.cookie('token', token, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true}) // 设置token
    }catch (e) {
      console.error(e)
    }finally {

    }
  })()
})
