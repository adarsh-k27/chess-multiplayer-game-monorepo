import { Suspense } from "react";
import { Loader } from "./components/Loader";
import RouterWrapper from "./router";
//import {useUser} from '@repo/store/useUser'
function testDoc(){
  console.log("Hello log");
}
testDoc()
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterWrapper />
    </Suspense>
  )
}
export default App
