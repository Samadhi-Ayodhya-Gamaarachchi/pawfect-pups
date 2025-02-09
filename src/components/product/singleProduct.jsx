import { Product, ProductImage } from "../../styles/products/productIndex";

export default function SingleProduct({product,matches}){
    return(
       <Product>
        <ProductImage src={product.image}/>
        
        </Product>
    )


}