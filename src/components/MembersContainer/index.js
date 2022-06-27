import MemberCard from '../MemberCard/index.js'
import {Container} from './styles.js'
import { Link } from "react-router-dom";
import { api } from '../../services/api.js';
import {useUserContext} from '../../context/useUserContext'

const MembersContainer =  ({members, setMembers}) =>{
    
    const {user} = useUserContext()

    const deleteMember = (id) => {
        api.delete(`members/delete/${id}`)
        .then((response) => {
            alert(`membro deletado`) 
            setMembers(members.filter(p => p.id !== id))
    
        })
        }
    
    return(
        <Container user={Object.keys(user).length !== 0}>
            <h1 className="title">Membros</h1>
            <div className="members__container">
                {members.map((item,index)=>(
                    <div>
                    <MemberCard key={index} name={item.name} image_url={item.photo_url} role={item.role.name}/>
                    <Link className="BotaoMembroFoto" to={`/MemberPhoto/${item.id}`}>Trocar Foto</Link>
                    <Link className="BotaoMembroUpdate" to={`/MemberUpdate/${item.id}`}>Atualizar</Link>
                    <button className="BotaoMembroDelete" type="button" onClick={() => {deleteMember(item.id)}}> Apagar </button>
                    </div> ))}
            </div>
                    <Link className="BotaoMembroCreate" to="/MemberCreate">Criar</Link>
        </Container>
    )
}

export default MembersContainer