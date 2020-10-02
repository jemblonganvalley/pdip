import React, { useEffect, useState } from 'react'
import './CarouselKM.scss'
import megawati4 from '../../img/megawati4.jpg'
import megawati3 from '../../img/megawati3.jpg'

const CarouselKM = ()=> {

    const [berita, setBerita] = useState([])

    const getDataBerita = async ()=>{
         const res = await fetch('https://atur.biar.pw/api/auth/app', {
            method :'POST',
            headers : {
                "Content-Type" : "application/json"
        },
        body : JSON.stringify({
                    app_id : "1555309664580",
                    api_secret : "4d672ce3-e422-4d8a-86ff-fabb1808a689"
                })
        })
        const data = await res.json()

        const resBerita = await fetch('https://atur.biar.pw/api/blog/data/?page=1',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            },
            body : JSON.stringify({
                order :{"key":"id","value":"desc"} ,
                limit : 3,
                where : {"key":"blog.id_category","value":"44"} 
            })
        })
        const dataBerita = await resBerita.json()
        setBerita(dataBerita.query.data)
    }

    useEffect(()=>{
        getDataBerita()
    },[])

    return (
        <div className="wrapperKM">
            <div className="KM">
                <div className="row rowCustom">
                    <div className="carousels">
                        

                    <div id="carouselnih" className="carousel slide kmCarousel" data-ride="carousel">

                            <ol className="carousel-indicators">
                                <li data-target="#carouselnih" data-slide-to={0} className="active" />
                                <li data-target="#carouselnih" data-slide-to={1} />
                                <li data-target="#carouselnih" data-slide-to={2} />
                            </ol>

                            <div className="carousel-inner">
                            {berita.map((e,i)=>(
                                    <div className={`carousel-item ${i == 1 && 'active'} itemKM`}>
                                        <div className="col-lg-6 textKM">
                                            <h5 className="textCarousel">
                                            <b> Ketua Umum PDI Perjuangan</b>
                                            </h5>
                                            <h1 className="textCarousel">{e.title}</h1>
                                            {/* <p className="textCarousel" dangerouslySetInnerHTML={{ __html: e.description}}>
                                            
                                            </p> */}
                                        </div>
                                        <div className="col-lg-6 banner" style={{
                                            backgroundImage : `url(https://www.pdiperjuangan.id/cms/${e.path})`,
                                            backgroundSize : 'cover'
                                        }}></div>
                                    </div>

                                    ))}
                            </div>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselKM