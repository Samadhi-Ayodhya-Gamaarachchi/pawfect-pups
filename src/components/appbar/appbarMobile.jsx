import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./action";
import { useUIContext } from "../../context/ui/ui";

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      {/* Menu Button */}
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>

      {/* Appbar Title */}
      <AppbarHeader textAlign="center" variant="h4">
        Pawfect Pups
      </AppbarHeader>

      {/* Search Button */}
      <IconButton sx={{ color: "#5C4033" }} onClick={() => {
  console.log('Search icon clicked');
  setShowSearchBox(true);
}}>
  <SearchIcon />
</IconButton>

      {/* Actions Component */}
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
