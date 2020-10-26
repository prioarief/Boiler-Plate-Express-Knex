const express = require('express')
const router = express.Router()
const postRouter = require('./post.route')
const authRouter = require('./auth.route')

router.use('/api/post', postRouter)
router.use('/api/auth', authRouter)

module.exports = router