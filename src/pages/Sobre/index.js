import About from '../../components/About';
import MembersContainer from '../../components/MembersContainer';
import MVV from '../../components/MVV';
import {useState, useEffect} from 'react'
import { api } from '../../services/api';
import Stats from '../../components/Stats';

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
            <About/>
            <Stats/>
            <MVV/>
            <MembersContainer members={members} setMembers = {setMembers}/>
        </>
    );
}

export default Sobre