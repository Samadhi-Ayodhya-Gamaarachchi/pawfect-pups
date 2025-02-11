import { useTheme } from "@mui/material/styles";
import { Container, Grid, Grid2, useMediaQuery } from "@mui/material";
import { products } from "../../data/productData";
import SingleProduct from "./singleProduct";
import SingleProductDesktop from "./singleProductDesktop";

export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const renderProducts=products.map((products)=>(
  <Grid2
  className="test"
  item
  key={products.id}
  xs={2}
  sm={4}
  md={4}
  display="flex"
  flexDirection={"column"}
  alignItems="center"
  >
    {matches ? <SingleProduct product={products} matches={matches}/>
    :<SingleProductDesktop product={products} matches={matches}/>}
    

  </Grid2>
  ));


  return (
    <Container>
      <Grid2
      container
      spacing={{xs:2,md:3}}
      justifyContent={"center"}
      sx={{margin:"20px 4px 10px 4px"}}
      columns={{xs:4,sm:8,md:12}}
      >
        {renderProducts}
      </Grid2>
    </Container>
  );
}
