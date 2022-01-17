import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { ImCross } from "react-icons/im";
import { TiArrowRightOutline } from "react-icons/ti";

import ciaza1 from "../images/gallery/ciaza1.jpg";
import ciaza2 from "../images/gallery/ciaza2.jpg";
import moda1 from "../images/gallery/moda1.jpg";
import portret1 from "../images/gallery/portrety1.jpg";
import rodzinne1 from "../images/gallery/rodzinne1.jpg";
import slubne1 from "../images/gallery/slubne1.jpg";

import { offers } from "../data";
import Voucher from "../components/Voucher";
import SingleOffer from "../components/SingleOffer";
import DetailsOffer from "../components/DetailsOffer";

const ServicesPage = () => {
  const [showDetails, setShowDetails] = useState("");
  const oneOffer = offers.find((item) => item.category === showDetails);
  console.log(oneOffer);
  return (
    <Wrapper id="offer" className="mainPage">
      <div className="title">
        <h2>Oferta</h2>
      </div>
      <p className="subtitle">
        Moja oferta składa się z następujących sesji zdjęciowych:
      </p>
      <Carousel
        className="allOffer"
        infinite
        autoPlay={3000}
        animationSpeed={1000}
        slidesPerPage={3}
        breakpoints={{
          900: {
            slidesPerPage: 1,
          },
        }}
        addArrowClickHandler
        stopAutoPlayOnHover
        arrowLeft={<IoIosArrowDropleftCircle className="arrow arrowLeft" />}
        arrowRight={<IoIosArrowDroprightCircle className="arrow arrowRight" />}
      >
        {offers.map((item) => {
          return (
            <SingleOffer
              key={item.id}
              offer={item}
              setShowDetails={setShowDetails}
            />
          );
        })}
        {/* <div className="singleOffer">
          <div
            style={{ backgroundImage: `url(${ciaza1})` }}
            className="singleBG"
          ></div>
          <div className="singleContent">
            <h3 className="title">ciążowe</h3>
            <h2 className="price">200 zł</h2>
            <button
              onClick={() => setShowDetails("ciaza")}
              className="detailsBtn"
            >
              szczegóły
            </button>
          </div>
        </div>
        <div className="singleOffer">
          <div
            style={{ backgroundImage: `url(${moda1})` }}
            className="singleBG"
          ></div>
          <div className="singleContent">
            <h3 className="title">moda</h3>
            <h2 className="price">od 300 zł</h2>
            <button className="detailsBtn">szczegóły</button>
          </div>
        </div>
        <div className="singleOffer">
          <div
            style={{ backgroundImage: `url(${portret1})` }}
            className="singleBG"
          ></div>
          <div className="singleContent">
            <h3 className="title">portrety</h3>
            <h2 className="price">od 100 zł</h2>
            <button className="detailsBtn">szczegóły</button>
          </div>
        </div>
        <div className="singleOffer">
          <div
            style={{ backgroundImage: `url(${rodzinne1})` }}
            className="singleBG"
          ></div>
          <div className="singleContent">
            <h3 className="title">rodzinne</h3>
            <h2 className="price">od 300 zł</h2>
            <button className="detailsBtn">szczegóły</button>
          </div>
        </div>
        <div className="singleOffer">
          <div
            style={{ backgroundImage: `url(${slubne1})` }}
            className="singleBG"
          ></div>
          <div className="singleContent">
            <h3 className="title">ślubne</h3>
            <h2 className="price">od 400 zł</h2>
            <button className="detailsBtn">szczegóły</button>
          </div>
        </div> */}
      </Carousel>
      {/* {showDetails === "moda" && (
        <div className="detailsBG">
          <div className="details">
            <header style={{ backgroundImage: `url(${ciaza2})` }}>
              <button onClick={() => setShowDetails(false)}>
                <ImCross className="detailIcon" />
              </button>
            </header>
            <h2 className="detailsTitle">Sesja Ciążowa</h2>
            <div className="detailsContent">
              <div className="firstPart">
                <h3 className="detailsPrice">
                  <span>Cena:</span> 200 zł
                </h3>
                <h3 className="detailsNumber">
                  <span>Minimalna ilość zdjęć:</span> 20
                </h3>
                <h3 className="detailsTime">
                  <span>Czas:</span> ok. 2h
                </h3>
                <h3 className="detailsPlace">
                  {" "}
                  <span>Miejsce:</span> plener, dom
                </h3>
                <h3 className="detailsReady">
                  {" "}
                  <span>Gotowe zdjęcia:</span> do 3 tygodni
                </h3>
                <h3 className="detailsAlbum">
                  {" "}
                  <span>Album:</span> za dodatkową opłatą
                </h3>
                <h3 className="detailsSize">
                  {" "}
                  <span>Rozdzielczość:</span> Full HD
                </h3>
              </div>
              <div className="detailsBorder"></div>
              <div className="secondPart">
                <h3>Opis:</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  ipsam aspernatur cumque praesentium ratione tempora officia
                  sint sit adipisci expedita, ut animi aliquam nihil. Alias
                  totam ut consequuntur ducimus corrupti?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  ipsam aspernatur cumque praesentium ratione tempora officia
                  sint sit adipisci expedita, ut animi aliquam nihil. Alias
                  totam ut consequuntur ducimus corrupti?
                </p>
              </div>
            </div>
          </div>
        </div>
      )} */}
      {showDetails && (
        <DetailsOffer oneOffer={oneOffer} setShowDetails={setShowDetails} />
      )}
      <div className="servicesInfo">
        <p>
          <TiArrowRightOutline className="icon" />
          Zdjęcia są wykonywane profesionalnym sprzętem fotograficznym,
          odpowiednim do scenerii oraz typu sesji zdjęciowej.
        </p>
        <p>
          <TiArrowRightOutline className="icon" />
          <span>
            Cena uwzględnia samą sesję zdjęciową i nie obejmuje ona ceny
            ewentualnego albumu oraz kosztów dojazdu. Ostateczna kwota jest
            uzgodniona podpisując umowę.
          </span>
        </p>
        <p>
          <TiArrowRightOutline className="icon" />
          Umowę można zawrzeć podczas spotkania lub korespondencyjnie. Zawarcie
          umowy wymaga wpłacenia zaliczki. Wysokość zaliczki jest równa 50%
          całkowitej ceny.
        </p>
        <p></p>
      </div>
      <Voucher />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 1vh;
  .allOffer {
    width: 100%;
    height: 70vh;
    margin: 5vh auto;
    .arrow {
      font-size: 2rem;
      color: var(--secondaryColor);
      cursor: pointer;
    }
    .singleOffer {
      width: 90%;
      height: 65vh;
      position: relative;
      .singleBG {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px;
        /* background-image: url(${ciaza1}); */
        background-size: cover;
        background-position: center;
        filter: brightness(0.4);
        transition: 0.5s;
      }
      .singleContent {
        width: 100%;
        height: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: "Kanit", sans-serif;
        color: white;
        .title {
          text-transform: uppercase;
          width: 60%;
          border-bottom: 2px solid white;
          padding-bottom: 15px;
          font-size: 2rem;
          text-shadow: 3px 3px 3px black;
        }
        .price {
          font-size: 2rem;
          margin-top: 50%;
          text-shadow: 3px 3px 3px black;
        }
        .detailsBtn {
          background-color: transparent;
          padding: 5px 20px;
          font-size: 1.5rem;
          font-family: "Kanit", sans-serif;
          color: white;
          border: 2px solid var(--primaryColor);
          border-radius: 3px;
          text-shadow: 3px 3px 3px black;
          transition: 0.3s;
          cursor: pointer;
          :hover {
            background-color: white;
            color: #222;
            text-shadow: none;
          }
        }
      }
      :hover .singleBG {
        filter: none;
      }
    }
  }
  .detailsBG {
    background: rgba(0, 0, 0, 0.9);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    .details {
      background-color: #111;
      width: 55vw;
      height: 80vh;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -45%);
      color: white;
      overflow: auto;
      /* padding: 30px; */
      border-radius: 5px;
      border: 2px solid var(--secondaryColor);
      header {
        width: 100%;
        height: 50%;
        /* position: relative;
        top: 0;
        left: 0; */
        background-size: cover;
        background-position: center;
        filter: saturate(0.1);
        button {
          position: absolute;
          top: 0%;
          right: 5%;
          background: rgba(0, 0, 0, 0.8);
          padding: 10px 15px;
          border-radius: 0 0 15px 15px;
          border: none;
          font-size: 1.5rem;
          color: white;
          cursor: pointer;
          .detailIcon {
            transition: 0.3s;
          }
          :hover .detailIcon {
            transform: rotate(90deg);
          }
        }
      }
      .detailsTitle {
        /* position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%); */
        margin: 2vh auto 0;
        text-align: center;
        text-transform: uppercase;
        font-family: var(--titleFont);
        text-shadow: 3px 3px 3px black;
        font-size: 3rem;
      }
      .detailsContent {
        margin: 5vh auto;
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-family: var(--textFont);
        .firstPart {
          width: 40%;
          display: flex;
          flex-direction: column;
          h3 {
            margin-bottom: 3vh;
            span {
              color: var(--secondaryColor2);
              margin-right: 5px;
            }
          }
        }
        .detailsBorder {
          background: var(--secondaryColor);
          width: 2px;
          height: 40vh;
          justify-self: center;
        }
        .secondPart {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          h3 {
            font-family: var(--titleFont);
            color: var(--secondaryColor2);
            font-size: 2rem;
            margin-bottom: 2vh;
          }
          p {
            margin-bottom: 3vh;
          }
        }
      }
    }
  }
  .servicesInfo {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 5vh auto;
    p {
      margin-bottom: 2vh;
      font-size: 1.2rem;
      display: flex;
    }
  }
`;

export default ServicesPage;
