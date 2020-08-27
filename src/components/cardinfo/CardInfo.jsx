import React from 'react'
import './CardInfo.scss'
import { Link } from 'react-router-dom'

const CardInfo = ({info}) => {
  return (
    <>
            {info.map((e)=> {
                return (
                    <div className="cardInfo">
                        <Link className="imgCardInfo" style={{
                            background : `url(${e.images})`,
                            backgroundSize : 'cover',
                            textDecoration : 'none'
                        }}>

                            
                        </Link>

                        <div className="textInfo">
                            <small className="textSmall">{e.headline}</small>
                            <h5 className="textH5">{e.isi}</h5>
                        </div>
                    </div>
                )
            })}
        </>
  )
}

export default CardInfo
