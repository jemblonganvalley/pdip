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
import ContainerCard from "./components/containerCard/ContainerCard";
import Search from "./components/pages/search/Search";
import ContainerCardGallery from "./components/gallery/ContainerCardGallery";
import BeritaFoto from "./components/pages/berita/beritafoto/BeritaFoto";
import Gallery from "./components/pages/berita/gallery/Gallery";
import ContainerCardMultimedia from "./components/multimedia/ContainerCardMultimedia";
import FormPdi from "./components/pages/informasi/formpdi/FormPdi";
import FormKeluhan from "./components/pages/informasi/formkeluhan/FormKeluhan";
import CardBkbbQuotes2 from "./components/cardbkbbquotes2/CardBkbbQuotes2";
import PidatoAll from "./components/pages/KetuaUmum/pidatoAll/PidatoAll";
import MultimediaAll from "./components/pages/multimediaPage/multimediaAll/MultimediaAll";

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
    window.scrollTo(0, 0);
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
  }, []);

  return (
    <Router>
      {/* {console.log(`
        >>>>>>>>>>>>>>>>>>>>
        ${token}
      `)} */}

      {tkn && <MainNavbar hide={hide} token={tkn} />}

      <div className="App">
        <Switch>
          {/* BLOG PAGE  */}
          <Route path="/detail-article/:id">
            <Page1 />
          </Route>

          <Route path="/ketua-umum/pidato/all">
            <PidatoAll />
          </Route>

          <Route path="/pidato-ketua-umum">
            <PidatoAll />
          </Route>

          {/* CONTAINER CARD */}
          <Route path="/article/:category_id">
            <ContainerCard />
          </Route>

          {/* CONTAINER CARD GALLERY*/}
          <Route path="/gallery/detail-gallery/:id/:slug">
            <Gallery />
          </Route>

          <Route path="/formkeluhan">
            <FormKeluhan />
          </Route>

          <Route path="/formpdi">
            <FormPdi />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          {/* CONTAINER CARD GALLERY*/}
          <Route path="/gallery">
            <ContainerCardGallery />
          </Route>

          <Route path="/multimedia/all">
            <MultimediaAll />
          </Route>

          {/* CONTAINER CARD MULTIMEDIA*/}
          <Route path="/multimedia/:category">
            <ContainerCardMultimedia />
          </Route>

          <Route path="/detail-multimedia/:id/:slug">
            <Page2 />
          </Route>

          <Route path="/search/:par">
            <Search />
          </Route>
          {/* 
          <Route path="/multimedia/wawancara">
            <Wawancara />
          </Route>

          <Route path="/multimedia/teaser">
            <VideoTeaser />
          </Route>

          <Route path="/multimedia/dokumentasi">
            <VideoDokumen />
          </Route> */}

          <Route path="/event">
            <EventPage />
          </Route>

          <Route path="/wejanganbungkarno">
            <WejanganBungKarno />
          </Route>

          <Route path="/materipokok">
            <MateriPokok />
          </Route>

          <Route path="/videomedia">
            <VideoMedia />
          </Route>

          <Route path="/dpd/:id/:nameProv">
            <Dpd />
          </Route>

          <Route path="/detailpengurus/:id/:name/:grade">
            <DetailPengurus />
          </Route>

          <Route path="/struktur-dpp">
            <StrukturPage slug="struktur-dpp" grade="pengurus" />
          </Route>

          <Route path="/anggota-legislatif">
            <StrukturPage slug="anggota-legislatif" grade="legislatif" />
          </Route>

          {/* <Route path="/page2">
            <Page2 />
          </Route> */}

          {/* BLOG PAGE  */}

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

          {/* BUNG KARNO BAPAK BANGSA */}

          <Route path="/bung-karno-bapak-bangsa/quotes/:id">
            <WejanganBungKarno />
          </Route>

          {/* <Route path="/quotes/:id">
            <BkbbWejangan />
          </Route> */}

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
