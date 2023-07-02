import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import Statistics from "./Component/Statistics/Statistics";
import AppliedJobs from "./Component/Applied-jobs/AppliedJobs";
import Blog from "./Component/Blog/Blog";
import Categories from "./Component/Catagory/Categories";
import FeaturedJobs from "./Component/FeaturedJobs/FeaturedJobs";
import FeatureDetails from "./Component/FeatureDetails/FeatureDetails";
import ErrorPage from "./Component/Errorpage";
import { jobsAndProductData } from "./getJobs&products/getJobsAndProductData";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Category.json"),
      },
      {
        path: "/:id",
        element: <FeatureDetails></FeatureDetails>,
        loader: () => fetch("/FeaturedJobs.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: jobsAndProductData,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "catagories",
        element: <Categories></Categories>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
