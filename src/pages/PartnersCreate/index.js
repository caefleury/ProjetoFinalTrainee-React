import { useState } from 'react';
import { Container1 } from './styles';
import {api} from "../../services/api.js"

const PartnersCreate = () =>{

    const [name, setName] = useState('')


    const partnersCreate = async () => {
        if(name){
            await api.post('projects/create', {
                name
            })}
            else{
                alert("prencher todos os campos")
            }
    }


    return(
<Container1>
    <h1>aaaaaaaaaaaa</h1>
    <form onSubmit={partnersCreate}>
        <input placeholder='Nome' onChange={(event) => setName(event.target.value)}></input>
        <button type="submit">Criar</button>
    </form>
</Container1>

)
}

export default PartnersCreate