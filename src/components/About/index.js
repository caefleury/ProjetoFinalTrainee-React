import {Container} from './styles.js'
import avatar from '../../assets/avatar_transparente.png'

const About = () => {
    const struct = "{ Struct }"
    return(
        <Container>
            <div class="sobre__container">
                <div class="title__container">
                    <p class="subtitle">Sobre a</p>
                    <h1 class="title">{struct}</h1>
                </div>
                <p class="text__container1">
                    Struct é uma Empresa Júnior inserida em ambiente universitário e com
                    base no curso de Engenharia de Computação da UnB. Nossa equipe é
                    composta por desenvolvedores capacitados, em formação acadêmica de
                    qualidade, com experiência empreededora no movimento empresarial júnior.
                    <br />
                    <br />
                    Unimos a solidez do conhecimento científico acadêmico à versatilidade
                    das tecnologias de ponta atuais no mercado.
                    <br />
                    <br />
                    A empresa, jovial como o curso de Engenharia de Computação, tem cumprido
                    o objetivo de entregar produtos atuais e com elevada qualidade.
                </p>
            </div>
                <div class="somos__container">
                <p class="text__container2">
                    Somos a {struct}, empresa junior de Engenharia de Computação da UnB! Mas
                    o que é uma empresa junior?
                    <br />
                    <br />
                    Uma Empresa Junior (EJ) é uma empresa criada, gerida e mantida por
                    alunos universitários, com o objetivo de ter um ambiente que provê uma
                    vivência empresarial aos estudantes.
                    <br />
                    <br />
                    No mercado desde 2014, a {struct} busca proporcionar soluções com as
                    tecnologias mais atualizadas no mercado, prezando sempre pela qualidade
                    e satisfação do cliente.
                </p>
                <img id="avatar" src={avatar} alt="avatar" />
                </div>
        </Container>
    )
};

export default About