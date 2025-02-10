import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { products } from "../../data/productData";
import SingleProduct from "./singleProduct";

export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      <Grid container justifyContent="center" sx={{ margin: "10px 2px 5px 2px" }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id} display="flex" flexDirection="column" alignItems="center">
            <SingleProduct product={product} matches={matches} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
