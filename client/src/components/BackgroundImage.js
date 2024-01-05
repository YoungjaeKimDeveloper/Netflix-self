import React from "react";
import styled from "styled-components";
export default function BackgroundImage() {
  return (
    <div>
      <BackgroundContainer>
        <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg" />
      </BackgroundContainer>
    </div>
  );
}

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
