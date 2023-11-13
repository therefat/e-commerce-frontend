import React from 'react'

function ProductList({item}) {
  return (
    <div>
        <table className=' border border-slate-500'>
            <th>
                <td>Name</td>
                <td>category</td>
                <td>description</td>
                <td>Price</td>
            </th>
            <tr>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
            </tr>
        </table>
        
    </div>
  )
}

export default ProductList