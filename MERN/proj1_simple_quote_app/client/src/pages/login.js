import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault(); // forms refreshing/redirecting to the particular page

    const response = await fetch(
      "http://localhost:1300/login" /* sever url */,
      {
        method: "POST",
        // Sending data to backend
        headers: {
          // Content type
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // data
          email,
          password,
        }),
      }
    ).catch((err) => {
      console.log(err);
    });

    const data = await response.json();

    if (data.user) {
      // if user exist
      alert("Login Successful!");
      window.location.href = "/quote"; // send to this loc
    } else {
      alert("Please check ur user name n pasword");
    }
    console.log(data);
  }

  return (
    <div>
      <h1>login</h1> {/* Make the form */}
      <form onSubmit={loginUser}>
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
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default App;
