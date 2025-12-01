import { useState } from "react"


export const useLocalStorage = () => {
    const [isAuth, setIsAuth] = useState(false)


    const userId = localStorage.getItem('userId')
    console.log(userId);


    if (userId) {
        return userId
    } else {
        return false
    }

}