import React, { useEffect, useState } from "react";
import Dashboard from "../pages/Dashboard";
import axios from "axios";
import ProductList from "./ProductList";
import {toast} from 'react-toastify'
import Toaster from "./common/Toastar";

function AddProduct() {
  const [editingItem, setEditingItem] = useState(null);
    const [updateBtn,setUpdateBtn] = useState(false)
    const [formBtn,setformBtn] = useState('add')
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImagess] = useState("");
  const [products, setProducts] = useState([]);

  const handleAdd = () =>{
    setformBtn('add')
    setShowModal(true)
  }
  const handleEdit = (item) => {
    setEditingItem(item);
    setName(item.name);
  setDescription(item.description);
  setCategory(item.category);
  setPrice(item.price);
  setImagess(item.image);
    setformBtn('edit')
    setShowModal(true)
  }
  useEffect(() => {
    axios
      .get("http://localhost:8080/items")
      .then((respone) => {
        setProducts(respone.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const imagSub = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImagess(file);
    }
  };

  const submitProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("category", category);
  formData.append("price", price);
  formData.append("image", image);
    const token = localStorage.getItem("jwtToken");
    if (formBtn === 'add') {
      axios
      .post(
        "http://localhost:8080/items",
        {
          name: name,
          description: description,
          category: category,
          price: price,
          image: image,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      )

      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    } else if (formBtn === 'edit' && editingItem) {
      setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item._id === editingItem._id
          ? { ...item, name, description, category, price, image }
          : item
      )
    );

    // Add logic for updating the product on the server
    axios.patch(`http://localhost:8080/items/${editingItem._id}`, formData, {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    }

   
    console.log("test");
    setShowModal(false)
  };

  const handleDelet = (item) => {
    const token = localStorage.getItem("jwtToken");
    axios.delete(`http://localhost:8080/items/${item._id}`, {
      headers: {
        Authorization: token,
        
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

  }

// () => setShowModal(true)
  return (
    <Dashboard>
      <div className="container">
        <h1 className="text-center text-2xl">Add Product</h1>
        <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={handleAdd}
      >
        Add Product
      </button>
        {
            showModal ? (
                <>
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-3xl font=semibold">Add Product</h3>
                        <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                        </div>
                    <div className="relative p-6 flex-auto">
                    <div className="product-add flex flex-col  m-auto  p-5 justify-items-center">
          <form
            method="post"
            encType="multipart/form-data"
            onSubmit={(e) => submitProduct(e) }
          >
            <div className="mb-3 flex flex-col gap-1">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="border h-8 rounded-lg border-gray-900"
                name="name"
                value={name}
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="border h-8 rounded-lg border-gray-900"
                name="description"
                value={description}
                id="description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="border h-8 rounded-lg border-gray-900"
                name="category"
                value={category}
                id="category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="border h-8 rounded-lg border-gray-900"
                name="price"
                value={price}
                id="price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label htmlFor="proImage">Uplode Image</label>
              <input type="file" id="" onChange={imagSub} />
            </div>

            <button className="bg-gray-900 p-3  text-white rounded">
              {formBtn === 'add' ?'Add Product' : "Update"}
            </button>
          </form>
        </div> 
                    </div>
                        </div>
                    </div>
                </div>
                   
                </>
            ) : null
        }
        <div>
          <div className="mt-7">
            <table className=" min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    category
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    description
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {products &&
                  products.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.name}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.category}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.description}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.price}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                          <button onClick={() =>handleEdit(item)}
                            
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </button>
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                          <button onClick={() => {handleDelet(item),Toaster("Product Deleted", 'error')}}
                            
                            class="text-red-600 dark:text-red-500 hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default AddProduct;