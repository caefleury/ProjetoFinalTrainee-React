import { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie"
import { api } from "../services/api";

const UserContext = createContext({}); 

const UserProvider = ({children}) => {
    const [user, setUser] = useState(undefined);

    const login = async (email, password) => {
        try{
            const response = await api.get('/admins/login', {params: {email, password}})
            
            if(response.data){
                setUser(response.data)
                api.defaults.headers.common['X-Admin-Email'] = response.data.email
                api.defaults.headers.common['X-Admin-Token'] = response.data.authentication_token
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
            setUser(JSON.parse(retrievedUser))
        }
    }, [])
    return (
        <UserContext.Provider value={{login, user}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

export {useUserContext, UserProvider}