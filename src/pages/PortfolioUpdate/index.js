import { useState } from 'react';
import { Container1 } from './styles';
import {api} from "../../services/api"
import { useParams } from 'react-router-dom';

const PortfolioUpdate = () =>{

    const {id} = useParams()
    const [name, setName] = useState('')
    //const [description, setDescription] = useState('')
    //const [link, setLink] = useState('')

    const portfolioUpdate = async (e) => {
        e.preventDefault()
        if(name){
            const response = await api.patch(`projects/update/${id}`, {
                name
            })
            alert("Editado com sucesso")
        }
            else{
                alert("prencher todos os campos")
            }
    }


    return(
<Container1>
    <h1>Editar Portifolio</h1>
    <form onSubmit={portfolioUpdate}>
        <input placeholder='Nome' onChange={(event) => setName(event.target.value)}></input>
        <button type="submit">editar</button>
    </form>
</Container1>

)
}

export default PortfolioUpdate