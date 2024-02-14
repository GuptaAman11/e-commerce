const Router = require('express')
const router = Router()
const {orderProduct} = require('../controllers/address')
const { verifyJWT} = require('../middlewares/auth');


router.post("/createaddress/:userId",verifyJWT,orderProduct) 

module.exports = router