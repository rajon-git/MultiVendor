import MainLayout from '../../layout/MainLayout'
import {privetRoutes} from './privateRoutes'
export const getRoutes = ()=>{
    return{
        path: '/',
        element: <MainLayout/>,
        children: privetRoutes
    }
}