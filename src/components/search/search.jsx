import { Slide, IconButton, Box } from "@mui/material";
import { useUIContext } from "../../context/ui/ui";
import { SearchBoxContainer, SearchField } from "../../styles/search/searchIndex";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox() {
  const { showSearchBox, setShowSearchBox } = useUIContext();

  return (
    <Slide direction="down" in={showSearchBox} timeout={{ enter: 500, exit: 300 }}>
      <SearchBoxContainer>
        {/* Close Button */}
        <IconButton
          sx={{ position: "absolute", top: 20, right: 20, color: "white" }}
          onClick={() => setShowSearchBox(false)}
        >
          <CloseIcon />
        </IconButton>

        {/* Search Input Field & Button */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SearchField
            color="secondary"
            variant="standard"
            fullWidth
            placeholder="Search..."
          />
          <IconButton>
            <SearchIcon sx={{ fontSize: { xs: "2rem", md: "3rem" }, color: "white" }} />
          </IconButton>
        </Box>
      </SearchBoxContainer>
    </Slide>
  );
}
