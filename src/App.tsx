import './App.css'
import {HeaderComponent} from "./components/HeaderComponent.tsx";
import WhyUsComponents from "./components/WhyUsComponents.tsx";
// import {createBrowserRouter} from "react-router";

function App() {

    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //     }
    // ])

  return (
      <>
          <HeaderComponent />
          <WhyUsComponents />
      </>
  )
}

export default App
