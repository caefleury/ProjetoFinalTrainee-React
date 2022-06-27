import { useState } from 'react';
import { Container1 } from './styles';
import {api} from "../../services/api"
import { useParams } from 'react-router-dom';

const PartnersUpdate = () =>{

    const {id} = useParams()
    const [link, setLink] = useState('')
    //const [description, setDescription] = useState('')
    //const [link, setLink] = useState('')

    const PartnersUpdate = async () => {
        if(link){
            await api.patch(`partners/update/${id}`, {
                link,
            })}
            else{
                alert("prencher todos os campos")
            }
    }


    return(
<Container1>
    <h1>aaaaaaaaaaaa</h1>
    <form onSubmit={PartnersUpdate}>
        <input placeholder='Link' onChange={(event) => setLink(event.target.value)}></input>
        <button type="submit">editar</button>
    </form>
</Container1>

)
}

export default PartnersUpdate