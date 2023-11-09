const Router = require('express')
const router = Router();
const {addProduct,getAllProducts,deleteProduct} = require('../controllers/product');



router.post('/addProduct', addProduct)
router.get('/getAllProducts', getAllProducts)
router.post('/deteleProduct',deleteProduct)

// router.post('/test', verifyJWT,seller,(req,res)=>{
//     res.status(200).json({ msg: "welcome Selller" });

// })


// router.route('/Profile').post(protect,updateUserProfile)



module.exports = router;