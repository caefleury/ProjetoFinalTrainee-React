import PartnerCard from '../PartnerCard/index.js'
import {Container} from './styles.js'

const PartnersContainer = ({partners}) => {
    return(
        <Container>
            <div className='partners__container'>
                <div className="title__container">
                    <p className="subtitle">Nossos</p>
                    <p className="title">{"{ Parceiros }"}</p>
                </div>
                <div className='partners__content'>
                    {partners.map((item,index)=>(
                    <PartnerCard key={index} image_url={item.photo_url} />
                    ))}
                </div>            
            </div>
            
        </Container>
    )
};

export default PartnersContainer