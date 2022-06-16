import { Container } from "./styles";
import garotabalanco from '../../assets/garotabalanco.png'
import garotopc from '../../assets/garotopc.png'
import garotabike from '../../assets/garotabike.png'

const Services = () =>{
    return(
        <Container>
            
            <div className="services__container">
                <div className="title__container">
                    <p className="subtitle">Nossos</p>
                    <p className="title">{"{ Serviços }"}</p>
                </div>
                <div className="service_container" id="websites__container">
                    <div className="rectangle"></div>
                    <div className="text__container">
                        <h2>Websites</h2>
                        <p className="text__content">Seus serviços de maneira objetiva e atraente para os seus clientes.</p>
                    </div>
                    <img id='garotopc__img' src={garotopc} alt='garotonopc'/>
                </div>
                <div className="service_container" id="apps_container">
                    <img id='garotabike__img' src={garotabike} alt='garotonopc'/>
                    <div className="rectangle"></div>
                    <div className="text__container" id="app_content">
                        <h2 id="app__title">Aplicativos</h2>
                        <p className="text__content" >As mais diversas aplicações que rodam na palma da sua mão.</p>
                    </div>
                </div>
                <div className="service_container" id="sistems__container">
                    <div className="rectangle"></div>
                    <div className="text__container">
                        <h2>Sistemas Web</h2>
                        <p className="text__content">Seu sistema acessível de qualquer lugar.</p>
                    </div>
                    <img id='garotabalanco__img' src={garotabalanco} alt='garotonopc'/>
                </div>
            </div>
        </Container>
    )
}

export default Services