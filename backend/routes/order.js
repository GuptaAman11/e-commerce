const Router = require('express')
const router = Router()
const {buyProduct} = require('../controllers/order')
const { verifyJWT} = require('../middlewares/auth');


router.post("/buyProduct/:prodId",verifyJWT,buyProduct) //test  http://localhost:8000/api/v1/order/buyProduct/

module.exports = router