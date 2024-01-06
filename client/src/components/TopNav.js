import React from "react";
import { LuLogOut } from "react-icons/lu";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
const TopNav = ({ isScrolled }) => {
  const navlinks = [
    { name: "Home", link: "/" },
    { name: "TV Show", link: "/tv" },
    { name: "My List", link: "mylist" },
    { name: "Movies", link: "/movies" },
  ];
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  //   onAuthStateChanged(firebaseAuth, (currentUser) => {
  //     if (!currentUser) navigate("/login");
  //   });

  return (
    <NavContainer>
      <nav className={isScrolled ? "scroll" : "nonScroll"}>
        <div className="left-side">
          <div className="logo">
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png" />
          </div>
          <div className="links">
            {navlinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={name}>{name}</Link>
                </li>
              );
            })}
          </div>
        </div>
        <div className="right-side">
          <button onClick={() => signOut(firebaseAuth)}>
            <LuLogOut size={25} />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  filter: brightness(100%);
  .scroll {
    display: flex;
    background-color: black;
  }
  .nonScroll {
    display: flex;
  }
  nav {
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2rem;
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;

    .left-side {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .logo {
      height: 2.5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .links {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      li {
        padding-left: 2rem;
        color: white;
        text-decoration: none;
        font-size: 18px;

        a {
          font-weight: bold;
          text-transform: uppercase;
          &:link {
            color: white;
            text-decoration: none;
          }
          &:hover {
            color: white;
            text-decoration: none;
            font-size: large;
          }
          &:visited {
            color: white;
            text-decoration: none;
            font-size: large;
          }
          &:active {
            color: white;
            text-decoration: none;
            font-size: large;
          }
        }
      }
    }
    .right-side {
      display: flex;
      align-items: center;
      gap: 1rem;
      button {
        padding: 5px;
        background-color: red;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        svg {
          color: wheat;
        }
      }
    }
  }
`;

export default TopNav;
