import { Grid } from "@material-ui/core"
import Product from "./Product/Product"




export default function Products () {

    const products =  [ 
        {id: 1, name: "Shoes", description: 'running Shoes', price: '$10' },
        {id: 2, name: "MacBook", description: 'apple Macbook', price: "$5" },
    ]


    return (
      <main>
        <Grid container justify-content="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} sx={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    );
}