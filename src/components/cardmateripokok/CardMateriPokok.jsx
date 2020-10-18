import React from 'react'
import './CardMateriPokok.scss'
import { Link } from 'react-router-dom'

const CardMateriPokok = ({ cardMateriPokokItem }) => {
    return (
        <div className="container-card-materi-pk" style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        }}>
            {cardMateriPokokItem.map((e) => {
                return (
                    <div className="cont-card-materi-pk">
                        <Link to={e.pageMateriPk} className="img-card-materi-pk" style={{
                            backgroundImage: `url(${e.imgMateriPk})`,
                            borderTopLeftRadius: `${e.borderTopLeftRadius}`,
                            borderTopRightRadius: `${e.borderTopRightRadius}`
                        }}>
                        </Link>
                        <div className="box-title-card-materi-pk">
                            <small className="txt-author-card-materi-pk">
                                {e.txtAuthor}
                            </small>
                            <small className="txt-headline-card-materi-pk">
                                {e.txtHeadline}
                            </small>
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