import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import type React from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useDrawer } from "../contexts/SignupDrawerContext";
import { routeUrls } from "../router/routecontants";

import ThemeToggle from "./ThemeToggle";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { openDrawer } = useDrawer();

  const navigate = useNavigate();

  const handleGoLoginPage = () => navigate(routeUrls.login);

  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <Heading as="h1" fontSize={["md", "xl"]}>
          medSecure
        </Heading>
      </Link>
      <Box marginLeft="auto">
        <ThemeToggle />
        <Button
          variant="link"
          mx="16px"
          mr="28px"
          style={{ textDecoration: "none" }}
          onClick={handleGoLoginPage}
        >
          Login
        </Button>
        <Button
          rightIcon={<MdOutlineVerifiedUser />}
          colorScheme="yellow"
          variant="solid"
          fontSize="md"
          onClick={openDrawer}
        >
          Get started
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
