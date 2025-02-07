import { ActionIconContainerDesktop, ActionsIconContainerMobile, AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";

import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import Actions from "./action";
export default function AppbarDesktop({matches}){

    
    return (
        <>
        
        <AppbarContainer>
            <AppbarHeader>Pawfect Pups</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home"/>
                <ListItemText primary="Categories"/>
                <ListItemText primary="About us"/>
                <ListItemText primary="Contact us"/>
                <ListItemButton>
                <ListItemIcon sx={{ color: "#5C4033" }}>
                            <SearchIcon />
                        </ListItemIcon>
                    </ListItemButton>

            </MyList>
            <Actions matches={matches}/>



            </AppbarContainer>


        

       
        </>
        
    )
}