import { Box, Typography } from "@mui/material";

const BaseFooter = () => {
  return (
    <Box component="footer" py={3} sx={{ textAlign: "center" }}>
      <Typography variant="body2">
        Copyright 2022. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default BaseFooter;
