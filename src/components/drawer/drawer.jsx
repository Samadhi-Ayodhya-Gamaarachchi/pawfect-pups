import { List,Drawer, ListItemButton, ListItemText, Divider, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useUIContext } from "../../context/ui/ui";
import { DrawerCloseButton } from "../../styles/appbar";
import CloseIcon from '@mui/icons-material/Close'
import { lighten } from "polished";
import { Colors } from "../../styles/theme";

const MiddleDivider=styled((props)=>(
    <Divider variant="middle" {...props}/>

))``;
export default function AppDrawer(){

const {drawerOpen,setDrawerOpen}=useUIContext();

    return(
        <>

{drawerOpen && <DrawerCloseButton onClick={()=>setDrawerOpen(false)}>
                <CloseIcon
                sx={{
                    fontSize:'2.5rem',
                    color:lighten(0.09,Colors.secondary)

                }}
                />
                </DrawerCloseButton>}
        <Drawer open={drawerOpen}>
            
            <List>
                <ListItemButton>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                
                <ListItemButton>
                    <ListItemText>Categoies</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                
                <ListItemButton>
                    <ListItemText>About us</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
               
                <ListItemButton>
                    <ListItemText>Contact </ListItemText>
                </ListItemButton>
                <MiddleDivider/>
            </List>
        </Drawer>
        </>
    )
}