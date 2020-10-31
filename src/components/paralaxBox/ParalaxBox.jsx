import React from 'react'
import { Link } from 'react-router-dom'
import './paralaxBox.scss'

const ParalaxBox = ({image, title, link, paralax = false}) => {
    return (
        <>
             <div
                className="container_paralax"
                style={{
                  backgroundImage: `url(https://atur.biar.pw/public/${image})`,
                  backgroundAttachment : paralax ? 'fixed' : 'unset',
                }}
              >
                <h2>{title}</h2>
                <Link className="btn lihat" to={link}>
                  <span>lihat</span>
                </Link>
              </div>

              
        </>
    )
}

export default ParalaxBox
