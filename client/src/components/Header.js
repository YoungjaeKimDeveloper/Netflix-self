import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function (props) {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div className="logo">
        <img
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
          alt="No interNet Connection"
        />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign Up"}
      </button>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  .logo {
    img {
      height: 3.2rem;
      padding: 1rem;
    }
  }
  button {
    padding: 0.6rem;
    border: none;
    background-color: red;
    color: white;
    border-radius: 10px;
    font-weight: 800;
  }
`;
