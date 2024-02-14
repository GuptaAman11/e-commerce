const Router = require('express');
const { verifyJWT } = require('../middlewares/auth');
const { createCart, getCartProductByUserId ,updateCart } = require('../controllers/cart');
const router = Router();


router.put('/updateCart/:productId', verifyJWT ,updateCart)
router.post('/createCart/:productId', verifyJWT ,createCart)
router.get('/getcart', verifyJWT ,getCartProductByUserId)


module.exports = router
   