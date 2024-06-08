import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import 'react-toastify/dist/ReactToastify.css';
import { ReactToastContainer } from './utilities/Toaster/ToastContainer.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ReactToastContainer />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)
