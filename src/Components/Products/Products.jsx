import { Grid } from "@material-ui/core"
import Product from "./Product/Product"
import useStyles from "./styles"
import { Link } from "react-router-dom"


export default function Products({ products, onAddToCart }) {
  const classes = useStyles();
  // const products =  [
  //     {id: 1, name: "Shoes", description: 'running Shoes', price: '$10', image: shoe },
  //     {id: 2, name: "MacBook", description: 'apple Macbook', price: "$5" , image: mac },
  // ]

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify-content="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} sx={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}