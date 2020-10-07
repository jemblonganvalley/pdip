import React from 'react'
import './MainCards.scss'
import { Link } from 'react-router-dom'

const CardVideo = ({ page, margin, imageCard, textSmall, TextH5, borderRadius, paragrap, icons, classIcon, href, h5Font, h5Weight, TextH6, paragrapSize, width, dateTime, textCategoryChild }) => {

    let dt = toString(dateTime)
    let dtt = dt.split(" ")

    const add3Dots = (string, limit)=>{
        var dots = "...";
            if(string.length > limit){
                    // you can also use substr instead of substring
                    string = string.substring(0,limit) + dots;
            }
            return string;
        }

    return (

        <div className="col col-lg-3 cardCustom" style={{
            borderRadius: borderRadius,
        }}>
            <Link to={page} className="imageCard" style={{
                backgroundImage: `url(https://www.pdiperjuangan.id/cms/${imageCard})`,
                textDecoration: 'none',
                backgroundPosition : 'center'
            }} >
                {/* JIKA MAU DIPAKAI CLASS, PAKAI CLASS VBMusic */}
                <Link as="a" className={`${classIcon}`} to={href} style={{ textDecoration: 'none' }} >
                    <i className={`${icons}`} style={{
                        textDecoration: 'none'
                    }}></i>
                </Link>
            </Link>
            <div className="text">
                <p style={{
                    color : 'red', 
                    fontSize: '8pt', 
                    fontWeight : '800', 
                    lineHeight : '0', 
                    padding : '0', 
                    margin :'10px 0 0 0'}}>
                    {textCategoryChild}
                </p>
                
                <p className="textH5" style={{
                    fontSize: h5Font,
                    fontWeight: h5Weight,
                    // maxHeight : '50px',
                    // overflow : 'hidden',
                    // textOverflow : 'elipsis',
                }}><b>{add3Dots(TextH5, 70)}</b></p>

                <small className="textSmall" style={{fontSize: '8pt'}}>{textSmall}</small>


                <h6 className="textH6">
                    {TextH6}
                </h6>
                <p className="paragrap" style={{
                    fontSize: paragrapSize
                }}>{paragrap}</p>
                
            </div>
        </div>



    )
}

export default CardVideo