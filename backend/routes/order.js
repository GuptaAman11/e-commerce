const Router = require('express')
const router = Router()
const {orderProduct} = require('../controllers/order')
const { verifyJWT} = require('../middlewares/auth');


router.post("/createOrder",verifyJWT,orderProduct) 

module.exports = router