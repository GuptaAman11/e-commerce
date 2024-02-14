const Router = require('express')
const router = Router()
const {orderProduct} = require('../controllers/order')
const { verifyJWT} = require('../middlewares/auth');


router.post("/createOrder/:productId",verifyJWT,orderProduct) 

module.exports = router