import React from "react";
import "./MainCards.scss";
import { Link } from "react-router-dom";

const Cards = ({
  page,
  author,
  category,
  title,
  cardType,
  fileType,
  margin,
  imageCard,
  borderRadius=10,
  paragrap,
  icons,
  classIcon,
  href,
  h5Font,
  h5Weight,
  TextH6,
  paragrapSize,
  width,
  dateTime,
  textCategoryChild,
  id,
  marginTop,
  dataVideo,
  siaran,
  paginateCard
}) => {
  let dt = toString(dateTime);
  let dtt = dt.split(" ");

  const add3Dots = (string, limit) => {
    var dots = "...";
    if (string.length > limit) {
      // you can also use substr instead of substring
      string = string.substring(0, limit) + dots;
    }
    return string;
  };

  const getToday = ()=>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date;
    return dateTime
  }

  return (
      <>

      {cardType === 'multimedia' || 'video' ? (
        <>
         <Link
        as='div'
        className="col col-lg-3 cardCustom" id="cardCustom2"
        style={{
          borderRadius: borderRadius,
          marginTop: marginTop
        }}
        to={`${page}/${id}`}
      >
        <Link
          to={`${page}/${id}`}
          className="imageCard"
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/${imageCard}/hqdefault.jpg)`,
            textDecoration: "none",
            backgroundPosition: "center",
          }}
        >
          {/* JIKA MAU DIPAKAI CLASS, PAKAI CLASS VBMusic */}
          <Link
            as="a"
            className={`${classIcon}`}
            to={href}
            style={{ textDecoration: "none" }}
          >
            <i
              className={`${icons}`}
              style={{
                textDecoration: "none",
              }}
            ></i>
          </Link>
        </Link>
        <div className="text">
          <small className="title-page-mainCards"
            style={{
              color: "red",
              fontWeight: "800",
              lineHeight: "0",
              padding: "0",
              margin: "10px 0 10px 0",
            }}
          >
            {category || 'Gallery'}
          </small>
            
            <br/>

          <small className="textSmall">
            {author || 'PDI Perjuangan'}
          </small>{" "}
          | &nbsp;
          <small className="textSmall">
            {dateTime || getToday()}
          </small>
          <p
            className="textH5"
            style={{
              fontSize: h5Font,
              fontWeight: h5Weight,
              // maxHeight : '50px',
              // overflow : 'hidden',
              // textOverflow : 'elipsis',
            }}
          >
            <b>{add3Dots(title, 70)}</b>
          </p>
    
        </div>
      </Link>
      </>

      ) : (

        // JIKA BUKAN GALLERY

        <>
         <Link
        as='div'
        className="col col-lg-3 cardCustom" id="cardCustom2"
        style={{
          borderRadius: borderRadius,
          marginTop: marginTop
        }}
        to={`${page}/${id}`}
      >
        <Link
          to={`${page}/${id}`}
          className="imageCard"
          style={{
            backgroundImage: fileType === 'image' ? `url(https://atur.biar.pw/public${imageCard})` : `url(https://i.ytimg.com/vi/${imageCard}/hqdefault.jpg)`,
            textDecoration: "none",
            backgroundPosition: "center",
          }}
        >
          {/* JIKA MAU DIPAKAI CLASS, PAKAI CLASS VBMusic */}
          <Link
            as="a"
            className={`${classIcon}`}
            to={href}
            style={{ textDecoration: "none" }}
          >
            <i
              className={`${icons}`}
              style={{
                textDecoration: "none",
              }}
            ></i>
          </Link>
        </Link>
        <div className="text">
          <small className="title-page-mainCards"
            style={{
              color: "red",
              fontWeight: "800",
              lineHeight: "0",
              padding: "0",
              margin: "10px 0 10px 0",
            }}
          >
            {category || 'Berita'}
          </small>

          <br/>
   
          <small className="textSmall">
            {author || 'PDI Perjuangan'}
          </small>{" "}
          | &nbsp;
          <small className="textSmall">
            {dateTime || getToday()}
          </small>
          <p
            className="textH5"
            style={{
              fontSize: h5Font,
              fontWeight: h5Weight,
              // maxHeight : '50px',
              // overflow : 'hidden',
              // textOverflow : 'elipsis',
            }}
          >
            <b>{add3Dots(title, 70)}</b>
          </p>
    
        </div>
      </Link>
      </>
      )}

     
      </>
  );
};

export default Cards;
