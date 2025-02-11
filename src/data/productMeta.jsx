import { Typography } from "@mui/material";
import { ProductActionWrapper } from "../styles/product/productIndex";

export default function ProductMeta({ product, matches }) {
  return (
    <h1>
      <ProductActionWrapper>
        <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
          {product.name}
        </Typography>
        <Typography variant={matches ? "caption" : "body1"}>
          {product.price}
        </Typography>
      </ProductActionWrapper>
    </h1>
  );
}
