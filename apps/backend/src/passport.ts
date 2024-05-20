import dotenv from 'dotenv'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import passport from "passport";
import DB from '@repo/db/src/index'
dotenv.config()

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "your client scecret"


export function initPassport() {
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    throw new Error(
      'Missing environment variables for authentication providers',
    );

  }

  passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
    async function (accessToken: any, refreshToken: any, profile: any, cb: any) {
      
      const user_details = {
        provider: profile.provider ?? "google",
        email: profile.emails[0]?.value,
        username: profile?.name?.givenName,
        name: profile?.name?.givenName,
      }
      try {
        const res = await DB.user.upsert({
          where: { email: user_details.email },
          create: user_details,
          update: { name: user_details.name },
        });
        cb(null, res);
      } catch (error) {
        
        console.log("ERROR", error);
        
      }
      // here we nned to add a logic for login ang register
    }
  ));



  passport.serializeUser(function(user:any, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username, name: user.name });
    });
  });
  
  passport.deserializeUser(function(user:any, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });
  

}