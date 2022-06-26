import { Container1 } from "./styles";
import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import {api} from "../../services/api.js";

const ProjectAddPhoto = () => {
    let {id} = useParams()
    const [photo, setPhoto] = useState([])
    const [photo_url, setPhoto_url] = useState([])
    const [name, setName] = useState('')

    useEffect ( () => {
        api.get(`projects/show/${id}`).then((response) => {
            setPhoto_url(response.data.photo_url)
            setName(response.data.name)
        })
    },[])

    const addPhoto = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo[]', photo[0])

        const response = await api.post(`projects/add_photo/${id}`, formData)
        if (response.data){
            alert("foto adicionada")
            setPhoto(response.data)
        }
    }

    return(
<Container1>
    <h1>Adicionar imagem a {name}</h1>
    <form onSubmit={addPhoto}>
        <input placeholder='file' type='file' onChange={(event) => setPhoto(event.target.files)}></input>
       <button type="submit">Adicionar</button>
    </form>
</Container1>

)
}

export default ProjectAddPhoto
