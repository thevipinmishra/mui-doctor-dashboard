import { Box, Container } from "@mui/material";

import BaseFooter from "../../components/Layout/BaseFooter";

const BaseLayout = ({ children, withContainer = true }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {withContainer && (
        <Container
          sx={{
            flex: "1",
            width: "100%",
            paddingBlock: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box componenent="main">{children}</Box>
        </Container>
      )}

      <BaseFooter />
    </Box>
  );
};

export default BaseLayout;
