import {BehaviorSubject} from 'rxjs'
import { DefaultOptionType } from './ToastContainer'
import { ToastOptions } from 'react-toastify'

 export const  IsToaster= new BehaviorSubject<DefaultOptionType<ToastOptions>>({
    open:false,
    position:"top-right",
    autoClose:5000,
    hideProgressBar:true,
    closeOnClick:true,
    rtl:false,
    pauseOnFocusLoss:false,
    draggable:false,
    pauseOnHover:true,
    theme:"dark",
    message:""
})

