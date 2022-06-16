import Home from '../../components/Home';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Services from '../../components/Services';
import PartnersContainer from '../../components/PartnersContainer';

const Homepage = () =>{
    return(
        <>
            <Navbar/>
            <Home/>
            <Services/>
            <PartnersContainer/>
            <Footer/>
        </>
    )
}

export default Homepage