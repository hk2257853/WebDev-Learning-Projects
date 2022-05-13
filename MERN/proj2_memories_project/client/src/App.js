import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => (
  // app UI
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* So that in place of whole page only the component loads on change. Also any one of these load from here? */}
        <Route path="/auth" exact element={<Auth />} />
        {/* Wrote  Auth in place of <Auth />, error with no file loc. Thx to a stackoverflow ans got in a 5 min.*/}
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
