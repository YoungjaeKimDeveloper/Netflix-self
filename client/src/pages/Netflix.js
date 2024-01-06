import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { FaInfoCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
// Library , Component
import TopNav from "../components/TopNav";
export default function Netflix() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.pageXOffset = null);
  };
  return (
    <div>
      <HeroContainer>
        <TopNav isScrolled={isScrolled} />
        <div className="hero">
          <img
            src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
            alt="hero-img"
            className="background-image"
          />
          <div className="container">
            <div className="title">
              <h1>Super Man</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="buttons">
              <button className="playBtn" onClick={() => navigate("/player")}>
                Play
              </button>
              <button className="moreBtn">More</button>
            </div>
          </div>
        </div>
      </HeroContainer>
    </div>
  );
}

const HeroContainer = styled.div`
  color: white;
  img {
    width: 100%;
    height: 70vh;
  }
  .hero {
    position: relative;
    img {
      filter: brightness(40%);
    }
  }
  .container {
    position: absolute;
    top: 10rem;
    left: 40px;
    width: 80vh;
    height: 100%;
    h1 {
      color: red;
      font-size: 5rem;
      margin-bottom: 1rem;
    }
    .title {
      margin-bottom: 2rem;
      h1 {
        background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .buttons {
      margin-top: 2.4rem;
      width: 50%;
      display: flex;
      justify-content: space-between;
      button {
        padding: 1rem 2rem;
        font-size: 24px;
        border: none;
        background-color: white;
        color: red;
        font-weight: bold;
        border-radius: 120px;
        text-transform: uppercase;
        transition: 0.7s ease-in-out;
      }
      .playBtn {
        background-color: white;
        color: black;
        &:hover {
          background-color: red;
          color: black;
        }
      }
      .moreBtn {
        background-color: black;
        color: white;
        &:hover {
          background-color: red;
          color: black;
        }
      }
    }
  }
`;
