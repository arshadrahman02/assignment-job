import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../Utilities/fakeDB";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeatureDetails = () => {
  // const { params } = useParams();
  // let loaderData = useLoaderData();
  // const [details, setDetails] = useState({});

  // useEffect(() => {
  //   if (loaderData) {
  //     const dataDetails = loaderData.find(
  //       (data) => data.id === params.featureDetailsID
  //     );

  //     setDetails(dataDetails);
  //   }
  // }, []);

  const detailsData = useLoaderData();
  const params = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    if (detailsData && params.id) {
      const foundDetails = detailsData.find(
        (details) => details.id == params.id
      );
      setJob(foundDetails);
    }
  }, []);

  const handleJobData = (id) => {
    toast("item added to the Applied Jobs");
    console.log(id);
    addToDb(id);
  };

  return (
    <div className="grid lg:grid-cols-2 mx-auto">
      <div>
        <h1 className="mt-28">
          <span className="font-bold mx-8"> Job Description</span> :{" "}
          {job.jobDescription}
        </h1>
        <h1 className="mt-20">
          <span className="font-bold mx-8 ">Job Responsibilities</span> :{" "}
          {job.jobResponsibilities}{" "}
        </h1>
        <h1 className="mt-8">
          <span className="font-bold mx-8">Educational Requirements</span> :{" "}
          {job.educationalRequirements}
        </h1>
        <h1 className="mt-8">
          <span className="font-bold mx-8">Experience</span> : {job.experiences}
        </h1>
      </div>
      <div className="rounded-1xl w-full h-full lg:w-[50%] lg:h-[80%] border-spacing-4 rounded border-2 mx-auto mt-24 bg-gray-100">
        <h1 className="text-center mt-2">
          <span className="font-bold ">JOB Details</span>
        </h1>
        <hr className="mt-5" />
        <div className="flex mt-3">
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
          </svg>{" "}
          <h1 className="mx-2">
            <span className="font-bold">Salary</span> : {job.salary}
          </h1>
        </div>
        <div className="flex mt-2">
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
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
          <h1>
            <span className="font-bold ">Job Title</span> : {job.jobTitle}
          </h1>
        </div>
        <p className="font-bold text-center mt-5">Contact Information</p>
        <hr className="mt-3" />
        <div className="flex mt-3">
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
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <h1 className="mx-1">
            <span className="font-bold">Phone</span> : {job.phone}
          </h1>
        </div>
        <div className="flex mt-2">
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
              d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
            />
          </svg>
          <h1>
            <span className="font-bold">E-mail</span> : {job.email}
          </h1>
        </div>
      </div>
      <button
        onClick={() => handleJobData(job.id)}
        className="btn btn-primary absolute lg:w-[25%] lg:left-[960px] lg:top-[480px]"
      >
        Apply Now
      </button>
      <ToastContainer className="mx-auto"></ToastContainer>
    </div>
  );
};

export default FeatureDetails;
