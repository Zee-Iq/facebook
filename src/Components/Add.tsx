import {
  Avatar,
  Button,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useState } from "react";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <IconButton>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>

      <Button>Open modal</Button>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={800} height={600} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create new Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ cursor: "pointer", width: 30, height: 30 }}
              src="https://avatars.githubusercontent.com/u/86056842?v=4"
              onClick={(e) => setOpen(true)}
            />
            {
              <Typography variant="body2" fontWeight={500}>
                Zeeshan
              </Typography>
            }
          </UserBox>
          <TextField
            sx={{width:"100%", height:"100%"}}
            id="standard-multiline-static"
            multiline
            rows={5}
            placeholder="Tell your story..."
            variant="outlined"
          />
          <Stack direction="row" gap={1}></Stack>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
