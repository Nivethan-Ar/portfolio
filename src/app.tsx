import { Route, Routes } from "react-router-dom";
import Home from "./pages/landing";
import Resume from "./pages/resume";

function App(){
  return(
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/resume" element={<Resume/>}/> 
    </Routes>
  )
}

export default App
