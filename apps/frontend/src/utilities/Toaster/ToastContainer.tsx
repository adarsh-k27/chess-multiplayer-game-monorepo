import { ToastContainer, toast } from 'react-toastify';
import { IsToaster } from './rxjs';
import {debounceTime} from 'rxjs'
export type DefaultOptionType<T>= T & {open:boolean,message:string}

export  function ReactToastContainer() {

  //  const defaultOption:DefaultOptionType<ToastOptions>={
  //   open:false,
  //   position:"top-right",
  //   autoClose:5000,
  //   hideProgressBar:true,
  //   closeOnClick:true,
  //   rtl:false,
  //   pauseOnFocusLoss:false,
  //   draggable:false,
  //   pauseOnHover:true,
  //   theme:"dark",
  //   message:""
  //   }
   

   IsToaster.pipe(debounceTime(500)).subscribe((data)=>{
    if(data.open){
        const {message,...remainingOptions}=data
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
