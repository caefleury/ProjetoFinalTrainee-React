import About from '../../components/About';
import Footer from '../../components/Footer';
import MembersContainer from '../../components/MembersContainer';
import MVV from '../../components/MVV';
import Navbar from '../../components/Navbar';
import {useState, useEffect} from 'react'
import { api } from '../../services/api';

const Sobre = () => {
    
    //const getMembers = async () => { 
    //    const response = await api.get('/members/index');
    //    console.log(response.data);
    //}

    const [members, setMembers] = useState([])

    useEffect(()=>{
        api.get('/members/index')
        .then(response => setMembers(response.data))
    },[])

    return(
        <>
            {console.log(members)}
            <Navbar/>
            <About/>
            <MVV/>
            <MembersContainer members={members}/>
            <Footer/>
        </>
    );
}

export default Sobre