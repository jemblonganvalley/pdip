import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Wait from "./components/wait/Wait";
import loadable from "@loadable/component";

const HomePage = loadable(() => import("./components/pages/home/HomePage"));
const MainFooter = loadable(() => import("./components/footer/MainFooter"));
const PartaiPage = loadable(() =>
  import("./components/pages/partai/PartaiPage")
);
const MultimediaPage = loadable(() =>
  import("./components/pages/multimediaPage/MultimediaPage")
);
const BkbbPage = loadable(() => import("./components/pages/bkbb/BkbbPage"));
const InformasiPage = loadable(() =>
  import("./components/pages/informasi/InformasiPage")
);
const PemiluPage = loadable(() =>
  import("./components/pages/Pemilu/PemiluPage")
);
const BeritaPage = loadable(() =>
  import("./components/pages/berita/BeritaPage")
);
const KetuaUmumPage = loadable(() =>
  import("./components/pages/KetuaUmum/KetuaUmumPage")
);
const StrukturPage = loadable(() =>
  import("./components/pages/struktur/StrukturPage")
);
const DetailPengurus = loadable(() =>
  import("./components/pages/detailpengurus/DetailPengurus")
);
const Dpd = loadable(() => import("./components/dpd/Dpd"));
const VideoMedia = loadable(() =>
  import("./components/pages/videomedia/VideoMedia")
);
const Page1 = loadable(() => import("./components/pages/berita/page1/Page1"));
const Page2 = loadable(() => import("./components/pages/berita/page2/Page2"));

const BgRed = loadable(() => import("./components/bgRed/BgRed"));
const WejanganBungKarno = loadable(() =>
  import("./components/pages/bkbb/wejanganbungkarno/WejanganBungKarno")
);
const EventPage = loadable(() => import("./components/pages/events/EventPage"));
const ContainerCard = loadable(() =>
  import("./components/containerCard/ContainerCard")
);
const Search = loadable(() => import("./components/pages/search/Search"));
const ContainerCardGallery = loadable(() =>
  import("./components/gallery/ContainerCardGallery")
);
const Gallery = loadable(() =>
  import("./components/pages/berita/gallery/Gallery")
);
const ContainerCardMultimedia = loadable(() =>
  import("./components/multimedia/ContainerCardMultimedia")
);
const FormPdi = loadable(() =>
  import("./components/pages/informasi/formpdi/FormPdi")
);
const FormKeluhan = loadable(() =>
  import("./components/pages/informasi/formkeluhan/FormKeluhan")
);
const PidatoAll = loadable(() =>
  import("./components/pages/KetuaUmum/pidatoAll/PidatoAll")
);
const MultimediaAll = loadable(() =>
  import("./components/pages/multimediaPage/multimediaAll/MultimediaAll")
);
const NewNavbar = loadable(() => import("./components/newnavbar/NewNavbar"));
const DpdDpc = loadable(() => import("./components/pages/dpddpc/DpdDpc"));
const NotFound = loadable(() => import("./components/notFound/NotFound"));

function App() {
  let [hide, setHide] = useState(true);
  let [tkn, setTkn] = useState();
  const getToken = async () => {
    const res = await fetch("https://data.pdiperjuangan.id/api/auth/app", {
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
    window.scrollTo(0, 1);
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
      <Suspense
        fallback={
          <div>
            <Wait />
          </div>
        }
      >
        {/* {tkn && <MainNavbar hide={hide} token={tkn} />} */}
        {tkn && <NewNavbar hide={hide} token={tkn} />}
        <div
          className="App"
          style={{
            marginTop: "9vh",
          }}
        >
          <Switch>
            {/* BLOG PAGE  */}
            <Route path="/Fraksi-Pdi-Perjuangan">
              <PartaiPage redirect="https://www.dpr.go.id/anggota/index/fraksi/3" />
            </Route>
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

            <Route path="/videomedia">
              <VideoMedia />
            </Route>

            <Route path="/dpd/:id/:nameProv">
              <Dpd />
            </Route>

            <Route path="/partai/dpd-dpc">
              <DpdDpc />
            </Route>

            <Route path="/detailpengurus/:id/:name/:grade">
              <DetailPengurus />
            </Route>

            <Route path="/struktur-dpp">
              <StrukturPage slug="struktur-dpp" grade="pengurus" />
            </Route>

            {/* <Route path="/anggota-legislatif">
            <StrukturPage slug="anggota-legislatif" grade="legislatif" />
    
          </Route> */}

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

            <Route path="/" exact={true}>
              <HomePage />
            </Route>

            <Route path="*" exact={true}>
              <NotFound notFoundDisplay="none" />
            </Route>
          </Switch>
        </div>
        <BgRed />

        <MainFooter />
      </Suspense>
    </Router>
  );
}

export default App;
