import React, { useState } from "react";
import styled from "styled-components";
import { gallery } from "../data";

const allCategories = [
  ...new Set(gallery.map((item) => item.category)),
  "wszystkie",
];
const galleryCategory = gallery.filter((item) => item.category === "ciąża");

const GalleryPage = () => {
  const [menuItems, setMenuItems] = useState(galleryCategory);
  const [categories] = useState(allCategories);
  const [activeBtn, setActiveBtn] = useState("ciąża");

  const filterItems = (category) => {
    if (category === "wszystkie") {
      setMenuItems(gallery);
      setActiveBtn(category);
      return;
    }
    const newItems = gallery.filter((item) => item.category === category);
    setMenuItems(newItems);
    setActiveBtn(category);
  };

  return (
    <Wrapper>
      <div className="mainPage">
        <div className="title">
          <h2>Galeria</h2>
        </div>
        <div className="galleryCategory">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                onClick={() => filterItems(category)}
                className={activeBtn === category ? "activeBtn" : null}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="galleryContent">
          {menuItems.map((item) => {
            const { img } = item;
            return img.map((item, index) => {
              return (
                <img className="oneImg" key={index} src={item} alt={index} />
              );
            });
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .galleryCategory {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60vw;
    margin: 0 auto;
    button {
      padding: 10px;
      background: transparent;
      color: white;
      border: none;
      border-bottom: 2px solid var(--secondaryColor);
      border-radius: 5px;
      font-size: 1.2rem;
      /* text-transform: uppercase; */
      cursor: pointer;
      font-weight: 400;
      font-family: "Kanit", sans-serif;
      transition: background 0.5s;
      :hover {
        background: #333;
      }
    }
    .activeBtn {
      border: 2px solid var(--secondaryColor);
    }
  }
  .galleryContent {
    width: 100vw;
    margin: 10vh auto 0;
    margin-left: -5vw;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    flex-wrap: wrap;
    padding: 5vh 12vw;
    background: #111;
    .oneImg {
      height: 200px;
      margin: 30px 10px;
    }
  }
`;

export default GalleryPage;
