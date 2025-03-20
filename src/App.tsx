import './App.css'
import {HeaderComponent} from "./components/HeaderComponent.tsx";
import WhyUsComponents from "./components/WhyUsComponents.tsx";
import {HealthyMindBody} from "./components/HealthyMindBode.tsx";
import {GymTrainers} from "./components/GymTrainers.tsx";
import {ContactUs} from "./components/ContactUs.tsx";
import Footer from "./components/Footer.tsx";
import {HomeComponent} from "./components/HomeComponent.tsx";
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
          <HomeComponent/>
          <WhyUsComponents />
          <HealthyMindBody />
          <GymTrainers/>
          <ContactUs/>
          <Footer/>
      </>
  )
}

export default App
