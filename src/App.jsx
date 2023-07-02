import React from "react";

import Header from "./Component/Header/Header";
import { Outlet } from "react-router-dom";

import Home from "./Component/Home/Home";
import FeaturedJobs from "./Component/FeaturedJobs/FeaturedJobs";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
