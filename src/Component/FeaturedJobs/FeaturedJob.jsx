import React from "react";
import { Link } from "react-router-dom";

const FeaturedJob = (props) => {
  console.log(props.featuredJob);

  const {
    id,
    image,
    companyName,
    jobTitle,
    jobType,
    WhereSitsWork,
    companyLocation,
    salary,
  } = props.featuredJob;
  return (
    <div className=" rounded-1xl w-full h-full lg:w-[70%] lg:h-[100%] border-spacing-4 border-2 mx-auto mt-8 bg-gray-100   ">
      <img className="w-1/6 mx-5 mt-10" src={image} alt="" />
      <p className="font-bold mx-5 mt-3">{jobTitle}</p>
      <p className=" mx-5 mt-3">{companyName}</p>
      <div className="flex">
        <button className="btn text-black hover:bg-lime-400 hover:text-violet-600 bg-base-100 mx-3 mt-2">
          {WhereSitsWork}
        </button>
        <button className="btn text-black hover:bg-lime-400 hover:text-violet-600 bg-base-100 mx-3 mt-2">
          {jobType}
        </button>
      </div>
      <div className="flex mx-5 mt-3 gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        <p>{companyLocation}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>salary : {salary}</p>
      </div>

      <Link to={`/${id}`}>
        {" "}
        <button className="btn btn-primary w-[35%] mt-5 mx-4">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FeaturedJob;
