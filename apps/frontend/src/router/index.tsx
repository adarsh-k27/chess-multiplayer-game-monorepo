import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../layout/authLayout'
import { AUTH_RELATED_ROUTE, PRIVATE_ROUTE, PUBLIC_ROUTE } from './path'
import { PublicLayout } from '../layout/publicLayout'
import { PrivateLayout } from '../layout/privateLayout'

type Props = {}

export default function RouterWrapper({}: Props) {
    return (
        <BrowserRouter>
          <Routes>
            {/* <Route path="/login" element={Boolean(user) ?  <Navigate to={"/"} /> : <LoginScreen />}  />
            
            <Route path="/game/:id" element={ <Layout children={<Game />} />} />
            <Route path="/" element={<Layout children={<LandingPage />} />} /> */}
            <Route  element={<AuthLayout />} >
               {
                AUTH_RELATED_ROUTE.map(({
                  component:Component,
                  ...restProps
                })=>(
                  <Route {...restProps}  element={<Component />} />
                ))
               }
            </Route>
    
            <Route  element={<PublicLayout />} >
               {
                PUBLIC_ROUTE.map(({
                  component:Component,
                  ...restProps
                })=>(
                  <Route {...restProps}  element={<Component />} />
                ))
               }
            </Route>
    
            <Route  element={<PrivateLayout />} >
               {
                PRIVATE_ROUTE.map(({
                  component:Component,
                  ...restProps
                })=>(
                  <Route {...restProps}  element={<Component />} />
                ))
               }
            </Route>
          </Routes>
        </BrowserRouter>
      )
}