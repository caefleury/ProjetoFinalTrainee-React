import {Container} from './styles.js'
import rightarrow from '../../assets/rightarrow.png'

const Contact = () => {
    return(
        <Container>
            <div className="contato__container">
                <div className="title__container">
                    <h1 className="title">CONTATO</h1>
                </div>
                <div className="molding">
                    <div className="name">
                        <p className="title_name">NOME COMPLETO:</p>
                        <input type="text" className="input_name" placeholder='Bob Esponja'/>
                    </div>
                    <div className="email">
                        <p className="email_name">E-MAIL:</p>
                        <input type="text" className="input_name" placeholder='exemplo@email.com'/>
                    </div>
                    <div className="cellphone">
                        <p className="cellphone_name">TELEFONE:</p>
                        <input type="text" className="input_name" placeholder='(61)99999-9999'/>
                    </div>
                    <div className="date_finished">
                        <p className="date_finished_name">DATA PREVISTA DE FINALIZAÇÃO:</p>
                        <input type="date" className="input_name"/>
                    </div>
                    <div className="service_type">
                        <p className="service_type_name">TIPO DE SERVIÇO:</p>
                        <div className="servicesbox__container">
                            <div className="servicebox__container">
                                <input type="checkbox" id="sistema__web" ></input>
                                <label for="sistema_web" >SISTEMA WEB</label>
                            </div>
                            <div className="servicebox__container">
                                <input type="checkbox" id="aplicativos" ></input>
                                <label for="aplicativos" >APLICATIVOS</label>
                            </div>
                            <div className="servicebox__container">
                                <input type="checkbox" id="website" ></input>
                                <label for="website" >WEBSITE</label>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p className="description_name">DESCRIÇÃO:</p>
                        <textarea type="text" className="input_name" id="description__box"/>
                    </div>
                    <div className="value">
                        <p className="value_name">VERBA:</p>
                        <div className="budgets__container">
                            <div className="budgetbox__container">
                                <input type="checkbox" id="5k" ></input>
                                <label for="5k" >MENOS DE R$ 5.000</label>
                            </div>
                            <div className="budgetbox__container">
                                <input type="checkbox" id="5k-10k" ></input>
                                <label for="10k-20k" >ENTRE R$ 5.000 E R$ 10.000</label>
                            </div>
                            <div className="budgetbox__container">
                                <input type="checkbox" id="10k - 20k" ></input>
                                <label for="10k - 20k" >ENTRE R$ 10.000 E R$ 20.000</label>
                            </div>
                            <div className="budgetbox__container">
                                <input type="checkbox" id="20k - 30k" ></input>
                                <label for="20k - 30k" >ENTRE R$ 20.000 E R$ 30.000</label>
                            </div>
                            <div className="budgetbox__container">
                                <input type="checkbox" id="30k" ></input>
                                <label for="30k" >ACIMA DE R$ 30.000</label>
                            </div>
                        </div>
                    </div>
                    <div className="navbar__btn__container">
                        <div id="navbar__btn">ENVIAR</div>
                        <img className='arrow__img' src={rightarrow} alt='rightarrow'/>
                    </div>

                </div>
            </div>
        </Container>
    )
};

export default Contact;