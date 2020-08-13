import {action, createStore, thunk} from 'easy-peasy'

export let globalState = createStore({

    // API BLOG CATEGORIES
    blogCategory : [],
    pushBlogCategory : action((state, payload)=>{
        state.blogCategory = payload
    }),
    setBlogCategory : thunk(async actions=>{
        var res = await fetch('https://cms.biar.pw/api/blog/category/merger', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9jbXMuYmlhci5wd1wvYXBpXC9hdXRoXC9hcHAiLCJpYXQiOjE1OTcyNjYxNTQsImV4cCI6MTU5NzM1MjU1NCwibmJmIjoxNTk3MjY2MTU0LCJqdGkiOiJOOUl3MDd4S2VrNXc1bVdIIiwic3ViIjoxNCwicHJ2IjoiOGZmNjMwYTAwY2E0YTNlYWY2ZjI1NGY1YWJlNWFiMWJlZWQyNzI0OSJ9.Pu29QRdPec2vdkhdCJx1fhzyuIfIZv3wI7m9Q_ZS5EU"
            }
        })
        var data = await res.json()
        actions.pushBlogCategory(data.query)
    }),

   





})