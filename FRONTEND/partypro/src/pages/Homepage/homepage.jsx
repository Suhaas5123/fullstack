
import Footer from "../../components/ui/footer";
import SideBar from "../../components/ui/sidebar";
import MyComponent from "./component";
import LandingPage from "./landingpage";
import Slider from "./slider";

function Homepage() {
    return ( 
        <>
        <SideBar/>
        <LandingPage/>
        <Slider/>
        <MyComponent />
        <Footer/>
        </>
     );
}

export default Homepage;