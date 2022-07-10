import Head from "next/head";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import BaseLayout from "../src/layouts/base";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Paper sx={{ padding: 2 }}>
        <Box mb={4}>
          <Typography variant="h2">Login</Typography>
          <Typography variant="body2">
            Login using your email & password.
          </Typography>
        </Box>

        <Stack spacing={3}>
          <TextField label="Email" />

          <TextField label="Password" type="password" />

          <Button>Login</Button>
        </Stack>
      </Paper>
    </>
  );
};

Login.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Login;
