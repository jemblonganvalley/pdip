import React, { useState } from 'react'
import './Maps.scss'
import 'gsap'
import $ from 'jquery'
import gsap from 'gsap/gsap-core'
import { Sine, Power2 } from 'gsap/gsap-core'
import maps from '../../img/peta.png'
import aceh from '../../img/Aceh.png'
import baliMaps from '../../img/BaliMaps.png'
import bangkaBelitung from '../../img/Bangka-Belitung.png'
import banten from '../../img/Banten.png'
import bengkulu from '../../img/Bengkulu.png'
import gorontalo from '../../img/Gorontalo.png'
import jakarta from '../../img/Jakarta.png'
import jambi from '../../img/Jambi.png'
import jawaBarat from '../../img/Jawa-Barat.png'
import jawaTengah from '../../img/Jawa-Tengah.png'
import jawaTimur from '../../img/Jawa-Timur.png'
import kalimantanBarat from '../../img/Kalimantan-Barat.png'
import kalimantanSelatan from '../../img/Kalimantan-Selatan.png'
import kalimantanTengah from '../../img/Kalimantan-Tengah.png'
import kalimantanTimur from '../../img/Kalimantan-Timur.png'
import kalimantanUtara from '../../img/Kalimantan-utara.png'
import kepulauanRiau from '../../img/Kepulauan-Riau.png'
import lampung from '../../img/Lampung.png'
import maluku from '../../img/Maluku.png'
import malukuUtara from '../../img/Maluku-Utara.png'
import nusaTenggaraBarat from '../../img/Nusa-Tenggara-Barat.png'
import nusaTenggaraTimur from '../../img/Nusa-Tenggara-Timur.png'
import papua from '../../img/Papua.png'
import papuaBarat from '../../img/Papua-Barat.png'
import riau from '../../img/Riau.png'
import sulawesiBarat from '../../img/Sulawesi-Barat.png'
import sulawesiSelatan from '../../img/Sulawesi-Selatan.png'
import sulawesiTengah from '../../img/Sulawesi-Tengah.png'
import sulawesiTenggara from '../../img/Sulawesi-Tenggara.png'
import sulawesiUtara from '../../img/Sulawesi-Utara.png'
import sumateraBarat from '../../img/Sumatera-Barat.png'
import sumateraSelatan from '../../img/Sumatera-Selatan.png'
import sumateraUtara from '../../img/Sumatera-Utara.png'
import yogyakarta from '../../img/Yogyakarta.png'
import CardProvinsi from '../cardprovinsi/CardProvinsi'
import { Link } from 'react-router-dom'

