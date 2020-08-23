import React from 'react'
import './CardMateriPokok.scss'
import { Link } from 'react-router-dom'

const CardMateriPokok = ({ cardMateriPokokItem }) => {
    return (
        <div className="container-card-materi-pk" style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {cardMateriPokokItem.map((e) => {
                return (
                    <div className="cont-card-materi-pk">
                        <Link to={e.pageMateriPk} className="img-card-materi-pk" style={{
                            backgroundImage: `url(${e.imgMateriPk})`
                        }}>
                        </Link>
                        <div className="box-title-card-materi-pk">
                            <h5 className="txt-jdl-materi-pk">
                                {e.txtJdlMateriPk}
                            </h5>
                            <p className="txt-paragrap-materi-pk">
                                {e.txtParagrapMateriPk}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardMateriPokok