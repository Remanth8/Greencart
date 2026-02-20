import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/Appcontext'
import ProductCard from '../components/Productcard'

const AllProducts = () => {

    const {products, searchQuery} = useAppContext()
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=> {
        if(searchQuery.length >0){
            setFilteredProducts(products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))}else{
            setFilteredProducts(products)

            }
    },[products, searchQuery])
  return (
    <div className='mt-16 px-4 md:px-8 lg:px-12 w-full'>
        <div className='flex flex-col items-start w-max'>
            <p className='text-2xl font-medium uppercase'>All products</p>
            <div className='w-16 h-0.5 bg-primary rounded-full'>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 mt-4'>
                {filteredProducts.filter((product)=> product.inStock).map((product,index)=>(
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
        
      
    </div>
  )
}

export default AllProducts
