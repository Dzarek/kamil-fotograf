import styled from "styled-components";
import MyForm from "../components/MyForm";

import { FiMapPin, FiFacebook, FiInstagram } from "react-icons/fi";
import { BsPiggyBank } from "react-icons/bs";
import { MdPhoneAndroid, MdMailOutline } from "react-icons/md";

const ContactPage = () => {
  return (
    <Wrapper className="mainPage" id="contact">
      <div className="title">
        <h2>Kontakt</h2>
      </div>
      <h3>Jeśli masz jakieś pytania, śmiało napisz do mnie lub zadzwoń!</h3>
      <div className="contactContainer">
        <div className="contactMedia">
          <p>
            <span>
              <FiMapPin />
            </span>
            Armi Krajowej 99, 30-200 Kraków
          </p>
          <p>
            <span>
              <MdPhoneAndroid />
            </span>{" "}
            123 456 789
          </p>
          <p>
            <span>
              <MdMailOutline />
            </span>{" "}
            kamilfotograf@gmail.com
          </p>
          <p>
            <span>
              <BsPiggyBank />
            </span>{" "}
            Alior Bank: 00 0000 0000 0000 0000 0000 0000
          </p>
          <p className="fbIn">
            {/* <span>
              <FiFacebook />
            </span> */}
            <a href="https://pl-pl.facebook.com/">
              <FiFacebook />
            </a>
            <a href="https://www.instagram.com/">
              <FiInstagram />
            </a>
            {/* <span>
              <FiInstagram />
            </span> */}
          </p>
        </div>
        <div className="formik">
          <div className="myForm">
            <MyForm />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    margin: -3vh auto 12vh;
    text-align: center;
    font-family: var(--titleFont);
    font-weight: 500;
    font-size: 2rem;
    color: var(--secondaryColor2);
  }
  .contactContainer {
    display: flex;
    justify-content: space-between;
    /* align-items: flex-start; */
    align-items: center;
    font-size: 1.2rem;
    width: 90%;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      margin-top: 5vh;
    }
  }
  .contactMedia {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media screen and (max-width: 800px) {
      width: 95vw;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 2vh auto 0 2vh;
      span {
        border: 2px solid var(--secondaryColor);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
      }
    }
    .fbIn {
      align-self: center;
      margin: 2vh auto;
      a {
        border: 2px solid var(--secondaryColor);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 20px;
        color: var(--primaryColor);
        text-decoration: none;
        transition: 0.4s;
        :hover {
          background: var(--secondaryColor);
        }
      }
    }
  }
  .formik {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 800px) {
      width: 95vw;
    }
  }
`;

export default ContactPage;
