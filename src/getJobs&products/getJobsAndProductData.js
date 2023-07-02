import { getStoredData } from "../Utilities/fakeDB";

export const jobsAndProductData = async () => {
  const productsData = await fetch("/FeaturedJobs.json");
  const jData = await productsData.json();
  const saveCart = getStoredData();
  let cartArray = [];

  for (const id in saveCart) {
    const foundProduct = jData.find((product) => product.id === id);
    if (foundProduct) {
      cartArray.push(foundProduct);
    }
  }
  return { cartArray, jData };
};
