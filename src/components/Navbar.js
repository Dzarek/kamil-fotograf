import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { IoMdImages } from "react-icons/io";
// import { FaMoneyBillWave } from "react-icons/fa";
// import { FaCoins } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoHome } from "react-icons/io5";

const Navbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <>
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
          <Link
            to="aboutMe"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-30}
          >
            O mnie
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-100}
          >
            Kontakt
          </Link>
        </div>
        <button
          className={offset > 200 ? "upBtn" : "upBtn upBtnNone"}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <BsFillArrowUpSquareFill />
        </button>
      </Wrapper>
      <Wrapper2>
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
        <div className="navbar navbarBg">
          <Link
            to="home"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
          >
            <IoHome />
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            // offset={-30}
          >
            <IoMdImages />
          </Link>
          <Link
            to="offer"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            // offset={20}
          >
            <FaHandshake />
          </Link>
          <Link
            to="aboutMe"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            // offset={30}
          >
            <BsFillPersonFill />
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            // offset={-30}
          >
            <MdOutlinePhoneAndroid />
          </Link>
        </div>
      </Wrapper2>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  height: 10vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;
  @media screen and (max-width: 800px) {
    display: none;
  }
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
  .upBtn {
    position: fixed;
    bottom: 7vh;
    right: 3vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--primaryColor);
    transition: 0.5s;
    cursor: pointer;
    :hover {
      color: var(--secondaryColor2);
    }
  }
  .upBtnNone {
    opacity: 0;
  }
`;
const Wrapper2 = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }
  .logo {
    cursor: pointer;
    margin: 0 auto;
    position: absolute;
    height: 10vh;
    width: 100vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    background: var(--logoBgMobile);
  }
  h2 {
    font-family: "Genos", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    letter-spacing: 1px;
    margin-left: 0;
    /* color: white1; */
    .logoLine {
      margin: 5px 30px 0;
      height: 1.5rem;
      width: 3px;
      background: white;
      background: #999;
      animation: logoR 4s linear infinite;

      @keyframes logoR {
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
  .navbar {
    margin: 0 auto;
    position: fixed;
    height: 10vh;
    width: 100vw;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
    justify-content: space-evenly;
    align-items: center;
    z-index: 9999;
    h5,
    a {
      font-weight: 600;
      font-size: 1.8rem;
      font-family: "Genos", sans-serif;
      text-transform: uppercase;
      transition: 0.4s;
      cursor: pointer;
      display: flex;
      align-items: center;
      &.active {
        color: var(--secondaryColor);
      }
    }
  }
  .navbarBg {
    background: var(--navbarBgColor);
    transition: 0.5s;
  }
`;

export default Navbar;
