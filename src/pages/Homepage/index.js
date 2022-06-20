import Home from '../../components/Home';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServicesContainer from '../../components/ServicesContainer';
import PartnersContainer from '../../components/PartnersContainer';
import {useState, useEffect} from 'react'
import { api } from '../../services/api';

const Homepage = () =>{
    const [partners, setPartners] = useState([])

    useEffect(()=>{
        api.get('/partners/index')
        .then(response => setPartners(response.data))
    },[])

    return(
        <>
            {console.log(partners)}
            <Navbar/>
            <Home/>
            <ServicesContainer/>
            <PartnersContainer partners={partners}/>
            <Footer/>
        </>
    )
}

export default Homepage