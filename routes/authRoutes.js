const {Router} = require("express")
const router = Router()
const authController = require("../controllers/authControls")





router.get("/signup", authController.signup_get )
router.post("/signup",authController.signup_post)
router.get("/login",authController.login_get)
router.post("/login",authController.login_post)



// export
module.exports = router;
