import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { TiArrowRightOutline } from "react-icons/ti";

import { offers } from "../data";
import Voucher from "../components/Voucher";
import SingleOffer from "../components/SingleOffer";
import DetailsOffer from "../components/DetailsOffer";

const ServicesPage = ({ showDetails, setShowDetails }) => {
  // const [showDetails, setShowDetails] = useState("");
  const oneOffer = offers.find((item) => item.category === showDetails);
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
      </Carousel>
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
        <p>
          <TiArrowRightOutline className="icon" />
          Działam na terenie powiatu krakowskiego oraz brzeskiego.
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