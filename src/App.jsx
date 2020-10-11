import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import MainNavbar from "./components/navbar/MainNavbar";
import HomePage from "./components/pages/home/HomePage";
import MainFooter from "./components/footer/MainFooter";
import PartaiPage from "./components/pages/partai/PartaiPage";
import MultimediaPage from "./components/pages/multimediaPage/MultimediaPage";
import BkbbPage from "./components/pages/bkbb/BkbbPage";
import InformasiPage from "./components/pages/informasi/InformasiPage";
import PemiluPage from "./components/pages/Pemilu/PemiluPage";
import { useState } from "react";
import { useEffect } from "react";
import BeritaPage from "./components/pages/berita/BeritaPage";
import KetuaUmumPage from "./components/pages/KetuaUmum/KetuaUmumPage";
import StrukturPage from "./components/pages/struktur/StrukturPage";
import DetailPengurus from "./components/pages/detailpengurus/DetailPengurus";
import Dpd from "./components/dpd/Dpd";
import VideoMedia from "./components/pages/videomedia/VideoMedia";
import Page1 from "./components/pages/berita/page1/Page1";
import Page2 from "./components/pages/berita/page2/Page2";
import MateriPokok from "./components/pages/materipokok/MateriPokok";
import BkbbWejangan from "./components/pages/bkbb/BkbbWejangan";
import AllComponent from "./components/allcomponent/AllComponent";
import BgRed from "./components/bgRed/BgRed";
import WejanganBungKarno from "./components/pages/bkbb/wejanganbungkarno/WejanganBungKarno";
import { useStoreActions, useStoreState } from "easy-peasy";
import EventPage from "./components/pages/events/EventPage";
import PidatoKongres from "./components/pages/KetuaUmum/pidatokongres/PidatoKongres";
import PidatoRakernas from "./components/pages/KetuaUmum/pidatorakernas/PidatoRakernas";
import PidatoRakornas from "./components/pages/KetuaUmum/pidatorakornas/PidatoRakornas";
import PidatoHut from "./components/pages/KetuaUmum/pidatohut/PidatoHut";
import BeritaNasional from "./components/pages/berita/beritanasional/BeritaNasional";
import BeritaDaerah from "./components/pages/berita/beritadaerah/BeritaDaerah";
import BeritaFoto from "./components/pages/berita/beritafoto/BeritaFoto";
import KegiatanPartai from "./components/pages/berita/kegiatanpartai/KegiatanPartai";
import SiaranLangsung from "./components/pages/siaranlangsung/SiaranLangsung";
import VideoDokumen from "./components/pages/videodokumen/VideoDokumen";
import VideoTeaser from "./components/pages/videoteaser/VideoTeaser";
import Wawancara from "./components/pages/wawancara/Wawancara";
import StrukturPpdi from "./components/pages/strukturppdi/StrukturPpdi";
import VisiMisi from "./components/pages/visimisi/VisiMisi";
import Prosedur from "./components/pages/prosedur/Prosedur";
import Regulasi from "./components/pages/regulasi/Regulasi";
import ListBerita from "./components/pages/berita/listBerita/ListBerita";
import ContainerCard from "./components/containerCard/ContainerCard";

function App() {
  let [hide, setHide] = useState(true);
  let token = useStoreState((state) => state.token);
  const getGlobalToken = useStoreActions((action) => action.setToken);
  let [dataMenu, setDataMenu] = useState();
  let [tkn, setTkn] = useState();

  const getToken = async () => {
    const res = await fetch("https://atur.biar.pw/api/auth/app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        app_id: "1555309664580",
        api_secret: "4d672ce3-e422-4d8a-86ff-fabb1808a689",
      }),
    });
    const data = await res.json();
    setTkn(data.token);
  };

  useEffect(() => {
    getGlobalToken();
    getToken();
    var prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", function () {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        setHide(true);
      } else {
        setHide(false);
      }
      prevScrollpos = currentScrollPos;
    });
  }, [hide]);

  return (
    <Router>
      {/* {console.log(`
        >>>>>>>>>>>>>>>>>>>>
        ${token}
      `)} */}

      {tkn && <MainNavbar hide={hide} token={tkn} />}

      <div className="App">
        <Switch>

          {/* CONTAINER CARD */}
          <Route path='/detail/:category_id'>
            <ContainerCard />
          </Route>

          <Route path="/regulasi">
            <Regulasi />
          </Route>

          <Route path="/prosedur">
            <Prosedur />
          </Route>

          <Route path="/visimisi">
            <VisiMisi />
          </Route>

          <Route path="/strukturppdi">
            <StrukturPpdi />
          </Route>

          <Route path="/kegiatanpartai">
            <KegiatanPartai />
          </Route>

          <Route path="/beritafoto">
            <BeritaFoto />
          </Route>

          <Route path="/beritadaerah">
            <BeritaDaerah />
          </Route>

          <Route path="/list-berita">
            <ListBerita />
          </Route>

          <Route path="/beritanasional">
            <BeritaNasional />
          </Route>

          <Route path="/pidatohut">
            <PidatoHut />
          </Route>

          <Route path="/pidatorakornas">
            <PidatoRakornas />
          </Route>

          <Route path="/pidatorakernas">
            <PidatoRakernas />
          </Route>

          <Route path="/pidatokongres">
            <PidatoKongres />
          </Route>

          <Route path="/page/wawancara">
            <Wawancara />
          </Route>

          <Route path="/page/teaser">
            <VideoTeaser />
          </Route>

          <Route path="/page/dokumentasi">
            <VideoDokumen />
          </Route>

          <Route path="/page/siaran_langsung">
            <SiaranLangsung />
          </Route>

          <Route path="/event">
            <EventPage />
          </Route>

          <Route path="/wejanganbungkarno">
            <WejanganBungKarno />
          </Route>

          <Route path="/quotes">
            <BkbbWejangan />
          </Route>

          <Route path="/materipokok">
            <MateriPokok />
          </Route>

          <Route path="/videomedia">
            <VideoMedia />
          </Route>

          <Route path="/dpd">
            <Dpd />
          </Route>

          <Route path="/detailpengurus">
            <DetailPengurus />
          </Route>

          <Route path="/struktur">
            <StrukturPage />
          </Route>

          <Route path="/page2">
            <Page2 />
          </Route>

          {/* BLOG PAGE  */}
          <Route path="/page/:id">
            <Page1 />
          </Route>

          {/* MAIN PAGE */}

          <Route path="/pemilu">
            <PemiluPage />
          </Route>

          <Route path="/informasi-publik">
            <InformasiPage />
          </Route>

          <Route path="/berita">
            <BeritaPage />
          </Route>

          <Route path="/multimedia">
            <MultimediaPage />
          </Route>

          <Route path="/ketua-umum">
            <KetuaUmumPage />
          </Route>

          <Route path="/bung-karno-bapak-bangsa">
            <BkbbPage />
          </Route>

          <Route path="/partai">
            <PartaiPage />
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>

          <Route path="*">
            <HomePage />
          </Route>
        </Switch>
      </div>
      <BgRed />
      <MainFooter />
    </Router>
  );
}

export default App;
