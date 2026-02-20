import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/Appcontext";


const Productcard = ({product}) => { 
    const {currency, addToCart, removeFromCart, cartItems, navigate} = useAppContext()

    

    return  product &&(
        <div  onClick={()=> {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}} 
        className="border border-gray-200 rounded-lg md:px-5 px-2 py-2 bg-white w-full shadow-sm hover:shadow-md transition flex flex-col">
            <div className="group cursor-pointer flex items-center justify-center">
                <img className="group-hover:scale-105 transition h-30 md:h-36 object-contain" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-sm flex-flex-col flex-1">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-base truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                           <img  key={i} className="md:w-3.5 w-3"src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt=""/>     
                    ))}
                    <p>(4)</p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-3">
                    <p className="md:text-xl text-base font-medium text-primary">
                    {currency}{product.offerPrice}{" "} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}{product.price}</span>
                    </p>
                    <div onClick={(e) => {e.stopPropagation();}} className="text-primary">
                        {!cartItems[product._id] ? (
                            <button className="flex items-center justify-center gap-1 bg-primary text-white  px-3 py-1.5 rounded-md text-sm" onClick={() => addToCart(product._id)} >
                               <img src={assets.cart_icon} alt="cart_icon"/>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-primary/10 border border-primary/30 rounded-md">
                                <button onClick={() => {removeFromCart(product._id)}}
                                className="cursor-pointer text-md px-2 h-full" >
                                    -
                                </button>
                                <span className="w-5 text-center">{cartItems[product._id]}</span>
                                <button onClick={() =>  {addToCart(product._id)}}
                                className="cursor-pointer text-md px-2 h-full" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productcard