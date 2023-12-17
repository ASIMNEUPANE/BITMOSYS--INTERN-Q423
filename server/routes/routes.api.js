const router  = require('express').Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)


router.all('*', (req,res,next)=>{
    res.json({data:"", msg:"Route not found"})
})
module.exports= router