import React from "react";
import styled from "styled-components";
import voucherImg from "../images/voucherSesja.jpg";
import { TiArrowRightOutline } from "react-icons/ti";

const Voucher = () => {
  return (
    <Wrapper className="voucher mainPage">
      <p className="subtitle">
        Jeśli chcesz zrobić komoś prezent, zachęcam do wykupienia VOUCHERA na
        sesję!
      </p>
      <div className="voucherOrder">
        <img src={voucherImg} alt="voucher" />
        {/* <button className="voucherBtn">Zamów Vocher</button> */}
      </div>
      <p>
        Voucher podarunkowy na sesję fotograficzną to dzisiaj popularny prezent!
        Spraw przyjemność swoim najbliższym i podaruj im okazję do stworzenia
        sobie niezwykłej pamiątki.
      </p>
      <ul>
        <h3 className="subtitle">Jak zamówić voucher?</h3>
        <li>
          <TiArrowRightOutline className="icon" />
          Wybierz rodzaj sesji zdjęciowej aby sprawdzić cenę. Cena uwzględnia
          samą sesję zdjęciową, bez kosztu ewentualnego albumu i dojazdu.
        </li>
        <li>
          <TiArrowRightOutline className="icon" />
          Wyśli przelew na konto: Alior Bank 00 0000 0000 0000 0000 0000 0000. W
          tytule przelewu należy podać nazwę sesji zdjęciowej.
        </li>
        <li>
          {" "}
          <TiArrowRightOutline className="icon" />
          Wyśli potwierdzenie przelewu na kamilfotograf@gmail.com.
        </li>
        <li>
          <TiArrowRightOutline className="icon" />
          Po zaksięgowaniu przelewu przygotowuje voucher i wystawiam rachunek.
        </li>
        <li>
          <TiArrowRightOutline className="icon" />
          Voucher wraz z rachunkiem za przelew wysyłam listem poleconym Pocztą
          Polską.
        </li>
      </ul>
      <p>
        Voucher jest ważny przez dwa lata od dnia wystawienia. W razie
        jakichkolwiek pytań napisz do mnie poprzez formularz kontaktowy, lub
        zadzwoń pod numer 123 456 789 aby ustalić szczegóły.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 80vw;
  .subtitle {
    font-size: 1.8rem;
  }
  .voucherOrder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    margin: 0 auto;
    img {
      height: 50vh;
      margin: 5vh auto;
    }
    /* button {
      padding: 10px 20px;
      font-family: var(--titleFont);
      border: 2px solid white;
      font-size: 2rem;
      color: white;
      background: transparent;
      margin-left: 5vw;
    } */
  }
  p {
    font-size: 1.2rem;
    width: 90%;
    margin: 3vh auto;
  }
  ul {
    width: 80%;
    margin: 3vh auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    li {
      font-size: 1.2rem;
      display: flex;
    }
  }
`;

export default Voucher;
