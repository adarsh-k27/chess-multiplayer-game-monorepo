import {  Route, RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { AuthLayout } from '../layout/authLayout'
import { authRelatedRoute, privateRoute, publicRoute } from './path'
import { PublicLayout } from '../layout/publicLayout'
import { PrivateLayout } from '../layout/privateLayout'
import { Fragment } from 'react/jsx-runtime'



export function RouterWrapper1() {
    return (
        <Fragment>
            <Route element={<AuthLayout />} >
                {
                    authRelatedRoute.map(({
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
                    publicRoute.map(({
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
                    privateRoute.map(({
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