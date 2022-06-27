import { Container1 } from "./styles";
import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import {api} from "../../services/api.js";

const MemberAddPhoto = () => {
    let {id} = useParams()
    const [photo, setPhoto] = useState([])
    const [photo_url, setPhoto_url] = useState([])
    const [name, setName] = useState('')

    useEffect ( () => {
        api.get(`members/show/${id}`).then((response) => {
            setPhoto_url(response.data.photo_url)
            setName(response.data.name)
        })
    },[])

    const addPhoto = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo[]', photo[0])

        const response = await api.post(`members/add_photo/${id}`, formData)
        if (response.data){
            alert("foto adicionada")
            setPhoto(response.data)
        }
    }

    return(
<Container1>
    <h1>Trocar imagem a {name}</h1>
    <form onSubmit={addPhoto}>
        <input placeholder='file' type='file' onChange={(event) => setPhoto(event.target.files)}></input>
       <button type="submit">Trocar</button>
    </form>
</Container1>

)
}

export default MemberAddPhoto
