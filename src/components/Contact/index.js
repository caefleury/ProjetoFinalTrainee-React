import {Container} from './styles.js'

const Contact = () => {
    return(
        <Container>
            <div class="contato__container">
                <div class="title__container">
                    <h1 class="title">CONTATO</h1>
                </div>
                <div class="molding">

                <div class="name">
                    <p class="title_name">NOME COMPLETO:</p>
                </div>
                <div class="email">
                    <p class="email_name">E-MAIL:</p>
                </div>
                <div class="cellphone">
                    <p class="cellphone_name">TELEFONE:</p>
                </div>
                <div class="date_finished">
                    <p class="date_finished_name">DATA PREVISTA DE FINALIZAÇÃO:</p>
                </div>
                <div class="service_type">
                    <p class="service_type_name">TIPO DE SERVIÇO:</p>
                </div>
                <div class="description">
                    <p class="description_name">DESCRIÇÃO:</p>
                </div>
                <div class="value">
                    <p class="value_name">VERBA:</p>
                </div>

                </div>
                <p class="text__container1">
                    Olá
                    <br />
                    <br />
                    Teste
                    <br />
                    <br />
                    Teste2
                </p>

            </div>
        </Container>
    )
};

export default Contact;