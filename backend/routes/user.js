const Router = require('express')
const router = Router();
const { register, login } = require('../controllers/user');
const { verifyJWT, buyer, seller } = require('../middlewares/auth');



router.post('/register', register)
router.post('/login', login)
router.post('/test', verifyJWT,seller,(req,res)=>{
    res.status(200).json({ msg: "welcome Selller" });

})


// router.route('/Profile').post(protect,updateUserProfile)



module.exports = router;