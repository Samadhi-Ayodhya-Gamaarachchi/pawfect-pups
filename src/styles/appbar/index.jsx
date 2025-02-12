import { Box, IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import '@fontsource/chewy'

//container
export const AppbarContainer =styled(Box)(()=>({
    display:'flex',
    marginTop:4,
    justifyContent:'center',
    alignItems:'center',
    padding:'2px 8px'


}));


//header
export const AppbarHeader =styled(Typography)(()=>({
    padding :'4px',
    flexGrow: 1,
    fontSize:'3em',
    fontFamily: '"Chewy","cursive"',
    color:Colors.text2,
    
    

}))

export const MyList =styled(List)(({type})=>({
    display: type ==='row'? 'flex':'block',
    justifyContent: 'center',
    flexGrow:3,
    alignItems: 'center',
    color:Colors.text
}))

export const ActionIconContainerDesktop=styled(Box)(()=>({
    flexGrow:0
}))

export const ActionsIconContainerMobile=styled(Box)(()=>({
    display:'flex',
    background:Colors.primary,
    position:'fixed',
    bottom:0,
    left:0,
    width:'100%',
    alignItems:'center',
    zIndex:99,
    borderTop:'1px solid ${Colors.text}'
}))

export const DrawerCloseButton=styled(IconButton)(()=>({
    position:'absolute',
    top:10,
    left:'250px',
    zIndex:1999,

}))