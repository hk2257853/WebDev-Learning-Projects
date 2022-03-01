import React, { useEffect } from "react";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router";

const quote = () => {
  const navigate = useNavigate();

  async function populateQuote() {
    const data = await fetch("http://localhost:1300/quote", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    console.log(data.json);
  }

  // check if user is logged in (using the token)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        // if user not found, remove token n send t login
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        populateQuote();
      }
    }
  }, []);

  return <h1>Hello World</h1>;
};

export default quote;
