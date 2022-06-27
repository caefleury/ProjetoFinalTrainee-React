import { useState } from 'react';
import { Container1 } from './styles';
import {api} from "../../services/api"
import { useParams } from 'react-router-dom';

const MemberUpdate = () =>{

    const {id} = useParams()
    const [name, setName] = useState('')
    const [role_id, setRoleId] = useState('')

    const memberUpdate = async (e) => {
        e.preventDefault()
        if(name && role_id){
            const response = await api.patch(`members/update/${id}`, {
                name,
                role_id
            })
            alert("Editado com sucesso")
        }
            else{
                alert("prencher todos os campos")
            }
    }


    return(
<Container1>
    <h1>Editar membro</h1>
    <form onSubmit={memberUpdate}>
        <input placeholder='Nome' onChange={(event) => setName(event.target.value)}></input>
        <input placeholder='Cargo' onChange={(event) => setRoleId(event.target.value)}></input>
        <button type="submit">editar</button>
    </form>
</Container1>

)
}

export default MemberUpdate