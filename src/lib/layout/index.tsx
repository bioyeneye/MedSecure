import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

import SignupDrawer from "../shared/SignupDrawer";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={1200} transition="0.5s ease-out">
      <Meta />
      <Flex wrap="wrap" margin="8" minHeight="90vh">
        <Header />
        <Box
          width="full"
          as="main"
          py={22}
          alignSelf="center"
          position="relative"
        >
          {children}
        </Box>
        <Footer />
      </Flex>

      <SignupDrawer />
    </Box>
  );
};

export default Layout;
