import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CheckOut() {
  const {name} = useParams()
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
  return (
    <Layout>
        <div className='container mx-auto'>
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <h1>Shiping information</h1>
                <form action="">
                    <div className='mb-4'>
                    
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4' required placeholder='Full Name' type="text" name='name' />
                    </div>
                    <div className='mb-4 grid grid-cols-2 gap-3'>
                    <div>
                   
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4'placeholder='example@email.com' type="email" name='email' />
                    </div>
                    <div>
                    <label htmlFor="phon"></label>
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4' placeholder='Phone' type="text" name='phon' />
                    </div>
                    </div>
                    <div className='mb-4 grid grid-cols-2 gap-3'>
                    <div>
                    
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4' type="text" placeholder='City' name='city' />
                    </div>
                    <div>
                    <label htmlFor="phon"></label>
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4' type="text" placeholder='Upzila' name='upzila' />
                    </div>
                    </div>
                    <div className='mb-4 grid grid-cols-2 gap-3'>
                    <div className=''>
                    
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4' type="text" name='address' placeholder='Address'/>
                    </div>
                    <div>
                    <label htmlFor="phon"></label>
                    <input className='border w-full border-gray-500 outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white  text-sm font-medium p-4' type="text" name='zip' placeholder='Zip' />
                    </div>
                    </div>

                </form>
            </div>
            <div> 
              <div>
                <div className='products'>
                <div  className="flex justify-between mb-2 border-2">
                                        <div className="w-[30%]">
                                        <img src={productInfo.image} className="border-2" width={80} />
                                        </div>
                                        <div className="w-[50%]">
                                            <span>{productInfo.name}</span>
                                            <br />
                                            <span>x{productInfo.quantity}</span>
                                        </div>
                                        <div className="w-[20%]">
                                        {(Number(productInfo.quantity) * Number(productInfo.price)).toFixed(2)}
                                        </div>
                                    </div>

                </div>
              </div>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default CheckOut