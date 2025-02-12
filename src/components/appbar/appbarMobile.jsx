import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./action";
import { useUIContext } from "../../context/ui/ui";

export default function AppbarMobile({matches}){

    const {setDrawerOpen}=useUIContext()



    return (
        <AppbarContainer>
            <IconButton onClick={()=>setDrawerOpen(true)}>
                <MenuIcon/>
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h4">
                Pewfect Pups
            </AppbarHeader>
            <IconButton sx={{ color: "#5C4033" }}>

                <SearchIcon />
            </IconButton>
            <Actions matches={matches}/>
        </AppbarContainer>

    )
}