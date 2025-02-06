import { ListItemButton, ListItemIcon, Divider } from "@mui/material";
import { MyList, ActionIconContainerDesktop, ActionsIconContainerMobile } from "../../styles/appbar";
import { Favorite, Person, ShoppingCart } from "@mui/icons-material";

export default function Actions({ matches }) {
    // Select container based on screen size
    const Component = matches ? ActionsIconContainerMobile : ActionIconContainerDesktop;

    return (
        <Component>
            <MyList type="row">
                {/* Shopping Cart Icon */}
                <ListItemButton sx={{ justifyContent: "center" }}>
                    <ListItemIcon sx={{ color: "#5C4033" }}>
                        <ShoppingCart />
                    </ListItemIcon>
                </ListItemButton>

                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

                {/* Favorite Icon */}
                <ListItemButton sx={{ justifyContent: "center" }}>
                    <ListItemIcon sx={{ color: "#5C4033" }}>
                        <Favorite />
                    </ListItemIcon>
                </ListItemButton>

                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

                {/* User Account Icon */}
                <ListItemButton sx={{ justifyContent: "center" }}>
                    <ListItemIcon sx={{ color: "#5C4033" }}>
                        <Person />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
        </Component>
    );
}
