import {useParams} from 'react-router-dom'
import useFetch from '../../useFetch/useFetch'
import useStyles from "./styles"

export default function ProductDetails () {
const classes = useStyles()
const {id} = useParams()
///this is questionable dont knwo if this is correct 
/// trying to convert this into a link 
const {products : product} =useFetch({id})  
   


    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h1>{id}</h1>
        <h2>{product.name}</h2>
      </main>
    );
}