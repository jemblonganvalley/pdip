import React, { useEffect, useState } from 'react'
import './CarouselKM.scss'

const CarouselKM = ({cat=44, totalPage=3, data=data})=> {

    const [berita, setBerita] = useState(data)

    // const getDataBerita = async ()=>{
    //      const res = await fetch('https://atur.biar.pw/api/auth/app', {
    //         method :'POST',
    //         headers : {
    //             "Content-Type" : "application/json"
    //     },
    //     body : JSON.stringify({
    //                 app_id : "1555309664580",
    //                 api_secret : "4d672ce3-e422-4d8a-86ff-fabb1808a689"
    //             })
    //     })
    //     const data = await res.json()

    //     const resBerita = await fetch('https://atur.biar.pw/api/blog/data/?page=1',{
    //         method : "POST",
    //         headers : {
    //             "Content-Type" : "application/json",
    //             Authorization : `Bearer ${data.token}`
    //         },
    //         body : JSON.stringify({
    //             order :{"key":"id","value":"desc"} ,
    //             limit : totalPage,
    //             where : {"key":"blog.id_category","value":cat} 
    //         })
    //     })
    //     const dataBerita = await resBerita.json()
    //     setBerita(dataBerita.query.data)
    // }

    // useEffect(()=>{
    //     getDataBerita()
    // },[])

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
                                            <b> {e.category_child_name}</b>
                                            </h5>
                                            <h5 className="textCarousel">{e.title}</h5>
                                            {/* <p className="textCarousel" dangerouslySetInnerHTML={{ __html: e.description}}>
                                            
                                            </p> */}
                                        </div>
                                        <div className="col-lg-6 banner" style={{
                                            backgroundImage : `url(${e.image.replace('http:\/\/localhost\/PDIP\/api_backend\/public\/', 'https://www.pdiperjuangan.id/cms/')})`,
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