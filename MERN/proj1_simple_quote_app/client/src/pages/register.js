import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault(); // forms refreshing/redirecting to the particular page

    const response = await fetch(
      "http://localhost:1300/register" /* sever url */,
      {
        method: "POST",
        // Sending data to backend
        headers: {
          // Content type
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // data
          name,
          email,
          password,
        }),
      }
    );

    const data = await response.json();
    if (data.status === "ok") {
      navigate("/login");
    }

    console.log(data);
  }

  return (
    <div>
      <h1>Register</h1> {/* Make the form */}
      <form onSubmit={registerUser}>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default App;
