import { Button, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "@emotion/styled";
const App = () => {
  const CrimsonButton = styled(Button)({
    backgroundColor: "crimson",
    color: "white",
    m: 5,
    "&:hover": {
      backgroundColor: "black",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });

  return (
    <div>
      <Button 
       size="medium"
        /* color="otherColor" */
         variant="contained">
        Text
      </Button>
      <Button
        startIcon={<SettingsIcon fontSize="small" color="success" />}
        variant="contained"
      >
        new post
      </Button>
      <Button disabled variant="outlined">
        outlined
      </Button>
      <Typography variant="h3" component="p">
        something
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "crimson",
          color: "crimson",
          m: 5,
          "&:hover": {
            backgroundColor: "black",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
      >
        {" "}
        unique{" "}
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "crimson",
          color: "crimson",
          m: 5,
          "&:hover": {
            backgroundColor: "black",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
      >
        {" "}
        unique{" "}
      </Button>
      <CrimsonButton>first custom button</CrimsonButton>
    </div>
  );
}

export default App;
