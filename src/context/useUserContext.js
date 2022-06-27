import { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie"
import { api } from "../services/api";

const UserContext = createContext({}); 

const UserProvider = ({children}) => {
    const [user, setUser] = useState({});

    const login = async (email, password) => {
        try{
            const response = await api.get('/admins/login', {params: {email, password}})
            
            if(response.data){
                setUser(response.data)
                api.defaults.headers.common["X-Admin-Token"] = response.data.authentication_token
                api.defaults.headers.common["X-Admin-Email"] = response.data.email
                Cookie.set('struct.user', JSON.stringify(response.data), {expires: 1})
                alert("Usuário logado!")
            }
        } catch(e){
            alert(e);
        }
    }

    
    useEffect(() => {
        const retrievedUser = Cookie.get('struct.user');
        if(retrievedUser){
            let parsedUser = JSON.parse(retrievedUser)
            setUser(parsedUser)
            api.defaults.headers.common["X-Admin-Token"] = parsedUser.authentication_token
            api.defaults.headers.common["X-Admin-Email"] = parsedUser.email
        }
    }, [])

    const logout = async () => {
        if(window.confirm("Tem certeza que deseja sair da sua conta?")){
            setUser({});
            Cookie.remove('struct.user');
        }
    }

    return (
        <UserContext.Provider value={{login, user, logout}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

export {useUserContext, UserProvider}