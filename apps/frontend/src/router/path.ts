import React from "react"
import Game from "../pages/Game"
import LandingPage from "../pages/LandingPage"
import LoginScreen from "../pages/login"

const LAZY_GAME_SCREEN= React.lazy(()=> import ("../pages/Game"))
const LAZY_LANDING_SCREEN= React.lazy(()=> import ("../pages/LandingPage"))
const LAZY_LOGIN_SCREEN= React.lazy(()=> import ("../pages/login"))

const PRIVATE_PATHS={
    GAME:"/game/:id"
}

const PUBLIC_PATH={
    HOME:"/",
}

const AUTH_PATH={
    LOGIN:"/login"
}



export const PRIVATE_ROUTE=[
    {
        path:PRIVATE_PATHS.GAME,
        key:"GAME",
        component:LAZY_GAME_SCREEN
    }
]


export const PUBLIC_ROUTE=[
    {
        path:PUBLIC_PATH.HOME,
        key:"HOME",
        component:LAZY_LANDING_SCREEN

    }
]

export  const AUTH_RELATED_ROUTE=[
    {
      path:AUTH_PATH.LOGIN,
      name:"LOGIN",
      component:LAZY_LOGIN_SCREEN
    }
]

