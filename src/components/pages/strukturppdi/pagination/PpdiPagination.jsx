import React, { useState } from "react";
import AngkaPaginationEvent from "../../../paginationevent/AngkaPaginationEvent";
import megawati12 from "../../../../img/megawati12.png";
import CardInfo from "../../../cardinfo/CardInfo";
import CardMateriPokok from "../../../cardmateripokok/CardMateriPokok";

const PpdiPagination = () => {
  let [info, setInfo] = useState([
    {
      pageMateriPk: 1,
      imgMateriPk: megawati12,
      txtAuthor: "Berita |",
      txtHeadline: "Admin PDI Perjuangan | 1 Januari 2019",
      txtParagrapMateriPk: "lorem ipsum dolor sit amet.",
    },
    {
      pageMateriPk: 2,
      imgMateriPk: megawati12,
      txtAuthor: "Berita |",
      txtHeadline: "Admin PDI Perjuangan | 1 Januari 2019",
      txtParagrapMateriPk: "lorem ipsum dolor sit amet.",
    },
    {
      pageMateriPk: 3,
      imgMateriPk: megawati12,
      txtAuthor: "Berita |",
      txtHeadline: "Admin PDI Perjuangan | 1 Januari 2019",
      txtParagrapMateriPk: "lorem ipsum dolor sit amet.",
    },
    {
      pageMateriPk: 4,
      imgMateriPk: megawati12,
      txtAuthor: "Berita |",
      txtHeadline: "Admin PDI Perjuangan | 1 Januari 2019",
      txtParagrapMateriPk: "lorem ipsum dolor sit amet.",
    },
    {
      pageMateriPk: 5,
      imgMateriPk: megawati12,
      txtAuthor: "Berita |",
      txtHeadline: "Admin PDI Perjuangan | 1 Januari 2019",
      txtParagrapMateriPk: "lorem ipsum dolor sit amet.",
    },
    {
      pageMateriPk: 6,
      imgMateriPk: megawati12,
      txtAuthor: "Berita |",
      txtHeadline: "Admin PDI Perjuangan | 1 Januari 2019",
      txtParagrapMateriPk: "lorem ipsum dolor sit amet.",
    },
    {
      pageMateriPk: 7,
      imgMateriPk: megawati12,
      txtAuthor: "Berita |",
      txtHeadline: "Admin PDI Perjuangan | 1 Januari 2019",
      txtParagrapMateriPk: "lorem ipsum dolor sit amet.",
    },
    {
      pageMateriPk: 8,
      imgMateriPk: megawati12,
      txtAuthor: "Berita |",
      txtHeadline: "Admin PDI Perjuangan | 1 Januari 2019",
      txtParagrapMateriPk: "lorem ipsum dolor sit amet.",
    },
    {
      pageMateriPk: 9,
      imgMateriPk: megawati12,
      txtAuthor: "Berita |",
      txtHeadline: "Admin PDI Perjuangan | 1 Januari 2019",
      txtParagrapMateriPk: "lorem ipsum dolor sit amet.",
    },
    {
      pageMateriPk: 10,
      imgMateriPk: megawati12,
      txtAuthor: "Berita |",
      txtHeadline: "Admin PDI Perjuangan | 1 Januari 2019",
      txtParagrapMateriPk: "lorem ipsum dolor sit amet.",
    },
    {
      pageMateriPk: 11,
      imgMateriPk: megawati12,
      txtAuthor: "Berita |",
      txtHeadline: "Admin PDI Perjuangan | 1 Januari 2019",
      txtParagrapMateriPk: "lorem ipsum dolor sit amet.",
    },
    {
      pageMateriPk: 12,
      imgMateriPk: megawati12,
      txtAuthor: "Berita |",
      txtHeadline: "Admin PDI Perjuangan | 1 Januari 2019",
      txtParagrapMateriPk: "lorem ipsum dolor sit amet.",
    },
  ]);

  let [currentPage, setCurrentPage] = useState(1);
  let [itemPpdi] = useState(12);
  const indexOfLastPost = currentPage * itemPpdi;
  const indexOfFirstPost = indexOfLastPost - itemPpdi;
  const currentPosts = info.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <React.Fragment>
      <div
        className="wrapperSiaran"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <CardMateriPokok cardMateriPokokItem={currentPosts} />
      </div>

      <nav
        aria-label="Page navigation example"
        style={{
          marginTop: "0px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AngkaPaginationEvent
          itemEventPerPage={itemPpdi}
          totalPosts={info.length}
          paginate={paginate}
        />
      </nav>
    </React.Fragment>
  );
};

export default PpdiPagination;
