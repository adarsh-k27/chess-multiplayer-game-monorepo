import React from "react"

const lazyGameScreen= React.lazy(()=> import ("../pages/Game"))
const lazyLandingScreen= React.lazy(()=> import ("../pages/LandingPage"))
const lazyLoginScreen= React.lazy(()=> import ("../pages/login"))

    const privatePaths={
        GAME:"/game/:id"
    }

    const publicPath={
    HOME:"/",
}

const authPath={
    LOGIN:"/login"
}



export const privateRoute=[
    {   
        path:privatePaths.GAME,
        key:"GAME",
        component:lazyGameScreen,
        
    },
]


export const publicRoute=[
    {   
        path:publicPath.HOME,
        key:"HOME",
        component:lazyLandingScreen,
        
    },
    ...privateRoute,
]

export  const authRelatedRoute=[
    {
      
      path:authPath.LOGIN,
      key:"LOGIN",
      component:lazyLoginScreen,
      

    }
]


