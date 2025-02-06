import { createTheme } from "@mui/material/styles"

export const  Colors={
   background: "#FFFFFF" ,
   primary : "#C4A484",
   secondary:"#9B7653",
   text:"#5C4033",
   text2 :"#24130B"
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
        }
    }

});

export default theme;