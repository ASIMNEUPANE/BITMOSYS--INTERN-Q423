const router  = require('express').Router()
const coinsRouter = require('../modules/coins/routes')
const userRouter = require('../modules/users/routes')

router.use('/coins', coinsRouter)
router.use('/users', userRouter)


router.all('*', (req,res,next)=>{
    res.json({data:"", msg:"Route not found"})
})
module.exports= router