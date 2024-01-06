import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import styled from "styled-components";

const Player = () => {
  const navigate = useNavigate();
  return (
    <PlayContainer>
      <div className="player">
        <div className="backArrow" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </div>
        <video
          src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
          autoPlay
          controls
        />
      </div>
    </PlayContainer>
  );
};

const PlayContainer = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    position: relative;
  }
  .backArrow {
    color: white;
    position: absolute;
    z-index: 1;
    top: 10px;
    padding: 5px 10px;
    cursor: pointer;
    svg {
      font-size: 24px;
    }
  }
  video {
    width: 100%;
    height: 100%;
  }
`;

export default Player;
