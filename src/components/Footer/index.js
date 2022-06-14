import {Container} from './styles.js'
import logo from '../../assets/logoTransparentePreta.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'

const Footer = () => {
    //<a href="https://www.flaticon.com/br/icones-gratis/logotipo" title="logotipo ícones">Logotipo ícones criados por Freepik - Flaticon</a>
    //<a href="https://www.flaticon.com/br/icones-gratis/rede-social" title="rede social ícones">Rede social ícones criados por riajulislam - Flaticon</a>
    //<a href="https://www.flaticon.com/br/icones-gratis/facebook" title="facebook ícones">Facebook ícones criados por riajulislam - Flaticon</a>
    return(
        <Container>
            <footer className='footer'>
                <img id="struct__logo" src={logo} alt="logo" />
                <div className="socials__container">
                    <p>
                        Copyright © 2022 | Created by Foguete não dá ré
                    </p>
                    <div className="footer__links">
                        <img className="struct__social__link" id="linkedin" src={linkedin} alt="linkedin" />
                        <img className="struct__social__link" id="instagram" src={instagram} alt="instagram" />
                        <img className="struct__social__link" id="facebook" src={facebook} alt="facebook" />
                    </div>
                    </div>
            </footer>    
        </Container>
    )
};

export default Footer