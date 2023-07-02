import React from "react";
import Header from "../Header/Header";
import { Link, Outlet } from "react-router-dom";
import Categories from "../Catagory/Categories";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <div>
        <div className="bg-gray-100 ">
          <div className="grid lg:grid-cols-2">
            <div className="text-6xl font-bold font-sans  mx-auto lg:px-44 mt-36 ">
              <h1 className="mt-5"> One Step </h1>
              <h1 className="mt-5">Closer To Your</h1>
              <h1 className="text-primary mt-5 ">Dream Job</h1>
              <h1 className="mt-5 text-base font-normal">
                Explore thousands of job opportunities with all the <br />
                information you need. Its your future. Come find it. Manage
                <br /> all your job application from start to finish.
              </h1>
              <button className="btn font-bold  bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 text-white ">
                Get Started
              </button>
            </div>
            <img
              className="w-[65%] h-[95%] mt-5 mx-20 "
              src="hardy.png"
              alt=""
            />
          </div>
        </div>
        <p className="text-5xl text-center mt-10 font-semibold font-sans">
          Job Category List
        </p>
        <p className="text-center mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <Categories categories={categories}></Categories>
      </div>
      <div>
        <p className="font-semibold font-sans text-5xl text-center mt-16">
          Featured Jobs
        </p>
        <p className="text-center mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
