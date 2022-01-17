import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <Wrapper>
      <div className={offset === 0 ? "navbar" : "navbar navbarBg"}>
        <Link
          to="gallery"
          smooth={true}
          duration={1000}
          activeClass="active"
          spy={true}
          offset={-100}
        >
          Galeria
        </Link>
        <Link
          to="offer"
          smooth={true}
          duration={1000}
          activeClass="active"
          spy={true}
          offset={-100}
        >
          Oferta
        </Link>
        {/* <h5>Oferta</h5> */}
        <div
          onClick={() => {
            scroll.scrollToTop();
          }}
          className="logo"
        >
          <h2>
            Kamil Łach
            <div className="logoLine"></div>
            <span>Fotograf</span>{" "}
          </h2>
        </div>
        <h5>O mnie</h5>
        <h5>Kontakt</h5>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  height: 10vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;
  .navbar {
    margin: 0 auto;
    position: fixed;
    height: 10vh;
    width: 100vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    h5,
    a {
      font-weight: 600;
      font-size: 1.3rem;
      font-family: "Genos", sans-serif;
      margin: 10px 1.5vw 0;
      text-transform: uppercase;
      transition: 0.4s;
      cursor: pointer;
      &.active {
        color: var(--secondaryColor);
      }
      :hover {
        /* color: var(--secondaryColor); */
        font-size: 1.4rem;
      }
    }
    .logo {
      margin: 0 5vw;
      cursor: pointer;
      h2 {
        font-family: "Genos", sans-serif;
        font-size: 2rem;
        letter-spacing: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -1.5rem;
        .logoLine {
          margin: 5px 30px 0;
          height: 1.5rem;
          width: 3px;
          background: white;
          background: #999;
          animation: logoR 4s linear infinite;
          @keyframes logoR {
            /* 25% {
              transform: rotate(90deg);
            }
            50% {
              transform: rotate(180deg);
            }
            75% {
              transform: rotate(270deg);
            }
            100% {
              transform: rotate(360deg);
            } */
            20% {
              transform: rotate(0deg);
            }
            30% {
              transform: rotate(90deg);
            }
            40% {
              transform: rotate(90deg);
            }
            50% {
              transform: rotate(180deg);
            }
            60% {
              transform: rotate(180deg);
            }
            70% {
              transform: rotate(270deg);
            }
            80% {
              transform: rotate(270deg);
            }
            90% {
              transform: rotate(360deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        }
        span {
          color: var(--secondaryColor);
        }
      }
    }
  }
  .navbarBg {
    background: var(--navbarBgColor);
    transition: 0.5s;
  }
`;

export default Navbar;
