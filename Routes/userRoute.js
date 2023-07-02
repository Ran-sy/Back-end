const express = require('express')
const register = require('../Controllers/userController')

const router = express.Router()

router.post('/signup', register)

module.exports = router;