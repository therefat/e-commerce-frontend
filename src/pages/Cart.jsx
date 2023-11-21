import React from 'react'
import Layout from '../layout/Layout'
import { useCart } from 'react-use-cart';

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    cartTotal,
    removeItem,
  } = useCart();
  
  return (
    <>
    <Layout>
        <div className='container mx-auto mt-5'>
        <table className=" min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Title
                  </th>
                  
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Subtotal
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Action 
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-red-500"
                  >
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {items &&
                  items.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src={item.image} width={80} height={80} />
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.name}
                        </td>
                        
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.price}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.quantity}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.itemTotal}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex justify-between items-center w-[6rem]">
                                <button className={`text-2xl p-2 w-8 rounded-lg ${item.quantity==1 ? 'bg-slate-100 text-red-600' : 'bg-slate-500 text-white'}`} onClick={()=>updateItemQuantity(item.id, (item.quantity-1))} 
                                disabled={item.quantity==1}>
                                    -
                                </button>
                                {item.quantity}
                                <button className="bg-slate-500 text-2xl text-white p-2 w-8 rounded-lg" onClick={()=>updateItemQuantity(item.id, (item.quantity+1))}>
                                    +
                                </button>
                            </div>
                        </td>
                        
                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <button className="bg-red-500 text-black p-2" onClick={()=>removeItem(item.id)}>
                                Delete
                            </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
        </div>
    </Layout>
    </>
  )
}

export default Cart