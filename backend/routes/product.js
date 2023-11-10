const Router = require('express')
const router = Router();
const {addProduct,getAllProducts,deleteProduct ,getProductByproductId , updateProduct} = require('../controllers/product');
const { verifyJWT, seller } = require('../middlewares/auth');



router.post('/addProduct', verifyJWT ,seller, addProduct)
router.put('/updateProduct/:productId', verifyJWT ,seller, updateProduct)
router.get('/getAllProducts',verifyJWT, getAllProducts)
router.get('/getProductByproductId/:productId',verifyJWT, getProductByproductId)
router.delete('/deleteProduct/:productId' ,deleteProduct)

// router.post('/test', verifyJWT,seller,(req,res)=>{
//     res.status(200).json({ msg: "welcome Selller" });
// })
// router.route('/Profile').post(protect,updateUserProfile)

module.exports = router;