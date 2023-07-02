import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ jData }) => {
  const {
    id,
    image,
    jobTitle,
    companyName,
    email,
    salary,
    WhereSitsWork,
    companyLocation,
    jobType,
  } = jData;
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className=" w-72 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-200"
          src={image}
          alt="Polaroid camera"
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2 ">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {jobTitle}
              </h3>
              <h1>{companyName}</h1>
              <div className="mt-3">
                <button className="btn bg-gray-100 text-black ">
                  {WhereSitsWork}
                </button>
                <button className="btn bg-gray-100 text-black mx-2">
                  {jobType}
                </button>
                <p className="mx-1 mt-3">{companyLocation}</p>
                <div className="flex mt-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mx-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-bold">Salary : {salary}</span>
                </div>
                <div>
                  <Link to={`/${id}`}>
                    <button className="btn btn-primary w-[35%] mt-5 mx-4">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-sm divide-x"></div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
