import React, { useState, useEffect } from 'react'
import CardCircle from '../cardcircle/CardCircle'
import megawati from '../../img/megawati.png'
import './StrukturPaginate.scss'

const StrukturPaginate = () => {

    let [struktur, setStruktur] = useState([
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        },
        {
            image: 'megawati.png',
            jabatan: 'Ketua Umum',
            nama: 'Megawati Soekarnoputri'
        }
    ])


    // useEffect(()=> {
    //     fetch("http://localhost:3005/pagination", {
    //         method : 'GET',
    //         mode : 'cors',
    //         headers : {
    //             "Content-Type" : "application/json"
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         setStruktur(data)
    //     })
    // }, [])

    // const struktur = [
    //     {
    //         image : megawati,
    //         jabatan : 'Ketua Umum',
    //         nama : 'Megawati Soekarnoputri'
    //     }
    // ]

    return (
        <div className="wrapperPaginate" style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            {struktur.map((e) => {
                return (
                    <CardCircle image={e.image}
                        jabatan={e.jabatan}
                        nama={e.nama} />
                )
            })}

            <nav aria-label="Page navigation example" style={{
                marginTop: '10px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>

                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link prevnext" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                        </a>
                    </li>
                    <li className="page-item active" ><a className="page-link" href="/partai" >01</a></li>
                    <li className="page-item">
                        <a className="page-link prevnext" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default StrukturPaginate