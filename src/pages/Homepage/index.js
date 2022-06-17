import Home from '../../components/Home';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServicesContainer from '../../components/ServicesContainer';
import PartnersContainer from '../../components/PartnersContainer';

const Homepage = () =>{
    return(
        <>
            <Navbar/>
            <Home/>
            <ServicesContainer/>
            <PartnersContainer/>
            <Footer/>
        </>
    )
}

export default Homepage