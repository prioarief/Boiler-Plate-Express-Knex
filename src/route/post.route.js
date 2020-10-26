const express = require('express')
const router = express.Router()
const {postController} = require('../controller')
const {getPost} = postController

router.get('/', getPost )

module.exports = router