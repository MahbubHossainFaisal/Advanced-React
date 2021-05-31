import React, {useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email,password) => { },
    onLogout: () => { }
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const userLoggedInInformation = localStorage.getItem('isLoggedIn')
        if (userLoggedInInformation === '1') {
            setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext

