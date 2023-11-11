const Router = require('express');
const { verifyJWT } = require('../middlewares/auth');
const { createCart } = require('../controllers/cart');
const router = Router();



router.post('/createCart/:productId', verifyJWT ,createCart)

module.exports = router
