import {useState} from 'react'
import { Container1 } from './styles';
import { api } from "../../services/api.js"

const MemberAdd = () =>{

    const [member_id, setMemberId] = useState('')
    const [project_id, setProjectId] = useState('')
    const [project_role_id, setProjectRoleId] = useState('')

    const memberAdd = async (e) => {
        e.preventDefault()
        if(member_id && project_id && project_role_id){
            const response = await api.post("projects/addMemberFromProject", {
                member_id,
                project_id,
                project_role_id
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
    <form onSubmit={memberAdd}>
        <input placeholder = 'Id do membro' onChange={(event) => setMemberId(event.target.value)}></input>
        <input placeholder = 'Id do projeto' onChange={(event) => setProjectId(event.target.value)}></input>
        <input placeholder = 'Id do cargo de projeto' onChange={(event) => setProjectRoleId(event.target.value)}></input>
        <button type ='submit'>Add</button>
    </form>
</Container1>

)
}

export default MemberAdd