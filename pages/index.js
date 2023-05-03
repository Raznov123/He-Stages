import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function IndexPage() {
  return (
    <Grid
      templateAreas={`"nav header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'50px 1fr 5.5rem'}
      gridTemplateColumns={'15.9rem 1fr'}
      h='100vh'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem  bg='orange.300' area={'header'}>
        Header
      </GridItem>
      <GridItem area={'nav'}>
        <Sidebar/>
      </GridItem>
      <GridItem   area={'main'}>
        Main
      </GridItem>
      <GridItem  area={'footer'}>
        <Footer/>
      </GridItem>
    </Grid>
  );
}

export default IndexPage;
