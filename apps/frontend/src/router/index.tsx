import {  Route, RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { AuthLayout } from '../layout/authLayout'
import { AUTH_RELATED_ROUTE, PRIVATE_ROUTE, PUBLIC_ROUTE } from './path'
import { PublicLayout } from '../layout/publicLayout'
import { PrivateLayout } from '../layout/privateLayout'
import { Fragment } from 'react/jsx-runtime'



export function RouterWrapper1() {
    return (
        <Fragment>
            <Route element={<AuthLayout />} >
                {
                    AUTH_RELATED_ROUTE.map(({
                        component: Component,
                        key,
                        ...restProps
                    }) => (
                        <Route  {...restProps} element={<Component />} key={key} />
                    ))
                }
            </Route>

            <Route element={<PublicLayout />} >
                {
                    PUBLIC_ROUTE.map(({
                        component: Component,
                        key,
                        ...restProps
                    }) => (
                        <Route {...restProps} element={<Component />} key={key} />
                    ))
                }
            </Route>

            <Route element={<PrivateLayout />} >
                {
                    PRIVATE_ROUTE.map(({
                        component: Component,
                        key,
                        ...restProps
                    }) => (
                        <Route {...restProps} element={<Component />} key={key} />
                    ))
                }
            </Route>
        </Fragment>

    )
}


export const routes = createBrowserRouter(
    createRoutesFromElements(RouterWrapper1())
)

const RouterWrapper = () => (<RouterProvider router={routes} />)
export default RouterWrapper;