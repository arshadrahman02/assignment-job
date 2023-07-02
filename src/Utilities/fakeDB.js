//Add data to local storage

const addToDb = (id) => {
  let jobData = {};

  const storedData = localStorage.getItem("job-data");
  if (storedData) {
    jobData = JSON.parse(storedData);
  }

  const quantity = jobData[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    jobData[id] = newQuantity;
  } else {
    jobData[id] = 1;
  }

  localStorage.setItem("job-data", JSON.stringify(jobData));
};

const getStoredData = () => {
  let jobData = {};

  const storedData = localStorage.getItem("job-data");
  if (storedData) {
    jobData = JSON.parse(storedData);
  }

  return jobData;
};

export { addToDb, getStoredData };
