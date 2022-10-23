import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { Spin } from "antd";

import "antd/dist/antd.min.css"; // Import global antd.css

function App() {
  return (
    <Router>
      <React.Suspense fallback={<Spin />}>
        <Routes />
      </React.Suspense>
    </Router>
  );
}

export default App;
