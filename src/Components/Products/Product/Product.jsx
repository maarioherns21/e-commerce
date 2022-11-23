import { Card, CardMedia, CardContent, CardActions,Typography, IconButton } from "@material-ui/core"
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./Styles"






export default function Product ({product}) {
const classes =  useStyles()

    return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="image"
          title={product.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
          <Typography variant="h2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    );
}