import HeaderComponent from "../components/HeaderComponent.tsx";
import {HomeComponent} from "../components/HomeComponent.tsx";
import WhyUsComponents from "../components/WhyUsComponents.tsx";
import {HealthyMindBody} from "../components/HealthyMindBode.tsx";
import {GymTrainers} from "../components/GymTrainers.tsx";
import {ContactUs} from "../components/ContactUs.tsx";
import Footer from "../components/Footer.tsx";
import HadelAda from "../components/HandelAdd.tsx";


export const HomeRoot = () => {
    return <>
        <HeaderComponent/>
        <HomeComponent/>
        <WhyUsComponents />
        <HealthyMindBody />
        <GymTrainers/>
        <ContactUs/>
        <Footer/>
        <HadelAda/>
    </>

}