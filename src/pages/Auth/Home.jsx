
import { Container } from "@mui/material";
import AppBarHome from "~/pages/Auth/AppBarHome";
import ContainerHome from '~/pages/Auth/ContainerHome'

function Home() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBarHome />

      <ContainerHome/>
    </Container>
  )
}

export default Home