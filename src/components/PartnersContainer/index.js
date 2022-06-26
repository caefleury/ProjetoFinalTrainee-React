import PartnerCard from '../PartnerCard/index.js'
import {Container} from './styles.js'

const PartnersContainer = ({partners}) => {
    return(
        <Container id="PartnerPage">
            <div className='partners__container'>
                <div className="title__container">
                    <p className="subtitle">Nossos</p>
                    <span className="blue__braces">{"{ "}</span><span className="title">Parceiros</span><span className="blue__braces">{" }"}</span>
                </div>
                <div className='partners__content'>
                    {partners.map((item,index)=>(
                    <PartnerCard key={index} image_url={item.photo_url} partner_url={item.link} />
                    ))}
                </div>            
            </div>
            
        </Container>
    )
};

export default PartnersContainer