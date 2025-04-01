import './App.css'
import {Route, Routes} from "react-router-dom";
import {HomeRoot} from "./roots/HomeRoot.tsx";
import {WhyUsRoot} from "./roots/WhyUsRoot.tsx";
import {TrainersRoot} from "./roots/TrainersRoot.tsx";
import {ContactRoot} from "./roots/ContactRoot.tsx";


function App() {

  return (
      <>
              <Routes>
                  <Route path="/" element={<HomeRoot />} />
                  <Route path="/why" element={<WhyUsRoot />} />
                  <Route path="/Trainers" element={<TrainersRoot />} />
                  <Route path="/contact" element={<ContactRoot />} />

              </Routes>

      </>
  )
}

export default App
