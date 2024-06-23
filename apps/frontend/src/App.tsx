import { Suspense } from "react";
import { Loader } from "./components/Loader";
import RouterWrapper from "./router";
//import {useUser} from '@repo/store/useUser'

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterWrapper />
    </Suspense>
  )
}
export default App
