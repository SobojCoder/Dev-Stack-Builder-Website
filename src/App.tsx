import { Suspense } from "react"
import Bannar from "./Components/Bannar/Bannar"
import Nav from "./Components/Nav/Nav"
import Technologies from "./Components/Technologies/Technologies"
import type { TechnologiesType } from "./TechnologiesType"

const technologiesPromise= async():Promise<TechnologiesType[]> =>{
  const res = await fetch('/public/data.json')
  const data = await res.json();
  return data;
}


function App() {
  return (
    <>
    <div className="sticky top-0 z-100 bg-white">

      <Nav/>
    </div>
      <Bannar/>
      <Suspense fallback={<h2>Loading.........</h2>}>
          <Technologies technologiesPromise= {technologiesPromise()} />
      </Suspense>
    </>
  )
}

export default App
