import { getCookies, setCookies, deleteCookies } from "./Cookies"
import { getLocalStorage, setLocalStorage, deleteLocalStorage } from "./Localstorage";

export const setAuthentication = (token,user) =>{

    setCookies('token',token);
    setLocalStorage('user', user);

}

export const isAuthenticated = () =>{

    if(getCookies("token") && getLocalStorage('user'))
    {   return getLocalStorage('user')}
    else
    {
        return false;
    }
 
}

export const logout = (next) =>{

    deleteCookies('token')
    deleteLocalStorage('user')
    next()
}

    

