import { Router } from "express";
import passport from "passport";
import {Request,Response} from '../types/index'
const router=Router()




//clientId= 147990581667-bdf0r6kfl7h1uctgeel8jrtqflbe4c94.apps.googleusercontent.com
//client-scecret = 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
// check How Passport will work and add a logic for login and Authentication

const CLIENT_URL =
  process.env.AUTH_REDIRECT_URL ?? 'http://localhost:5173/';


  router.get('/login/failed',(req:Request,res:Response)=>{
    return res.status(401).json({success:false,message:'FAILED'})
 })


router.get('/google/callback',passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: 'http://localhost:5173/login/failed',
  }),)



router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }),
  );


  export default router;

  
  








  



 




