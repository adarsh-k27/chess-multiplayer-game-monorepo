import {atom, selector} from 'recoil'


export const flipChessBoardAtom=atom({
    key:"auth-user",
    default:selector({
        key:"auth-user/default",
        async get() {
            // here we need to call the API for refresh token
            const BACKEND_URL=`http:localhost:5000/auth/refresh`
            const response=await fetch(BACKEND_URL,{
                method:"GET",
                credentials:"include",
                headers:{
                    'Content-Type':"application/json",
                }
            })
        },
    })
})

