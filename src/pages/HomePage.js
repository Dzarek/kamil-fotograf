import React from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-router-dom";

import headerCiaza from "../images/header/headerCiaza.jpg";
import headerRodzinne from "../images/header/headerRodzinne.jpg";
import headerSlub from "../images/header/headerSlub.jpg";
import headerPortfolio from "../images/header/headerPortfolio.jpg";
import headerModa from "../images/header/headerModa.jpg";

const HomePage = () => {
  return (
    <Wrapper>
      <div className="headerImages">
        <Carousel
          // className="headerImages"
          infinite
          autoPlay={5000}
          animationSpeed={2000}
          slidesPerPage={1}
        >
          <div className="headerPart">
            <img src={headerCiaza} alt="" />
            <section className="headerInfo">
              <p>/sesje ciążowe/</p>
              <h2>Sesja ciążowa dla Ciebie i Twojego brzuszka</h2>
              <Link to="/">Zobacz więcej</Link>
            </section>
          </div>
          <div className="headerPart">
            <img src={headerRodzinne} alt="" />
          </div>
          <div className="headerPart">
            <img src={headerSlub} alt="" />
          </div>
          <div className="headerPart">
            <img src={headerPortfolio} alt="" />
          </div>
          <div className="headerPart">
            <img src={headerModa} alt="" />
          </div>
        </Carousel>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  .headerImages {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80vh;
    width: 90vw;
  }
  .headerPart {
    height: 80vh;
    width: 90vw;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      /* filter: brightness(0.5); */
    }
    .headerInfo {
      position: absolute;
      z-index: 1;
      bottom: 10%;
      left: 10%;
    }
  }
`;
export default HomePage;
