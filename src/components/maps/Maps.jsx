import React, { useState } from "react";
import "./Maps.scss";
import "gsap";
import gsap from "gsap/gsap-core";
import { Sine, Power2 } from "gsap/gsap-core";
import maps from "../../img/peta.png";
import aceh from "../../img/Aceh.png";
import baliMaps from "../../img/BaliMaps.png";
import bangkaBelitung from "../../img/Bangka-Belitung.png";
import banten from "../../img/Banten.png";
import bengkulu from "../../img/Bengkulu.png";
import gorontalo from "../../img/Gorontalo.png";
import jakarta from "../../img/Jakarta.png";
import jambi from "../../img/Jambi.png";
import jawaBarat from "../../img/Jawa-Barat.png";
import jawaTengah from "../../img/Jawa-Tengah.png";
import jawaTimur from "../../img/Jawa-Timur.png";
import kalimantanBarat from "../../img/Kalimantan-Barat.png";
import kalimantanSelatan from "../../img/Kalimantan-Selatan.png";
import kalimantanTengah from "../../img/Kalimantan-Tengah.png";
import kalimantanTimur from "../../img/Kalimantan-Timur.png";
import kalimantanUtara from "../../img/Kalimantan-utara.png";
import kepulauanRiau from "../../img/Kepulauan-Riau.png";
import lampung from "../../img/Lampung.png";
import maluku from "../../img/Maluku.png";
import malukuUtara from "../../img/Maluku-Utara.png";
import nusaTenggaraBarat from "../../img/Nusa-Tenggara-Barat.png";
import nusaTenggaraTimur from "../../img/Nusa-Tenggara-Timur.png";
import papua from "../../img/Papua.png";
import papuaBarat from "../../img/Papua-Barat.png";
import riau from "../../img/Riau.png";
import sulawesiBarat from "../../img/Sulawesi-Barat.png";
import sulawesiSelatan from "../../img/Sulawesi-Selatan.png";
import sulawesiTengah from "../../img/Sulawesi-Tengah.png";
import sulawesiTenggara from "../../img/Sulawesi-Tenggara.png";
import sulawesiUtara from "../../img/Sulawesi-Utara.png";
import sumateraBarat from "../../img/Sumatera-Barat.png";
import sumateraSelatan from "../../img/Sumatera-Selatan.png";
import sumateraUtara from "../../img/Sumatera-Utara.png";
import yogyakarta from "../../img/Yogyakarta.png";
import CardProvinsi from "../cardprovinsi/CardProvinsi";
import { Link } from "react-router-dom";
import BtnProvinsi from "./btnprovinsi/BtnProvinsi";

