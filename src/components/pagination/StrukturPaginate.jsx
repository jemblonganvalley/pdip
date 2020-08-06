import React from 'react'
import CardCircle from '../cardcircle/CardCircle'
import megawati from '../../img/megawati.png'
import './StrukturPaginate.scss'

const StrukturPaginate = ()=> {
    return (
        <div className="wrapperPaginate" style={{
            display : 'flex',
            justifyContent : 'center',  
            flexWrap : 'wrap'
        }}>
            <CardCircle jabatan="Ketua Umum"
                        nama="megawati soekarnoputri"
                        image={megawati} />

            <CardCircle jabatan="Ketua Umum"
                        nama="megawati soekarnoputri"
                        image={megawati} />

            <CardCircle jabatan="Ketua Umum"
                        nama="megawati soekarnoputri"
                        image={megawati} />
            <CardCircle jabatan="Ketua Umum"
                        nama="megawati soekarnoputri"
                        image={megawati} />
            <CardCircle jabatan="Ketua Umum"
                        nama="megawati soekarnoputri"
                        image={megawati} />
            <CardCircle jabatan="Ketua Umum"
                        nama="megawati soekarnoputri"
                        image={megawati} />
            <CardCircle jabatan="Ketua Umum"
                        nama="megawati soekarnoputri"
                        image={megawati} />
            <CardCircle jabatan="Ketua Umum"
                        nama="megawati soekarnoputri"
                        image={megawati} />
            <CardCircle jabatan="Ketua Umum"
                        nama="megawati soekarnoputri"
                        image={megawati} />
            <CardCircle jabatan="Ketua Umum"
                        nama="megawati soekarnoputri"
                        image={megawati} />
            <CardCircle jabatan="Ketua Umum"
                        nama="megawati soekarnoputri"
                        image={megawati} />
            <CardCircle jabatan="Ketua Umum"
                        nama="megawati soekarnoputri"
                        image={megawati} />

                        <nav aria-label="Page navigation example" style={{
                            marginTop : '10px',
                            width : '100%',
                            display : 'flex',
                            justifyContent : 'center'
                        }}>
                        <ul className="pagination">
                            <li className="page-item">
                            <a className="page-link prevnext" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="/partai" >01</a></li>
                            <li className="page-item "><a className="page-link list" href="/partai" >01</a></li>
                            <li className="page-item "><a className="page-link list" href="/partai" >01</a></li>
                            <li className="page-item "><a className="page-link list" href="/partai" >01</a></li>
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