import { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './styles';
import { useUserContext } from "../../context/useUserContext";

const LoginPage = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, user} = useUserContext();

    return(
        <Container>
            {user?.email && <h2>Bem vindo, {user.email}!</h2>}
            <>
                <Input onChangeFunction={setEmail} placeholder="Email"/>
                <Input onChangeFunction={setPassword} placeholder="Senha" type="password"/>
                <Button onClick={() => login(email, password)}>Efetuar Login</Button>
            </> 
        </Container>
    )
}

export default LoginPage