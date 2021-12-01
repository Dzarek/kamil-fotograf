import React, { useState } from "react";
import styled from "styled-components";
import { gallery } from "../data";
import Masonry from "react-masonry-css";
import { SRLWrapper } from "simple-react-lightbox";

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
  const breakpointColumnsObj = {
    default: 4,
    1280: 3,
    900: 2,
    500: 1,
  };

  const galleryImages = menuItems.map((item) => {
    const { img } = item;
    return img.map((item, index) => {
      return <img className="oneImg" key={index} src={item} />;
    });
  });

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
        <SRLWrapper>
          <div className="galleryContent">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {galleryImages}
            </Masonry>
          </div>
        </SRLWrapper>
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
      color: var(--primaryColor);
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
        background: var(--galleryBtnBg);
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
    padding: 10vh 12vw;
    background: var(--galleryContentColor);
  }
  .oneImg {
    cursor: pointer;
    filter: brightness(0.8);
    transition: 0.4s;
    :hover {
      filter: brightness(1);
    }
  }
  .my-masonry-grid {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
  }
  /* .my-masonry-grid_column {
    background-clip: padding-box;
  } */

  .my-masonry-grid_column > img {
    background: grey;
    margin-bottom: 30px;
    width: 250px;
  }
`;

export default GalleryPage;
