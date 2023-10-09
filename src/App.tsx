import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "~/lib/layout";
import Routings from "~/lib/router/Routings";
import { theme } from "~/lib/styles/theme";

import { DrawerProvider } from "./lib/contexts/SignupDrawerContext";

const App = () => (
  <ChakraProvider theme={theme}>
    <DrawerProvider>
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </DrawerProvider>
  </ChakraProvider>
);

export default App;
