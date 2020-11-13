import React from "react";
import "./Subscribe.scss";
import MainButton from "../buttons/MainButton";
import subscribe from "../../img/subscribe.png";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div className="wrapperSubscribe">
      <div className="berita ikutiBerita">
        <div className="wrapper">
          <p>Ikuti Berita Terbaru</p>
          <small></small>
          <form className="form-control">
            <i className="fa fa-envelope-o"></i>
            <input type="email" placeholder="masukan email anda disini" />
          </form>
          {/* <MainButton name="Subscribe"
                                borderButton="1px solid #2d3436"
                                margin="1rem 0"
                                btnIcons="fa fa-check"
                                mr=".5rem" /> */}
          <Link to="/">
            <img
              src={subscribe}
              alt=""
              width="95%"
              style={{
                margin: "20px 0",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
