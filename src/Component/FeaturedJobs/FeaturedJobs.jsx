import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [noOfElement, setNoOfElement] = useState(4);
  const sliceFeature = featuredJobs.slice(0, noOfElement);

  const handleSeeAllJobs = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  useEffect(() => {
    fetch("/FeaturedJobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);

  return (
    <div>
      <div className="blog-container  ">
        <div className="blog-card lg:w-[1280px]  grid  lg:grid-cols-2 gap-4  mx-auto  ">
          {featuredJobs.map((featuredJob) => {
            console.log(featuredJob);
            return (
              <FeaturedJob
                key={featuredJob.id}
                featuredJob={featuredJob}
              ></FeaturedJob>
            );
          })}
        </div>
        <button
          onClick={handleSeeAllJobs}
          className="btn mx-[200px] lg:mx-[700px] mt-16 lg:mt-20"
        >
          Load All
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
