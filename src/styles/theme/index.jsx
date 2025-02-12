import { createTheme } from "@mui/material/styles"
import { color } from "framer-motion";
import { lighten } from "polished";

export const  Colors={
   background: "#FFFFFF" ,
   primary : "#C4A484",
   secondary:"#9B7653",
   text:"#5C4033",
   text2 :"#24130B",
   
}

const theme = createTheme({
    palette:{
        primary:{
            main: Colors.primary

        },
        secondary:{
            main : Colors.secondary
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                disableRipple: true,
                disableElevation:true
            }
        },
        MyShopButton:{
            styleOverrides:{
               root:{
                color:Colors.background
               } ,
               primary:{
                background:Colors.primary,
                "&:hover":{
                    background:lighten(0.05,Colors.primary)
                }
               },
               secondary:{
                background:Colors.secondary,
                "&:hover":{
                    background:lighten(0.05,Colors.secondary)
                }
               }
            }
        }
    }

});

export default theme;