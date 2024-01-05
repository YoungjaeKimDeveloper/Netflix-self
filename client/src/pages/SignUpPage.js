import React, { useState } from "react";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(true);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login={true} />
        <div className="body">
          <div className="text">
            <h1>Unlimited movies, TV Shows and more</h1>
            <h4>watch anywhere,Cancel Anytime</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            {showPassword ? (
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formValues.email}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            ) : (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            )}
            {showPassword ? (
              <button onClick={() => setShowPassword(false)}>
                Get Started
              </button>
            ) : (
              <button onClick={handleSignIn}>Sign Up</button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  .content {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
    color: white;
    text-align: center;
    justify-content: center;
    h1 {
      font-size: 40px;
      font-weight: bold;
      padding: 0 4rem;
    }
    h4 {
      font-size: 2rem;
      margin-top: -20px;
    }
    h6 {
      font-size: large;
      margin-top: -20px;
    }
  }
  .form {
    display: grid;
    width: 60%;
    grid-template-columns: ${({ showPassword }) =>
      showPassword ? "1fr 1fr" : "1fr 2fr"};
    align-items: center;
    justify-content: center;
    input {
      padding: 1rem;
      width: 45rem;
      color: black;
      &:focus {
        outline: none;
      }
    }
    button {
      width: 10rem;
      padding: 1.2rem;
      background-color: red;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
