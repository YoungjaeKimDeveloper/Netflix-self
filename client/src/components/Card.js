import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

const Card = () => {
  const [onHovered, setOnHovered] = useState(true);
  const navigate = useNavigate();
  return (
    <CardContainer
      onMouseEnter={() => setOnHovered(true)}
      onMouseLeave={() => setOnHovered(false)}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU"
        alt="movie poster"
        onClick={() => navigate("/player")}
      />
      {onHovered && (
        <div className="hover">
          <div className="image-video-wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU"
              alt="movie poster"
              onClick={() => navigate("/player")}
            />
            <video
              src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
              autoPlay
              controls
            />
          </div>
        </div>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 230px;
  height: auto;
  background-color: yellow;
  img {
    width: 100%; /* 이미지가 컨테이너의 전체 너비를 차지하도록 설정 */
    height: 100%; /* 이미지가 컨테이너의 전체 높이를 차지하도록 설정 */
    object-fit: cover; /* 이미지가 비율을 유지하며 컨테이너를 채우도록 설정 */
  }
`;

export default Card;
