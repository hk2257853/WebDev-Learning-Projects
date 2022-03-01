import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Quote from "./pages/quote";
// Even thought the tutorial is 5 month old, many things were decpricated in new version of
// react-router-dom. So took some time to fix

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/quote" exact element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
