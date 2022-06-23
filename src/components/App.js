import Reach, { useState } from "react";
import Home from "../pages/home";

import { Router } from "@reach/router";

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default App;
