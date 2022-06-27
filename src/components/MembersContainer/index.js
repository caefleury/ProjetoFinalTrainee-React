import MemberCard from '../MemberCard/index.js'
import {Container} from './styles.js'
import { Link } from "react-router-dom";

const MembersContainer =  ({members}) =>{
    return(
        <Container>
            <h1 className="title">Membros</h1>
            <div className="members__container">
                {members.map((item,index)=>(
                    <div>
                    <MemberCard key={index} name={item.name} image_url={item.photo_url} role={item.role.name}/>
                    <Link to={`/MemberPhoto/${item.id}`} >Trocar Foto</Link>
                    </div> ))}
            </div>
                    <Link to="/MemberCreate">Criar</Link>
        </Container>
    )
}

export default MembersContainer