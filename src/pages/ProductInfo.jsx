import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import axios from "axios";

function ProductInfo() {
  const { name } = useParams();
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/items/" + name)
      .then((response) => {
        // console.log(response)
        setProductInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(productInfo);
  return (
    <Layout>
      <div>
        <h1>jdfkd</h1>
        <h1>{name}</h1>
      </div>
      <div>
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={productInfo.image}
                    alt="Product Image"
                  />
                </div>
                
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {productInfo.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {" "}
                </p>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Price:{" "}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {productInfo.price}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Availability:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      In Stock
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Quantity:
                  </span>
                  <div className="flex items-center mt-2">
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      200
                    </button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      500
                    </button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      1000
                    </button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      2000
                    </button>
                    
                  </div>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Product Description:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {productInfo.description}
                  </p>
                </div> 
                <div className="flex -mx-2 mb-4">
                  <div className="w-1/2 px-2">
                    <Link to={'/checkout/' + productInfo.name} >
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      Buy Product
                    </button>
                    </Link>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductInfo;
