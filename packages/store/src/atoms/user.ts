import  {atom, selector} from 'recoil'


const  BACKEND_URL="http://localhost:5000"
export const userAtom=atom({
    key:"user",
    default:selector({
        key:"user/default",
        get:async()=>{
            try {
                const response = await fetch(`${BACKEND_URL}/auth/refresh`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  credentials: 'include',
                });
                if (response.ok) {
                  const data = await response.json();
                  console.log("Datas",data);
                  
                  return data;
                }
              } catch (e) {
                console.error(e);
              }
        }
    })
})