import {useState} from 'react'
import { Container1 } from './styles';
import { api } from "../../services/api.js"

const MemberCreate = () =>{

    const [name, setName] = useState('')
    const [role_id, setRoleId] = useState('')

    const memberCreate = async (e) => {
        e.preventDefault()
        if(name && role_id){
            const response = await api.post("members/create", {
                name,
                role_id
            })
            alert("sucesso")
        }
            else{
                alert("prencher todos os campos")
            }
    }


    return(
<Container1>
    <h1>Adicionar novo membro</h1>
    <form onSubmit={memberCreate}>
        <input placeholder = 'Nome do membro' onChange={(event) => setName(event.target.value)}></input>
        <input placeholder = 'Cargo' onChange={(event) => setRoleId(event.target.value)}></input>
        <button type ='submit'>Criar</button>
    </form>
</Container1>

)
}

export default MemberCreate