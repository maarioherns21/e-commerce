import { commerce } from "../lib/commerce";
import { useEffect, useState } from "react";


export default function useFetch () {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [error, setError]=useState(null)
    
    ///this  function Fetches the products into the main page 
    const fetchProducts = async () => {
      try {
        const { data } = await commerce.products.list();
    
        setProducts(data);
      } catch (error) {
        setError(error.message)
      }
      };
    
      ///this function fetches 
      const fetchCart = async () => {
      try {
        const data  = await commerce.cart.retrieve()
        
        setCart(data);
      } catch (error) {
        setError(error.message)
      }
      };
    
      const handleAddToCart = async (productId, quantity) => {
       try {
        const item = await commerce.cart.add(productId, quantity);
    
        setCart(item.cart);
       } catch (error) {
        setError(error.message)
       }
      };
    
    
    useEffect(() => {
        fetchProducts()
        fetchCart()
    } , []) 

    return {
        products , cart , error,  handleAddToCart
    }
}