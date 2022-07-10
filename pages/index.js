import Head from "next/head";
import { Button, Container } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Container>
        <Button variant="contained">Hello World</Button>
      </Container>
    </div>
  );
}
