import React from "react";
import "./MainCards.scss";
import { Link, Redirect } from "react-router-dom";
import { url, localUrl, localServerSide } from "../../config/main.json";
import { image_url } from "../../config/config";

const Cards = ({
  page,
  author,
  category,
  title,
  slug,
  cardType,
  fileType,
  margin,
  imageCard,
  borderRadius = 10,
  paragrap,
  icons,
  classIcon,
  href,
  h5Font,
  h5Weight = "bold",
  TextH6,
  paragrapSize,
  width,
  dateTime,
  textCategoryChild,
  id,
  marginTop,
  dataVideo,
  siaran,
  paginateCard,
}) => {
  let dt = toString(dateTime);
  let dtt = dt.split(" ")[0];

  const add3Dots = (string, limit) => {
    var dots = "...";
    if (string.length > limit) {
      // you can also use substr instead of substring
      string = string.substring(0, limit) + dots;
    }
    return string;
  };

  const pageSLug = () => {
    return slug
      .toString()
      .replace(/[^\w-]+/g, "-")
      .toLowerCase();
  };

  const getToday = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date;
    return dateTime;
  };

  return (
    <>
      <Link
        className="col-lg-3 cardCustom"
        id="cardCustom2"
        style={{
          borderRadius: borderRadius,
          marginTop: marginTop,
        }}
        to={`${page}/${id}/${slug ? pageSLug() : null}`}
      >
        <Link
          to={`${page}/${id}/${slug ? pageSLug() : null}`}
          className="imageCard"
          style={{
            backgroundImage: imageCard.includes("blog")
              ? `url(${image_url}${imageCard})`
              : `url(https://i.ytimg.com/vi/${imageCard}/hqdefault.jpg)`,

            textDecoration: "none",
            backgroundPosition: "center",
          }}
        >
          {/* JIKA MAU DIPAKAI CLASS, PAKAI CLASS VBMusic */}
          <Link
            className={`${classIcon}`}
            to={`${page}/${id}/${slug ? pageSLug() : null}`}
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
          <small
            className="title-page-mainCards"
            style={{
              color: "red",
              fontWeight: "bold",
              lineHeight: "0",
              padding: "0",
              margin: "10px 0 10px 0",
            }}
          >
            {category || "Gallery"}
          </small>
          <br />
          <small className="textSmall">{author || "PDI Perjuangan"}</small> |
          &nbsp;
          <small className="textSmall">
            {(dateTime && dateTime.split(" ")[0]) || getToday()}
          </small>
          <p
            className="textH5"
            style={{
              fontSize: h5Font,
              fontWeight: h5Weight,
              // maxHeight : '50px',
              // overflow : 'hidden',
              textOverflow: "elipsis",
            }}
          >
            {/* {add3Dots(title, 70)} */}
            {title}
          </p>
        </div>
      </Link>
    </>
  );
};

export default Cards;
