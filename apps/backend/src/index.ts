import express,{ Request, Response } from "express";
import cors from 'cors'
import { initPassport } from "./passport";
import dotenv from 'dotenv'
import AuthRouter from './router/auth'
// import prisma from "@repo/db/src/index";
import passport from "passport";
import session from 'express-session'

dotenv.config()

const app=express()

const port=5000;

//passing allowed hosts via env while deploying 

const allowHosts=process.env.ALLOWED_HOSTS ? process.env.ALLOWED_HOSTS.split(",") : "*"

app.use(cors({
    origin:allowHosts,
    optionsSuccessStatus:200,
    methods:"GET,POST,PUT",
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'],
    credentials: true,
}))

app.use(
  session({
    secret: process.env.COOKIE_SECRET || 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
  }),
);



app.use(passport.initialize());
app.use(passport.authenticate('session'));



initPassport()

// async function getAllUsers() {
//   const allUsers = await prisma.user.findMany();
//   return allUsers;
// }
// getAllUsers().then((res)=>{
//   console.log('====================================');
//   console.log(res);
//   console.log('====================================');
// })




app.use('/auth',AuthRouter)


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
  });
  
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });



  

  



