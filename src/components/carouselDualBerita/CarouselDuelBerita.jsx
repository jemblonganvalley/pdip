import React, {useState, useEffect} from 'react'
import './carouselDual.scss'

export const CarouselDuelBerita = ({
    cat1 = 45, 
    cat2 = 46, 
    totalPage=3,
    data=null,
    current_page=null,

}) => {

    const [berita1, setBerita1] = useState([])
    const [berita2, setBerita2] = useState([])

    const getDataBerita = async ()=>{
        var res = await fetch('https://atur.biar.pw/api/auth/app', {
            method :'POST',
            headers : {
                "Content-Type" : "application/json"
        },
        body : JSON.stringify({
                    app_id : "1555309664580",
                    api_secret : "4d672ce3-e422-4d8a-86ff-fabb1808a689"
                })
        })
        var data = await res.json()

        // GET BERITA 44
        var resBerita = await fetch('https://atur.biar.pw/api/blog/data/?page=1',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            },
            body : JSON.stringify({
                order :{"key":"id","value":"desc"} ,
                limit : 5,
                where : {"key":"blog.id_category","value":cat1} 
            })
        })
        var dataBerita = await resBerita.json()
        setBerita1(dataBerita.query.data)

        // GET BERITA 46
        var resBerita = await fetch('https://atur.biar.pw/api/blog/data/?page=1',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            },
            body : JSON.stringify({
                order :{"key":"id","value":"desc"} ,
                limit : 5,
                where : {"key":"blog.id_category","value":cat2} 
            })
        })
        var dataBerita = await resBerita.json()
        setBerita2(dataBerita.query.data)
    }

    useEffect(()=>{
        getDataBerita()
    },[])


    return (
        <div className='mainCarouselDual'>
            
            {/* Carousel 1 */}
            <div id="carouselDualSatu " className="carousel slide mainCarouselDual_car1" data-ride="carousel">
            <div className="carousel-inner">

                {data.map((e,i)=>(
                    <div className={`carousel-item ${i == 1 && 'active'}`}>
                        <span className='carouselDual_title' style={{
                            position : 'absolute',
                            width : '100%',
                            padding : '30px',
                            bottom : '0',
                            zIndex : '100',
                            color : 'white',
                            wordWrap : 'break-word',
                        }}>
                            {/* <p style={{
                                padding : '0',
                                margin : '0',
                                fontWeight : '600',
                                }}>{e.title}</p> */}
                            <small style={{padding : '0'}}>{e.author}</small> | &nbsp;
                            <small style={{padding : '0'}}>{e.created_at}</small>

                            <h4>{e.title}</h4>

                        </span>

                        <span className="gradientOverlay" style={{
                            width : '100%',
                            height : '100%',
                            backgroundColor : 'rgba(0,0,0,0.500)',
                            position : 'absolute',
                            background: `linear-gradient(176deg, rgba(0,0,0,0.7147233893557423) 0%, rgba(255,0,0,1) 100%)`,
                            // backgroundBlendMode : 'multiply',
                            
                        }}></span>

                        <img src={`https://www.pdiperjuangan.id/cms/${e.path}`} className="d-block w-100 carouselDual1Image" alt="..." key={i} style={{
                            width : '100%',
                            height : '45vh',
                            objectFit : 'cover',
                            objectPosition : 'center',

                        }}/>
                    </div>
                ))}

            </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

            {/* CAROUSEL 2 */}
            <div id="carouselExampleControls" className="carousel slide mainCarouselDual_car2" data-ride="carousel">
            <div className="carousel-inner">
                 {data.map((e,i)=>(
                    <div className={`carousel-item ${i == 1 && 'active'}`}>
                        <span className='carouselDual_title' style={{
                            position : 'absolute',
                            width : '90%',
                            padding : '30px',
                            bottom : '0',
                            zIndex : '100',
                            color : 'white',
                            wordWrap : 'break-word',
                        }}>
                            {/* <p style={{
                                padding : '0',
                                margin : '0',
                                fontWeight : '600',
                                }}>{e.category_child_name}</p> */}

                            <small style={{padding : '0'}}>{e.author}</small> | &nbsp;
                            <small style={{padding : '0'}}>{e.created_at}</small>
                            <h4>{e.title}</h4>
                          

                        </span>
                        
                        {/* 
                        <span className="gradientOverlay" style={{
                            width : '100%',
                            height : '100%',
                            backgroundColor : 'rgba(0,0,0,0.500)',
                            position : 'absolute',
                            background: `linear-gradient(176deg, rgba(0,0,0,0.28335084033613445) 0%, rgba(255,0,0,1) 100%)`,
                            
                        }}></span> */}

                        <img src={`https://www.pdiperjuangan.id/cms/${e.path}`} className="d-block w-100 carouselDual1Image" alt="..." key={i} style={{
                            width : '100%',
                            height : '45vh',
                            objectFit : 'cover',
                            objectPosition : 'center',

                        }}/>
                    </div>
                ))}



            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
            </div>




        </div>
    )
}
