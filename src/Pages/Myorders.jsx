import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/Appcontext'
import { dummyOrders } from '../assets/assets'
import axios from 'axios'

const Myorders = () => {

  const [myorders, setMyorders] = useState([])
  const {currency, axios, user} = useAppContext()

  const fetchmyorders = async ()=> {
    try{
      const {data} = await axios.get('/api/order/user')
      if(data.success){
        setMyorders(data.orders)
      }
    } catch(error){
      console.log(error);
    }
  
  }

  useEffect(()=> {
    if(user){
      fetchmyorders()
    }
  },[user])


  return (
    <div className='mt-16 pb-16'>
      <div className='flex flex-col items-end w-max mb-8'>
      <p className='text-2xl font-medium uppercase'>My orders</p>
      <div className='w-16 h-0.5 bg-primary rounded-full'></div>
      </div>
      {myorders.map((order, index)=>(
        <div key={index} className='border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-3xl'>
          <div className='flex flex-col md:justify-between gap-2 text-sm mb-4 text-gray-500 md:flex-row'>
            <span>OrderId : {order._id}</span>
            <span>Payment : {order.paymentType}</span>
            <span>Total Amount : {currency}{order.amount}</span>
          </div>
          {order.items.filter(item=>
           item.product).map((item, index)=> (
            <div key={index}
            className={` bg-white text-gray-600 ${order.items.length !==index + 1 ? "border-b" : "" }
            border-gray-200 flex flex-col md:flex-row  md:items-center md:justify-between p-4  gap-4 ` }>

              
              <div className='flex items-center mb-4 md:mb-0'>
                <div className='bg-primary/10 p-4 rounded-lg'>
                <img src={item.product.image[0]} alt="" className='w-14 h-14 object-cover rounded' />
                </div>
                <div className='ml-4'>
                     <h2 className='text-xl font-medium text-gray-800'>{item.product.name}</h2>
                     <p>Category: {item.product.category}</p>
                </div>
                </div>

              <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'>
                <p>Quantity: {item.quantity || "1"}</p>
                <p>Status: {order.status}</p>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <p className='text-primary text-lg font-semibold md:text-right'>
                  Amount: {currency}{item.product.offerPrice * item.quantity}

                </p>
                </div>

          ))}
    </div>
      ))}
      </div>
  )
}

export default Myorders