const Maps = () => {
  // For Condition Maps Provinsi ketika di arahkan ke masing2 button
  let [show1, setShow1] = useState(false);
  let [show2, setShow2] = useState(false);
  let [show3, setShow3] = useState(false);
  let [show4, setShow4] = useState(false);
  let [show5, setShow5] = useState(false);
  let [show6, setShow6] = useState(false);
  let [show7, setShow7] = useState(false);
  let [show8, setShow8] = useState(false);
  let [show9, setShow9] = useState(false);
  let [show10, setShow10] = useState(false);
  let [show11, setShow11] = useState(false);
  let [show12, setShow12] = useState(false);
  let [show13, setShow13] = useState(false);
  let [show14, setShow14] = useState(false);
  let [show15, setShow15] = useState(false);
  let [show16, setShow16] = useState(false);
  let [show17, setShow17] = useState(false);
  let [show18, setShow18] = useState(false);
  let [show19, setShow19] = useState(false);
  let [show20, setShow20] = useState(false);
  let [show21, setShow21] = useState(false);
  let [show22, setShow22] = useState(false);
  let [show23, setShow23] = useState(false);
  let [show24, setShow24] = useState(false);
  let [show25, setShow25] = useState(false);
  let [show26, setShow26] = useState(false);
  let [show27, setShow27] = useState(false);
  let [show28, setShow28] = useState(false);
  let [show29, setShow29] = useState(false);
  let [show30, setShow30] = useState(false);
  let [show31, setShow31] = useState(false);
  let [show32, setShow32] = useState(false);
  let [show33, setShow33] = useState(false);
  let [show34, setShow34] = useState(false);
  // For Condition Maps Provinsi ketika di arahkan ke masing2 button

  return (
    <React.Fragment>
      {/* For Position Hover ALL Pulau */}
      <div className="containerMapsNusantara">
        <div className="container-position-pulau-inMaps">
          {/* Maps Default */}
          <img
            src={maps}
            alt=""
            className="imgMaps"
            id="mapsDefault"
            style={{
              display: show1 ? "none" : "flex",
            }}
          />
          {/* END Maps Default */}

          {/* 1 */}
          <CardProvinsi img={aceh} display={show1 ? "flex" : "none"} />

          {/* 2 */}
          <CardProvinsi img={baliMaps} display={show2 ? "flex" : "none"} />

          {/* 3 */}
          <CardProvinsi
            img={bangkaBelitung}
            display={show3 ? "flex" : "none"}
          />

          {/* 4 */}
          <CardProvinsi img={banten} display={show4 ? "flex" : "none"} />

          {/* 5 */}
          <CardProvinsi img={bengkulu} display={show5 ? "flex" : "none"} />

          {/* 6 */}
          <CardProvinsi img={gorontalo} display={show6 ? "flex" : "none"} />

          {/* 7 */}
          <CardProvinsi img={jakarta} display={show7 ? "flex" : "none"} />

          {/* 8 */}
          <CardProvinsi img={jambi} display={show8 ? "flex" : "none"} />

          {/* 9 */}
          <CardProvinsi img={jawaBarat} display={show9 ? "flex" : "none"} />

          {/* 10 */}
          <CardProvinsi img={jawaTengah} display={show10 ? "flex" : "none"} />

          {/* 11 */}
          <CardProvinsi img={jawaTimur} display={show11 ? "flex" : "none"} />

          {/* 12 */}
          <CardProvinsi
            img={kalimantanBarat}
            display={show12 ? "flex" : "none"}
          />

          {/* 13 */}
          <CardProvinsi
            img={kalimantanSelatan}
            display={show13 ? "flex" : "none"}
          />

          {/* 14 */}
          <CardProvinsi
            img={kalimantanTengah}
            display={show14 ? "flex" : "none"}
          />

          {/* 15 */}
          <CardProvinsi
            img={kalimantanTimur}
            display={show15 ? "flex" : "none"}
          />

          {/* 16 */}
          <CardProvinsi
            img={kalimantanUtara}
            display={show16 ? "flex" : "none"}
          />

          {/* 17 */}
          <CardProvinsi
            img={kepulauanRiau}
            display={show17 ? "flex" : "none"}
          />

          {/* 18 */}
          <CardProvinsi img={lampung} display={show18 ? "flex" : "none"} />

          {/* 19 */}
          <CardProvinsi img={maluku} display={show19 ? "flex" : "none"} />

          {/* 20 */}
          <CardProvinsi img={malukuUtara} display={show20 ? "flex" : "none"} />

          {/* 21 */}
          <CardProvinsi
            img={nusaTenggaraBarat}
            display={show21 ? "flex" : "none"}
          />

          {/* 22 */}
          <CardProvinsi
            img={nusaTenggaraTimur}
            display={show22 ? "flex" : "none"}
          />

          {/* 23 */}
          <CardProvinsi img={papua} display={show23 ? "flex" : "none"} />

          {/* 24 */}
          <CardProvinsi img={papuaBarat} display={show24 ? "flex" : "none"} />

          {/* 25 */}
          <CardProvinsi img={riau} display={show25 ? "flex" : "none"} />

          {/* 26 */}
          <CardProvinsi
            img={sulawesiBarat}
            display={show26 ? "flex" : "none"}
          />

          {/* 27 */}
          <CardProvinsi
            img={sulawesiSelatan}
            display={show27 ? "flex" : "none"}
          />

          {/* 28 */}
          <CardProvinsi
            img={sulawesiTengah}
            display={show28 ? "flex" : "none"}
          />

          {/* 29 */}
          <CardProvinsi
            img={sulawesiTenggara}
            display={show29 ? "flex" : "none"}
          />

          {/* 30 */}
          <CardProvinsi
            img={sulawesiUtara}
            display={show30 ? "flex" : "none"}
          />

          {/* 31 */}
          <CardProvinsi
            img={sumateraBarat}
            display={show31 ? "flex" : "none"}
          />

          {/* 32 */}
          <CardProvinsi
            img={sumateraSelatan}
            display={show32 ? "flex" : "none"}
          />

          {/* 33 */}
          <CardProvinsi
            img={sumateraUtara}
            display={show33 ? "flex" : "none"}
          />

          {/* 34 */}
          <CardProvinsi img={yogyakarta} display={show34 ? "flex" : "none"} />

          {/* For Button Trigger onMouse And OnMouseLeave to Provinsi */}
          {/* Btn Aceh */}
          <Link
            className="target-mouse-1"
            id="btn-aceh"
            onMouseOver={() => {
              setShow1(true);
            }}
            onMouseLeave={() => {
              setShow1(false);
            }}
          ></Link>
          {/* END Bali */}

          {/* Btn Sumatera Utara */}
          <Link
            className="target-mouse-2"
            id="btn-sumateraUtara"
            onMouseOver={() => {
              setShow33(true);
            }}
            onMouseLeave={() => {
              setShow33(false);
            }}
          ></Link>
          {/* END Bali */}
          {/* For Button Trigger onMouse And OnMouseLeave to Provinsi */}
        </div>
        {/* END For Position Hover ALL Pulau */}

        {/* Title PETA PDIP */}
        {/* <div className="column-title-petaPDIP">
            <h2 className="title-petaPDIP">
                PETA PDIP KREATIF
            </h2>
        </div> */}
        {/* EDN Title PETA PDIP */}

        {/* For Botton Name Provinsi For on off Display Image Provinsi */}
        <div className="container-btn-name-provinsi">
          {/* Row1 */}
          <BtnProvinsi
            id="4"
            pageProv=""
            nameProv="DI Aceh"
            color={show1 ? "red" : "#000"}
            transisi={show1 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow1(true);
            }}
            mouseLeave={() => {
              setShow1(false);
            }}
          />
          {/* END Btn Aceh */}

          {/* Btn Bengkulu */}
          <BtnProvinsi
            id={28}
            pageProv=""
            nameProv="Bengkulu"
            color={show5 ? "red" : "#000"}
            transisi={show5 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow5(true);
            }}
            mouseLeave={() => {
              setShow5(false);
            }}
          />
          {/* END Btn Bengkulu */}

          {/* Btn Jambi */}
          <BtnProvinsi
            id={19}
            pageProv=""
            nameProv="Jambi"
            color={show8 ? "red" : "#000"}
            transisi={show8 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow8(true);
            }}
            mouseLeave={() => {
              setShow8(false);
            }}
          />
          {/* END Btn Jambi */}

          {/* Btn Bangka Belitung */}
          <BtnProvinsi
            id={31}
            pageProv=""
            nameProv="Bangka Belitung"
            color={show3 ? "red" : "#000"}
            transisi={show3 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow3(true);
            }}
            mouseLeave={() => {
              setShow3(false);
            }}
          />
          {/* END Btn Bangka Belitung */}

          {/* Btn Kepulauan Riau */}
          <BtnProvinsi
            id={34}
            pageProv=""
            nameProv="Kepulauan Riau"
            color={show17 ? "red" : "#000"}
            transisi={show17 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow17(true);
            }}
            mouseLeave={() => {
              setShow17(false);
            }}
          />
          {/* END Btn Kepulauan Riau */}

          {/* Btn Lampung */}
          <BtnProvinsi
            id={25}
            pageProv=""
            nameProv="Lampung"
            color={show18 ? "red" : "#000"}
            transisi={show18 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow18(true);
            }}
            mouseLeave={() => {
              setShow18(false);
            }}
          />
          {/* END Btn Lampung */}

          {/* Btn Riau */}
          <BtnProvinsi
            id={16}
            pageProv=""
            nameProv="Riau"
            color={show25 ? "red" : "#000"}
            transisi={show25 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow25(true);
            }}
            mouseLeave={() => {
              setShow25(false);
            }}
          />
          {/* END Btn Riau */}

          {/* Btn Sumatera Barat */}
          <BtnProvinsi
            id={100}
            pageProv=""
            nameProv="Sumatera Barat"
            color={show31 ? "red" : "#000"}
            transisi={show31 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow31(true);
            }}
            mouseLeave={() => {
              setShow31(false);
            }}
          />
          {/* END Btn Sumatera Barat */}

          {/* Btn Sumatera Selatan */}
          <BtnProvinsi
            id={22}
            pageProv=""
            nameProv="Sumatera Selatan"
            color={show32 ? "red" : "#000"}
            transisi={show32 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow32(true);
            }}
            mouseLeave={() => {
              setShow32(false);
            }}
          />
          {/* END Row1 */}

          {/* Row2 */}
          <BtnProvinsi
            id={7}
            pageProv=""
            nameProv="Sumatera Utara"
            color={show33 ? "red" : "#000"}
            transisi={show33 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow33(true);
            }}
            mouseLeave={() => {
              setShow33(false);
            }}
          />
          {/* END Btn Sumatera Utara */}

          {/* Btn Gorontalo */}
          <BtnProvinsi
            id={82}
            pageProv=""
            nameProv="Gorontalo"
            color={show6 ? "red" : "#000"}
            transisi={show6 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow6(true);
            }}
            mouseLeave={() => {
              setShow6(false);
            }}
          />
          {/* END Btn Gorontalo */}

          {/* Btn Sulawesi Barat */}
          <BtnProvinsi
            id={85}
            pageProv=""
            nameProv="Sulawesi Barat"
            color={show26 ? "red" : "#000"}
            transisi={show26 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow26(true);
            }}
            mouseLeave={() => {
              setShow26(false);
            }}
          />
          {/* END Sulawesi Barat  */}

          {/* Btn Sulawesi Selatan */}
          <BtnProvinsi
            id={76}
            pageProv=""
            nameProv="Sulawesi Selatan"
            color={show27 ? "red" : "#000"}
            transisi={show27 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow27(true);
            }}
            mouseLeave={() => {
              setShow27(false);
            }}
          />
          {/* END Sulawesi Selatan  */}

          {/* Btn Sulawesi Tengah */}
          <BtnProvinsi
            id={73}
            pageProv=""
            nameProv="Sulawesi Tengah"
            color={show28 ? "red" : "#000"}
            transisi={show28 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow28(true);
            }}
            mouseLeave={() => {
              setShow28(false);
            }}
          />
          {/* END Sulawesi Tengah  */}

          {/* Btn Sulawesi Tenggara */}
          <BtnProvinsi
            id={79}
            pageProv=""
            nameProv="Sulawesi Tenggara"
            color={show29 ? "red" : "#000"}
            transisi={show29 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow29(true);
            }}
            mouseLeave={() => {
              setShow29(false);
            }}
          />
          {/* END Sulawesi Tenggara  */}

          {/* Btn Sulawesi Utara */}
          <BtnProvinsi
            id={70}
            pageProv=""
            nameProv="Sulawesi Utara"
            color={show30 ? "red" : "#000"}
            transisi={show30 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow30(true);
            }}
            mouseLeave={() => {
              setShow30(false);
            }}
          />
          {/* END Sulawesi Utara  */}

          {/* Btn Papua */}
          <BtnProvinsi
            id={97}
            pageProv=""
            nameProv="Papua"
            color={show23 ? "red" : "#000"}
            transisi={show23 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow23(true);
            }}
            mouseLeave={() => {
              setShow23(false);
            }}
          />
          {/* END Papua  */}

          {/* Btn Papua Barat */}
          <BtnProvinsi
            id={94}
            pageProv=""
            nameProv="Papua Barat"
            color={show24 ? "red" : "#000"}
            transisi={show24 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow24(true);
            }}
            mouseLeave={() => {
              setShow24(false);
            }}
          />
          {/* END Row2 */}

          {/* Row3 */}
          <BtnProvinsi
            id={13}
            pageProv=""
            nameProv="Bali"
            color={show2 ? "red" : "#000"}
            transisi={show2 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow2(true);
            }}
            mouseLeave={() => {
              setShow2(false);
            }}
          />
          {/* END Btn Bali */}

          {/* Btn Nusa Tenggara Barat */}
          <BtnProvinsi
            id={52}
            pageProv=""
            nameProv="Nusa Tenggara Barat"
            color={show21 ? "red" : "#000"}
            transisi={show21 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow21(true);
            }}
            mouseLeave={() => {
              setShow21(false);
            }}
          />
          {/* END Btn Nusa Tenggara Barat */}

          {/* Btn Nusa Tenggara Timur */}
          <BtnProvinsi
            id={55}
            pageProv=""
            nameProv="Nusa Tenggara Timur"
            color={show22 ? "red" : "#000"}
            transisi={show22 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow22(true);
            }}
            mouseLeave={() => {
              setShow22(false);
            }}
          />
          {/* END Btn Nusa Tenggara Timur */}

          {/* Btn Maluku */}
          <BtnProvinsi
            id={88}
            pageProv=""
            nameProv="Maluku"
            color={show19 ? "red" : "#000"}
            transisi={show19 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow19(true);
            }}
            mouseLeave={() => {
              setShow19(false);
            }}
          />
          {/* END Btn Maluku */}

          {/* Btn Maluku Utara */}
          <BtnProvinsi
            id={91}
            pageProv=""
            nameProv="Maluku Utara"
            color={show20 ? "red" : "#000"}
            transisi={show20 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow20(true);
            }}
            mouseLeave={() => {
              setShow20(false);
            }}
          />
          {/* END Btn Maluku Utara */}

          {/* Btn Kalimantan Barat */}
          <BtnProvinsi
            id={103}
            pageProv=""
            nameProv="Kalimantan Barat"
            color={show12 ? "red" : "#000"}
            transisi={show12 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow12(true);
            }}
            mouseLeave={() => {
              setShow12(false);
            }}
          />
          {/* END Btn Kalimantan Barat */}

          {/* Btn Kalimantan Selatan */}
          <BtnProvinsi
            id={64}
            pageProv=""
            nameProv="Kalimantan Selatan"
            color={show13 ? "red" : "#000"}
            transisi={show13 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow13(true);
            }}
            mouseLeave={() => {
              setShow13(false);
            }}
          />
          {/* END Btn Kalimantan Selatan */}

          {/* Btn Kalimantan Tengah */}
          <BtnProvinsi
            id={61}
            pageProv=""
            nameProv="Kalimantan Tengah"
            color={show14 ? "red" : "#000"}
            transisi={show14 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow14(true);
            }}
            mouseLeave={() => {
              setShow14(false);
            }}
          />
          {/* END Btn Kalimantan Tengah */}

          {/* Btn Kalimantan Timur */}
          <BtnProvinsi
            id={58}
            pageProv=""
            nameProv="Kalimantan Timur"
            color={show15 ? "red" : "#000"}
            transisi={show15 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow15(true);
            }}
            mouseLeave={() => {
              setShow15(false);
            }}
          />

          <BtnProvinsi
            id={67}
            pageProv=""
            nameProv="Kalimantan Utara"
            color={show16 ? "red" : "#000"}
            transisi={show16 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow16(true);
            }}
            mouseLeave={() => {
              setShow16(false);
            }}
          />
          {/* END Btn Kalimantan Utara */}

          {/* Btn Banten */}
          <BtnProvinsi
            id={49}
            pageProv=""
            nameProv="Banten"
            color={show4 ? "red" : "#000"}
            transisi={show4 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow4(true);
            }}
            mouseLeave={() => {
              setShow4(false);
            }}
          />
          {/* END Btn Banten */}

          {/* Btn Jakarta */}
          <BtnProvinsi
            id={10}
            pageProv=""
            nameProv="DKI Jakarta"
            color={show7 ? "red" : "#000"}
            transisi={show7 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow7(true);
            }}
            mouseLeave={() => {
              setShow7(false);
            }}
          />
          {/* END Btn Jakarta */}

          {/* Btn Jawa Barat */}
          <BtnProvinsi
            id={37}
            pageProv=""
            nameProv="Jawa Barat"
            color={show9 ? "red" : "#000"}
            transisi={show9 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow9(true);
            }}
            mouseLeave={() => {
              setShow9(false);
            }}
          />
          {/* END Btn Jawa Barat */}

          {/* Btn Jawa Tengah */}
          <BtnProvinsi
            id={40}
            pageProv=""
            nameProv="Jawa Tengah"
            color={show10 ? "red" : "#000"}
            transisi={show10 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow10(true);
            }}
            mouseLeave={() => {
              setShow10(false);
            }}
          />
          {/* END Btn Jawa Tengah */}

          {/* Btn Jawa Timur */}
          <BtnProvinsi
            id={43}
            pageProv=""
            nameProv="Jawa Timur"
            color={show11 ? "red" : "#000"}
            transisi={show11 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow11(true);
            }}
            mouseLeave={() => {
              setShow11(false);
            }}
          />
          {/* END Btn Jawa Timur */}

          {/* Btn Yogyakarta */}
          <BtnProvinsi
            id={46}
            pageProv=""
            nameProv="DI Yogyakarta"
            color={show34 ? "red" : "#000"}
            transisi={show34 ? "0.2s all ease-in-out" : "0.2s all ease-in-out"}
            mouseOver={() => {
              setShow34(true);
            }}
            mouseLeave={() => {
              setShow34(false);
            }}
          />
          {/* END Row4 */}
        </div>
      </div>
      {/* END For Botton Name Provinsi For on off Display Image Provinsi */}
    </React.Fragment>
  );
};

export default Maps;
