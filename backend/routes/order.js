const Router = require('express')
const router = Router()
const {buyProduct} = require('../controllers/order')

router.post("/buyProduct/:prodId",buyProduct)

module.exports = router