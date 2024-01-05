import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";

import { firebaseAuth } from "../utils/firebase-config";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Wrapper>
      <BackgroundImage />
      <div className="loginContent">
        <Header />
        <div className="form-wrapper">
          <div className="form">
            <h1 onClick={handleLogin}>Login</h1>
            <div className="container">
              <input
                type="email"
                placeholder="Eamil"
                value={email}
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  .form-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 85vh;
  }
  .loginContent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .form {
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 40px;
    padding: 6rem;
    h1 {
      margin-bottom: 4rem;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;
    input {
      padding: 1rem;
      border-radius: 5px;

      &:focus {
        outline: none;
      }
    }
    button {
      padding: 1rem;
      width: 300px;
      background-color: red;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
