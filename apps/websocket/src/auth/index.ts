import JWT from 'jsonwebtoken'
const JWT_SCECRET=process.env.JWT_SCECRET || "your_secret_key"
export const decodeToken=(token:string)=>{
  let parsedToken= JWT.verify(token,JWT_SCECRET) as {userId:string}
  return parsedToken.userId
}