import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Box } from "@mui/system";
import { theme } from "../theme";
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between ",
});

const Search = styled("div")(({ theme: any }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme: any }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
/* MOBILE VERSION */
const UserBox = styled(Box)(({ theme: any }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          title="Home"
          sx={{ cursor: "pointer", display: { xs: "none", sm: "block" } }}
          variant="h6"
        >
          FAKEBOOK
        </Typography>
        <FacebookRoundedIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />{" "}
        </Search>
        <Icons>
          <Badge
            sx={{ cursor: "pointer" }}
            title="Messages"
            badgeContent={1}
            color="error"
          >
            <Mail />
          </Badge>
          <Badge
            sx={{ cursor: "pointer" }}
            title="Notifications"
            badgeContent={4}
            color="error"
          >
            <Notifications />
          </Badge>
          <Avatar
            
            sx={{ cursor: "pointer", width: 30, height: 30 }}
            src="https://avatars.githubusercontent.com/u/86056842?v=4"
            onClick={(e) => setOpen(true)}
          />
        </Icons>

        {/* CODE FOR MOBILE VERSION */}
        <UserBox title="Home" onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://avatars.githubusercontent.com/u/86056842?v=4"
          />
          <Typography variant="body1">Zeeshan</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        /* DROPDOWNMENU IS GOING TO CLOSE OR OPEN DEPENDING ON USESTATE */
        open={open}
        /* CLOSING METHOG */
        /* WHEN CLICKING SOMEWHERE ELSE THEN MENU IS GOING TO CLOSE */

        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
