import React from 'react'
import Layout from '../layout/Layout'

function CheckOut() {
  return (
    <Layout>
        <div className='container mx-auto'>
        <div className='grid grid-cols-2'>
            <div>
                <h1>Shiping information</h1>
                <form action="">
                    <div>
                    <label  htmlFor="name"></label>
                    <input className='border rounded bg-white  text-sm font-medium p-2.5' type="text" name='name' />
                    </div>
                    <div>
                    <div>
                    <label htmlFor="email"></label>
                    <input className='border rounded bg-white  text-sm font-medium p-2.5' type="email" name='email' />
                    </div>
                    <div>
                    <label htmlFor="phon"></label>
                    <input className='border' type="text" name='phon' />
                    </div>
                    </div>
                    <div>
                    <div>
                    <label htmlFor="email"></label>
                    <input className='border rounded bg-white  text-sm font-medium p-2.5' type="text" name='city' />
                    </div>
                    <div>
                    <label htmlFor="phon"></label>
                    <input className='border rounded bg-white  text-sm font-medium p-2.5' type="text" name='upzila' />
                    </div>
                    </div>
                    <div className='block mb-2'>
                    <div className='block mb-2'>
                    <label htmlFor="addres"></label>
                    <input className='border rounded bg-white  text-sm font-medium p-2.5' type="text" name='address' placeholder='Address'/>
                    </div>
                    <div>
                    <label htmlFor="phon"></label>
                    <input className='border  rounded bg-white  text-sm font-medium p-2.5' type="text" name='zip' />
                    </div>
                    </div>

                </form>
            </div>
            <div>product </div>
        </div>
    </div>
    </Layout>
  )
}

export default CheckOut