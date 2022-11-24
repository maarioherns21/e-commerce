import { Card, CardMedia, CardContent, CardActions,Typography, IconButton } from "@material-ui/core"
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./Styles"






export default function Product ({ product, onAddToCart }) {
    const classes = useStyles();
  
    const handleAddToCart = () => onAddToCart(product.id, 1);
  
    return (
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image.url} title={product.name} />
        <CardContent>
          <div className={classes.cardContent}>
            <Link to={`/product/${product.id}`} >
             <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            </Link>
            <Typography gutterBottom variant="h5" component="h2">
              ${product.price.formatted}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    );
  };