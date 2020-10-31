import React, { useEffect, useState } from 'react'
import './CardHeader.scss'

const CardHeader = ({image, title})=>{



    return(

              <div
                className={`headers`}
                style={{
                  backgroundImage: `url(https://atur.biar.pw/public/${image})`,
                }}
              >
                <div className="backgrounds">
                  <div className="textBackgroundPartai">
                    {title !== 'disable' && (
                      <h2>{title}</h2>
                    )}
                  </div>
                </div>
              </div>
     
    )
}

export default CardHeader