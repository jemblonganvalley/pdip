import {action, createStore, thunk} from 'easy-peasy'

export let globalState = createStore({

    // TOKEN AREA
    token : null,
    pushToken : action((state, payload)=>{
        state.token = payload
    }),
    setToken : thunk(async act=>{
        let res = await fetch('https://atur.biar.pw/api/auth/app', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                app_id : "1555309664580",
                api_secret : "4d672ce3-e422-4d8a-86ff-fabb1808a689"
            })
        })
        let data = await res.json()
        let ps = await act.pushToken(data.token)

    }),
    // END TOKEN AREA
    

    

 


})