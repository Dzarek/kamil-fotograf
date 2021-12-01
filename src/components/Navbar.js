import React from "react";
import styled from "styled-components";

// import logo192 from "../images/logo192.png";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <h5>Oferta</h5>
        <h5>Galeria</h5>
        <div className="logo">
          <h2>
            Kamil Łach
            {/* <img src={logo192} alt="logo" /> */}
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
    h5 {
      font-size: 1.3rem;
      font-family: "Genos", sans-serif;
      margin: 10px 1.5vw 0;
      text-transform: uppercase;
      transition: 0.4s;
      cursor: pointer;
      :hover {
        color: var(--secondaryColor);
      }
    }
    .logo {
      margin: 0 5vw;
      h2 {
        font-family: "Genos", sans-serif;
        font-size: 2rem;
        letter-spacing: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin-left: -30px; */
        /* img {
          width: 30px;
          margin: 0 20px;
          animation: imgR 2s linear infinite alternate;
          @keyframes imgR {
            100% {
              transform: scale(1.5);
            }
          }
        } */
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
`;

export default Navbar;
