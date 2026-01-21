'use client'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext()


const ContextProvider = ({ children }) => {


    const [categories, setCategories] = useState([])

    const fethcCategory = async () => {
        try {
            const response= await axios.get('/api/category', {withCredentials:true})
            setCategories(response.data.payload)
        } catch (error) {
            console.log(error)
            setCategories([])
            
        }
    }




    useEffect(()=>{
        fethcCategory()
    },[])

    const contextValue = {
        categories,
    }
    return <Context.Provider value={contextValue}>
        {children}
    </Context.Provider>
}


export default ContextProvider
