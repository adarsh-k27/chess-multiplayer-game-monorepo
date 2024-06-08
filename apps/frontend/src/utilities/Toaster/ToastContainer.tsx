import { ToastContainer, toast,ToastOptions } from 'react-toastify';
import { IsToaster } from './rxjs';
import { useState } from 'react';
import {debounceTime} from 'rxjs'
import { data } from 'autoprefixer';
export type DefaultOptionType<T>= T & {open:boolean,message:string}

export  function ReactToastContainer() {

   const defaultOption:DefaultOptionType<ToastOptions>={
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
    }
   

   IsToaster.pipe(debounceTime(500)).subscribe((data)=>{
    if(data.open){
        debugger
        const {open,message,...remainingOptions}=data
        toast(message,remainingOptions)
    }
   })

  return (
    <>
   <ToastContainer
   position="top-right"
   autoClose={5000}
   hideProgressBar={true}
   newestOnTop={true}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss={false}
   draggable={false}
   pauseOnHover
   theme="dark"
   />
   </>
  )
}

export default ToastContainer
