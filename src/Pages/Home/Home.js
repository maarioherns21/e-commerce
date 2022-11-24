import Products from "../../Components/Products/Products";
import useFetch from "../../useFetch/useFetch";
import useStyles from "../../Components/Products/styles"





export default function Home () {
const {products, error, handleAddToCart, cart} =useFetch()
const classes = useStyles()
    

return (
        <div>
            <div>{error ? error : null}</div>
            <Products products={products} onAddToCart={handleAddToCart} cart={cart} />
        </div>
    )
}