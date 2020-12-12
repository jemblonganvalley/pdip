import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import Logo from "../../img/pdiperjuangan02.svg";
import "./MainFooter.scss";
const Subscribe = lazy(() => import("../subscribe/Subscribe"));

const MainFooter = () => {
  return (
    <div className="wrapperFooter">
      <div className="wrapperContent">
        <img
          src={Logo}
          alt=""
          width="100"
          height="100"
          className="logo-mainFooter"
          style={{
            objectFit: "fill",
          }}
        />
        <span className="wrapperSituation">
          <div className="textFooter">
            {/* <small className="heads">situation room pdi perjuangan</small> */}
            <small className="body">
              pdiperjuangan.id merupakan situs web resmi Dewan Pimpinan Pusat
              Partai Demokrasi Indonesia Perjuangan (DPP PDI Perjuangan). Situs
              yang dikendalikan oleh Muhammad Prananda Prabowo ini merupakan
              induk dari media sosial resmi Partai, di antaranya Facebook,
              Twitter, Instagram, dan Youtube, serta satu kesatuan dengan
              aplikasi Media Pintar Perjuangan.
            </small>
            {/* <small className="foot">
              Untuk dukungan dan partisipasi, kirimkan naskah atau artikel
              beserta foto kegiatan anda ke email : redaksi@pdiperjuangan.id
            </small> */}
          </div>
        </span>
        <address className="contact ">
          <a
            className="emailFooter row"
            href="mailto:redaksi@pdiperjuangan.id"
            target="_blank"
          >
            <div className="col">
              <i className="fa fa-envelope-o"></i>
              <small className="ml-2">
                <b>redaksi@pdiperjuangan.id</b>
              </small>
            </div>
          </a>

          <a className="emailFooter row" href="tel:0213909925" target="_blank">
            <div className="col">
              <i className="fa fa-phone"></i>
              <small className="ml-2">
                <b>021-3909925</b>
              </small>
            </div>
          </a>

          <a
            className="emailFooter row"
            href="https://goo.gl/maps/2dD2qXuAUH4aS4hY7"
            target="_blank"
          >
            <div className="col">
              <i className="fa fa-map-marker"></i>
              <small className="ml-2">
                <b>Jl. Diponegoro No. 58 Menteng Jakarta Pusat 10310</b>
              </small>
            </div>
          </a>
        </address>
        <Suspense fallback={<div>loading</div>}>
          <Subscribe />
        </Suspense>
      </div>
    </div>
  );
};

export default MainFooter;
