import {useState} from 'react'
import { Container1 } from './styles';
import { api } from "../../services/api.js"

const PortfolioCreate = () =>{

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')

    const portfolioCreate = async (e) => {
        e.preventDefault()
        if(name && description && link){
            const response = await api.post("projects/create", {
                name,
                description,
                link
            })
            alert("sucesso")
        }
            else{
                alert("prencher todos os campos")
            }
    }


    return(
<Container1>
    <h1>Adicionar novo projeto</h1>
    <form onSubmit={portfolioCreate}>
        <input placeholder = 'Nome do projeto' onChange={(event) => setName(event.target.value)}></input>
        <input placeholder = ' Descrição' onChange={(event) => setDescription(event.target.value)}></input>
        <input placeholder = 'link' onChange={(event) => setLink(event.target.value)}></input>
        <button type ='submit'>Criar</button>
    </form>
</Container1>

)
}

export default PortfolioCreate