const Maps =()=>{

    // gsap.set(".tes", {autoAlpha: 10, display: 'none'})

    // var $page = $('.tes'),
    //     $oke = $('.oke'),
    //     $targetMous = $('.target-mous');

    // $targetMous.on('mouseenter', function(e){
    //     var $thisTes = $(this).attr('id');
    //     console.log($thisTes);

    //     gsap.to($thisTes, 0, {display: 'flex', ease: Sine.easeInOut});
    // });

    // $targetMous.on('mouseleave', function(e){
    //     gsap.to($page, 0, {display : 'none', ease: Power2.easeIn})
    // })

    // $targetMous.on('mouseleave', function(e){
    //     gsap.to($oke, 0, {display : 'none', ease: Power2.easeIn})
    // })

    // For Condition Maps Provinsi ketika di arahkan ke masing2 button
    let [show1, setShow1] = useState(false)
    let [show2, setShow2] = useState(false)
    let [show3, setShow3] = useState(false)
    let [show4, setShow4] = useState(false)
    let [show5, setShow5] = useState(false)
    let [show6, setShow6] = useState(false)
    let [show7, setShow7] = useState(false)
    let [show8, setShow8] = useState(false)
    let [show9, setShow9] = useState(false)
    let [show10, setShow10] = useState(false)
    let [show11, setShow11] = useState(false)
    let [show12, setShow12] = useState(false)
    let [show13, setShow13] = useState(false)
    let [show14, setShow14] = useState(false)
    let [show15, setShow15] = useState(false)
    let [show16, setShow16] = useState(false)
    let [show17, setShow17] = useState(false)
    let [show18, setShow18] = useState(false)
    let [show19, setShow19] = useState(false)
    let [show20, setShow20] = useState(false)
    let [show21, setShow21] = useState(false)
    let [show22, setShow22] = useState(false)
    let [show23, setShow23] = useState(false)
    let [show24, setShow24] = useState(false)
    let [show25, setShow25] = useState(false)
    let [show26, setShow26] = useState(false)
    let [show27, setShow27] = useState(false)
    let [show28, setShow28] = useState(false)
    let [show29, setShow29] = useState(false)
    let [show30, setShow30] = useState(false)
    let [show31, setShow31] = useState(false)
    let [show32, setShow32] = useState(false)
    let [show33, setShow33] = useState(false)
    let [show34, setShow34] = useState(false)
    // For Condition Maps Provinsi ketika di arahkan ke masing2 button

    return(
        <>
        {/* For Position Hover ALL Pulau */}
        <div className="container-position-pulau-inMaps">
            {/* Maps Default */}
            <img src={maps} alt="" className="imgMaps" id="mapsDefault" 
                style={{
                    display: show1 ? 'none' : 'flex',
                }}
            />
            {/* END Maps Default */}

            {/* 1 */}
            <CardProvinsi
                img={aceh}
                display={show1 ? 'flex' : 'none'}
            />

            {/* 2 */}
            <CardProvinsi
                img={baliMaps}
                display={show2 ? 'flex' : 'none'}
            />

            {/* 3 */}
            <CardProvinsi
                img={bangkaBelitung}
                display={show3 ? 'flex' : 'none'}
            />

            {/* 4 */}
            <CardProvinsi
                img={banten}
                display={show4 ? 'flex' : 'none'}
            />

            {/* 5 */}
            <CardProvinsi
                img={bengkulu}
                display={show5 ? 'flex' : 'none'}
            />

            {/* 6 */}
            <CardProvinsi
                img={gorontalo}
                display={show6 ? 'flex' : 'none'}
            />

            {/* 7 */}
            <CardProvinsi
                img={jakarta}
                display={show7 ? 'flex' : 'none'}
            />

            {/* 8 */}
            <CardProvinsi
                img={jambi}
                display={show8 ? 'flex' : 'none'}
            />

            {/* 9 */}
            <CardProvinsi
                img={jawaBarat}
                display={show9 ? 'flex' : 'none'}
            />

            {/* 10 */}
            <CardProvinsi
                img={jawaTengah}
                display={show10 ? 'flex' : 'none'}
            />

            {/* 11 */}
            <CardProvinsi
                img={jawaTimur}
                display={show11 ? 'flex' : 'none'}
            />

            {/* 12 */}
            <CardProvinsi
                img={kalimantanBarat}
                display={show12 ? 'flex' : 'none'}
            />

            {/* 13 */}
            <CardProvinsi
                img={kalimantanSelatan}
                display={show13 ? 'flex' : 'none'}
            />

            {/* 14 */}
            <CardProvinsi
                img={kalimantanTengah}
                display={show14 ? 'flex' : 'none'}
            />

            {/* 15 */}
            <CardProvinsi
                img={kalimantanTimur}
                display={show15 ? 'flex' : 'none'}
            />

            {/* 16 */}
            <CardProvinsi
                img={kalimantanUtara}
                display={show16 ? 'flex' : 'none'}
            />

            {/* 17 */}
            <CardProvinsi
                img={kepulauanRiau}
                display={show17 ? 'flex' : 'none'}
            />

            {/* 18 */}
            <CardProvinsi
                img={lampung}
                display={show18 ? 'flex' : 'none'}
            />

            {/* 19 */}
            <CardProvinsi
                img={maluku}
                display={show19 ? 'flex' : 'none'}
            />

            {/* 20 */}
            <CardProvinsi
                img={malukuUtara}
                display={show20 ? 'flex' : 'none'}
            />

            {/* 21 */}
            <CardProvinsi
                img={nusaTenggaraBarat}
                display={show21 ? 'flex' : 'none'}
            />

            {/* 22 */}
            <CardProvinsi
                img={nusaTenggaraTimur}
                display={show22 ? 'flex' : 'none'}
            />

            {/* 23 */}
            <CardProvinsi
                img={papua}
                display={show23 ? 'flex' : 'none'}
            />

            {/* 24 */}
            <CardProvinsi
                img={papuaBarat}
                display={show24 ? 'flex' : 'none'}
            />

            {/* 25 */}
            <CardProvinsi
                img={riau}
                display={show25 ? 'flex' : 'none'}
            />

            {/* 26 */}
            <CardProvinsi
                img={sulawesiBarat}
                display={show26 ? 'flex' : 'none'}
            />

            {/* 27 */}
            <CardProvinsi
                img={sulawesiSelatan}
                display={show27 ? 'flex' : 'none'}
            />

            {/* 28 */}
            <CardProvinsi
                img={sulawesiTengah}
                display={show28 ? 'flex' : 'none'}
            />

            {/* 29 */}
            <CardProvinsi
                img={sulawesiTenggara}
                display={show29 ? 'flex' : 'none'}
            />

            {/* 30 */}
            <CardProvinsi
                img={sulawesiUtara}
                display={show30 ? 'flex' : 'none'}
            />

            {/* 31 */}
            <CardProvinsi
                img={sumateraBarat}
                display={show31 ? 'flex' : 'none'}
            />

            {/* 32 */}
            <CardProvinsi
                img={sumateraSelatan}
                display={show32 ? 'flex' : 'none'}
            />

            {/* 33 */}
            <CardProvinsi
                img={sumateraUtara}
                display={show33 ? 'flex' : 'none'}
            />

            {/* 34 */}
            <CardProvinsi
                img={yogyakarta}
                display={show34 ? 'flex' : 'none'}
            />

            {/* For Button Trigger onMouse And OnMouseLeave to Provinsi */}
            {/* Btn Aceh */}
            <map name="map in">
            <area alt="" title="" shape="poly" onclick="generateInfo(11)" coords="10,6,23,12,30,14,37,16,48,16,53,14,59,20,64,28,69,31,66,37,64,43,64,51,65,62,68,69,68,80,59,79,57,65,51,66,49,58,41,49,36,49,26,42,14,26,6,13,6,9,9,23,12,27" 
                onMouseEnter={(()=>{
                    setShow1(true)
                })}
                onMouseLeave={(()=>{
                    setShow1(false)
                })}
                style={{
                    cursor: 'pointer'
                }}
            />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-sumatera-utara';" onmouseout="navbar.className='map-default'; " onclick="generateInfo(12)" coords="73,41,81,48,90,51,100,57,107,66,115,75,119,91,114,95,116,108,105,108,108,117,101,115,96,119,93,121,83,96,75,85,71,82,67,73,66,65,65,55,66,42" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-jambi';" onmouseout="navbar.className='map-default';" onclick="generateInfo(15)" coords="187,175,188,171,194,168,205,168,206,162,206,152,196,149,189,150,187,145,179,144,170,146,164,150,157,147,153,151,149,157,144,163,134,164,138,172,142,180,154,187,166,186,174,179,184,180" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-bengkulu';" onmouseout="navbar.className='map-default';" onclick="generateInfo(17)" coords="145,199,156,206,161,214,168,221,180,229,193,238,190,224,180,221,179,218,171,215,168,211,173,209,173,205,166,204,165,197,158,192,147,186,139,179,134,184,134,180,134,182" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-lampung';" onmouseout="navbar.className='map-default';" onclick="generateInfo(18)" coords="237,247,238,231,235,220,228,213,219,220,209,222,203,230,201,235,195,235,203,250,210,256,212,248,222,254,224,251,224,245,233,254" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-bangka-belitung'; " onmouseout="navbar.className='map-default';" onclick="generateInfo(19)" coords="256,186,246,181,242,168,236,162,237,170,231,163,226,169,222,173,233,175,237,183,238,190,251,196" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-riau';" onmouseout="navbar.className='map-default';" onclick="generateInfo(14)" coords="116,71,117,81,117,90,119,93,113,99,115,113,120,118,125,121,130,129,128,132,135,138,142,148,147,151,151,147,158,148,163,151,167,144,179,143,185,136,189,126,173,108,163,97,152,94,144,93,147,87,138,87,132,81,128,86,121,79" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-sumatera-barat';" onmouseout="navbar.className='map-default';" onclick="generateInfo(13)" coords="128,129,129,122,119,119,113,115,104,108,107,118,97,118,92,121,105,134,118,145,122,160,130,176,135,181,139,178,135,165,144,164,146,158,146,152,131,139,126,137" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-sumatera-selatan';" onmouseout="navbar.className='map-default';" onclick="generateInfo(16)" coords="185,174,195,169,203,166,210,171,213,176,220,179,227,181,231,187,239,193,242,201,236,208,238,217,228,212,221,214,217,218,205,223,200,229,202,234,196,235,190,224,176,217,169,212,177,205,172,201,164,200,158,195,159,186,178,180,185,177,170,185" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-banten';" onmouseout="navbar.className='map-default';" onclick="generateInfo(36)" coords="226,274,235,277,246,279,248,264,256,265,251,257,238,257,234,267" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-jawa-barat';" onmouseout="navbar.className='map-default'; " onclick="generateInfo(32)" coords="258,289,271,290,282,296,294,299,300,294,295,286,301,278,291,267,280,264,266,258,262,259,258,267,251,269,250,280,247,286" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-jakarta';" onmouseout="navbar.className='map-default';" onclick="generateInfo(31)" coords="262,259,262,267,254,268,250,261,255,257" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-jawa-tengah'; " onmouseout="navbar.className='map-default';" onclick="generateInfo(33)" coords="321,279,332,279,342,272,346,267,353,275,361,274,358,286,352,292,353,300,347,304,341,299,333,296,326,300,316,296,304,297,301,296,298,283,303,278" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-yogyakarta';" onmouseout="navbar.className='map-default';" onclick="generateInfo(34)" coords="344,305,336,296,328,297,328,302,342,305" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-jawa-timur';" onmouseout="navbar.className='map-default';" onclick="generateInfo(35)" coords="374,277,381,277,395,277,415,278,403,286,388,290,395,296,411,295,422,297,422,320,398,307,386,309,366,308,350,308,356,298,360,288,364,277" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-bali';" onmouseout="navbar.className='map-default'; " onclick="generateInfo(51)" coords="440,318,446,314,449,308,438,305,428,305,425,307" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-nusa-tenggara-barat';" onmouseout="navbar.className='map-default';" onclick="generateInfo(52)" coords="469,319,471,312,470,305,461,309,458,316,456,320,463,322" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-nusa-tenggara-barat';" onmouseout="navbar.className='map-default';" onclick="generateInfo(21)" coords="488,324,501,320,508,316,512,322,524,317,521,304,501,303,493,303,497,312,497,315,483,310,473,315,473,325" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-nusa-tenggara-timur';" onmouseout="navbar.className='map-default';" onclick="generateInfo(53)" coords="552,317,563,319,579,319,602,316,617,312,638,313,656,307,605,305,595,310,576,311,558,310,549,309,541,313,542,317,559,322" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-nusa-tenggara-timur';" onmouseout="navbar.className='map-default';" onclick="generateInfo(53)" coords="532,341,543,344,550,351,561,348,553,338,540,332,529,332,522,334" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-nusa-tenggara-timur';" onmouseout="navbar.className='map-default';" onclick="generateInfo(53)" coords="625,351,638,348,653,334,654,325,644,327,636,332,630,332,625,343,621,350" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-maluku';" onmouseout="navbar.className='map-default';" onclick="generateInfo(81)" coords="611,364,618,359,606,362" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-maluku';" onmouseout="navbar.className='map-default';" onclick="generateInfo(81)" coords="673,302,682,301,694,296,682,294,673,298" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-maluku';" onmouseout="navbar.className='map-default';" onclick="generateInfo(81)" coords="783,310,797,293,803,282,795,282,787,293" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-maluku';" onmouseout="navbar.className='map-default';" onclick="generateInfo(81)" coords="856,276,865,264,863,245,857,250,851,258,850,272,853,279" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-maluku';" onmouseout="navbar.className='map-default';" onclick="generateInfo(81)" coords="780,208,776,200,770,195,756,192,747,189,736,190,724,190,717,195,715,198,718,205,718,210,729,200,740,202,753,201,763,206,777,212" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-maluku';" onmouseout="navbar.className='map-default';" onclick="generateInfo(81)" coords="701,205,698,198,685,196,676,197,684,209,681,204,675,204,689,215" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-papua-barat';" onmouseout="navbar.className='map-default';" onclick="generateInfo(91)" coords="869,215,872,209,853,198,860,189,851,176,852,158,848,142,824,137,805,136,790,146,781,148,773,148,787,160,802,160,805,170,812,177,826,175,844,174,844,184,828,183,820,190,806,188,822,204,827,216,835,208,839,199,850,211" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-papua';" onmouseout="navbar.className='map-default'; " onclick="generateInfo(94)" coords="999,185,986,178,976,173,942,162,930,160,916,169,913,177,901,178,892,191,886,196,877,200,863,194,858,191,857,197,867,205,871,213,865,218,875,225,897,228,919,237,935,245,944,260,951,280,948,287,933,296,927,309,938,308,952,309,968,304,982,309,997,323,999,328" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-maluku-utara';" onmouseout="navbar.className='map-default';" onclick="generateInfo(82)" coords="705,100,710,86,717,80,730,72,734,78,719,96,732,96,734,109,726,112,738,122,718,120,720,138,728,153,717,142,714,147,705,146,702,141" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-maluku-utara';" onmouseout="navbar.className='map-default';" onclick="generateInfo(82)" coords="716,166,724,164,710,156,705,160,709,166" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-maluku-utara';" onmouseout="navbar.className='map-default';" onclick="generateInfo(82)" coords="645,172,666,171,675,180,681,170,653,164,642,164,640,169,641,171" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-sulawesi-tenggara';" onmouseout="navbar.className='map-default';" onclick="generateInfo(74)" coords="588,233,593,227,602,224,607,222,601,212,595,205,595,197,584,194,573,191,567,199,564,205,578,215,576,231" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-sulawesi-selatan';" onmouseout="navbar.className='map-default';" onclick="generateInfo(73)" coords="536,221,534,232,533,245,542,252,551,250,552,244,553,233,554,210,552,196,556,191,563,184,583,188,571,180,560,177,553,170,545,170,540,173,538,188,534,201" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-sulawesi-barat'; " onmouseout="navbar.className='map-default';" onclick="generateInfo(76)" coords="533,149,531,158,530,169,525,182,519,185,520,196,524,204,531,201,537,190,540,170" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-sulawesi-tengah';" onmouseout="navbar.className='map-default';" onclick="generateInfo(72)" coords="592,189,576,170,601,158,608,149,619,146,611,140,601,143,588,149,579,145,572,155,566,157,557,149,547,134,549,124,554,117,569,117,569,110,587,105,564,102,554,110,542,127,539,138,535,151,540,165,543,169,555,165,555,168,567,175,571,178,585,187" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-gorontalo';" onmouseout="navbar.className='map-default';" onclick="generateInfo(75)" coords="590,116,602,115,613,119,620,121,616,109,601,109,594,106,582,107,577,110,572,113,577,116" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-sulawesi-utara';" onmouseout="navbar.className='map-default';" onclick="generateInfo(71)" coords="619,109,622,115,625,119,638,119,645,112,652,104,658,95,654,90,641,96,639,104,633,107" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-kalimantan-timur'; " onmouseout="navbar.className='map-default';" onclick="generateInfo(65)" coords="489,133,493,122,500,111,516,110,523,109,512,96,498,87,503,80,497,78,489,75,479,75,472,77,462,85,458,99,448,106,436,103,424,98,417,101,410,111,424,114,434,112,437,121,439,128,446,139,447,149,455,157,451,164,456,174,468,177" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-kalimantan-selatan';" onmouseout="navbar.className='map-default';" onclick="generateInfo(63)" coords="432,216,446,210,455,204,460,211,462,218,465,204,465,189,469,182,456,180,452,170,447,159,439,174,434,183,429,191,422,199" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-kalimantan-tengah';" onmouseout="navbar.className='map-default';" onclick="generateInfo(62)" coords="420,199,426,190,433,177,443,162,451,157,444,142,437,129,433,117,423,116,413,116,404,121,400,136,387,141,377,146,359,156,349,164,351,179,352,189,344,191,366,187,368,204,382,198,394,195,406,203" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-kalimantan-barat'; " onmouseout="navbar.className='map-default';" onclick="generateInfo(61)" coords="331,180,329,172,329,158,320,151,309,139,310,128,303,118,308,97,317,86,331,101,340,110,366,106,380,96,402,101,417,97,409,114,398,135,350,159,351,187,348,192,337,190" />
            <area alt title shape="poly" onmouseover="navbar.className='rmap map-kalimantan-utara';" onmouseout="navbar.className='map-default';" onclick="generateInfo(65)" coords="453,35,471,35,490,40,495,48,486,55,505,80,485,73,471,75,460,86,454,100,444,102,427,99" />
            </map>

            {/* END Bali */}
            {/* For Button Trigger onMouse And OnMouseLeave to Provinsi */}
        </div>
        {/* END For Position Hover ALL Pulau */}
        </>
    )
}

export default Maps