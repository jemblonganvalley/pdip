import React from 'react'
import CardCircle from '../cardcircle/CardCircle'
import megawati from '../../img/megawati.png'

const StrukturPaginate = ()=> {
    return (
        <div className="wrapperPaginate">
            <CardCircle jabatan="Ketua Umum"
                        nama="megawati soekarnoputri"
                        image={megawati} />
        </div>
    )
}

export default StrukturPaginate