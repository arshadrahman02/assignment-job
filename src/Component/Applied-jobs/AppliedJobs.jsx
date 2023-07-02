import React from "react";
import { getStoredData } from "../../Utilities/fakeDB";
import { useLoaderData } from "react-router-dom";
import CartItem from "./CartItem";

const AppliedJobs = () => {
  const { cartArray } = useLoaderData();

  return (
    <div
      className="flex min-h-screen items-start justify-center
     bg-gray-100 text-gray-900"
    >
      <div className="flex flex-col max-w-3xl border-2 mt-12 p-6 space-y-4 sm:p-10">
        <h1 className="text-xl font-semibold">
          {cartArray.length ? "Applied Jobs" : "Jobs Cart Empty"}
        </h1>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cartArray.map((jData) => (
            <CartItem key={jData.id} jData={jData}></CartItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppliedJobs;
