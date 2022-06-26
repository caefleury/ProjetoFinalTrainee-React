import PartnerCard from '../PartnerCard/index.js'
import {Container} from './styles.js'
import { api } from '../../services/api.js';
import { Link } from "react-router-dom";

const PartnersContainer = ({partners}) => {

    const deletePartner = (id) => {
            api.delete(`partners/delete/${id}`)
            .then((response) => alert(`parceiro deletado`))
            }
    return(
        <Container id="PartnerPage">
            <div className='partners__container'>
                <div className="title__container">
                    <p className="subtitle">Nossos</p>
                    <span className="blue__braces">{"{ "}</span><span className="title">Parceiros</span><span className="blue__braces">{" }"}</span>
                </div>
                <div className='partners__content'>
                    {partners.map((item,index)=>(
                        <PartnerCard key={index} image_url={item.photo_url}>
                            <button type="button" onClick={() => {deletePartner(item.id)}}> Apagar </button>
                            <Link to="/PartnersCreate" className="navbar__link" onClick={() => {window.location.href="/ParnersCreate"}}>Partners</Link>
                            <Link to={`/PartnersUpdate/${item.id}`} >PartnersUpdate</Link>
                        </PartnerCard>
                    ))}
                </div>            
            </div>
            
        </Container>
    )
};

export default PartnersContainer