import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material"




export default function Products(){

    const theme=useTheme();
    const matches =
    useMediaQuery(theme.breakpoints.down('md'));

    const renderProducts=Products
    return(
        <>
        <h1>
            Products
        </h1>
        </>

    )
}