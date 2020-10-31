import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

export default function GlobalMenu({children}) {

    const [menu, setMenu] = useState([])
    useEffect(() => {
        const getApiMenu = async ()=>{

            const resToken = await fetch('', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    app_id : "1555309664580",
                    api_secret : "4d672ce3-e422-4d8a-86ff-fabb1808a689"
                })
            })

            const token = await resToken.json()

            const res = await fetch('https://atur.biar.pw/api/web/config',{
                method : 'POST',
                headers : {
                    "Contente-Type" : "application/json",
                    Authhorization : `Bearer ${token.query}`
                }
            })
        }
    }, [])
    return (
        <>
            {children}
        </>
    )
}

