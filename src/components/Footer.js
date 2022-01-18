import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} Kamil Łach - Sesje Fotograficzne.
        Wszelkie prawa zastrzeżone.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--navbarBgColor);
  font-family: var(--titleFont);
  font-size: 1.3rem;
`;

export default Footer;
