import { Router } from "express";
import passport from "passport";
import {Request,Response} from '../types/index'
import db from '@repo/db/src/index'
import jwt from 'jsonwebtoken';

const router=Router()

const CLIENT_URL =
  process.env.AUTH_REDIRECT_URL ?? 'http://localhost:5173/';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

  router.get('/refresh', async (req: Request, res: Response) => {
    console.log("hello",req.sessionID);
    console.log("hello1",req.user);
    console.log("hello3",req.isAuthenticated())
    
    if (req.user) {
      const user = req.user as any;
      console.log('====================================');
      console.log("USER",user);
      console.log('====================================');
      // Token is issued so it can be shared b/w HTTP and ws server
      // Todo: Make this temporary and add refresh logic here
  
      const userDb = await db.user.findFirst({
        where: {
          id: user.id,
        },
      });
  
      const token = jwt.sign({ userId: user.id }, JWT_SECRET);
      res.json({
        token,
        id: user.id,
        name: userDb?.name,
      });
    } else {
      res.status(401).json({ success: false, message: 'Unauthorized' });
    }
  });
  


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

  
  








  



 




