import JWT, { JsonWebTokenError } from 'jsonwebtoken'
import {APPError} from '../Errorhandler'
const JWT_SCECRET=process.env.JWT_SCECRET || "your_secret_key"
export const decodeToken=(token:string)=>{
  try {
    let parsedToken= JWT.verify(token,JWT_SCECRET) as {userId:string}
  return parsedToken.userId
  } catch (error:any) {
    if (error instanceof JsonWebTokenError) {
      
      return new APPError(error.name,403,true,error.message)
      
    }
  }
  
}