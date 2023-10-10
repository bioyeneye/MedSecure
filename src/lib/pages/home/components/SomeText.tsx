import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  keyframes,
  Text,
} from "@chakra-ui/react";
import type React from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { routeUrls } from "../../../router/routecontants";

const animation = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 125% 0;
  }
`;

interface HomeContentComponentProps {}

const SomeText: React.FC<HomeContentComponentProps> = () => {
  const headingAnimation = `${animation} 7s linear infinite`;
  const headingAnimationHolder = `${animation} 2s linear infinite`;

  const navigate = useNavigate();
  const handleBackToHome = (url: string) => navigate(url);

  return (
    <Flex
      alignItems="center"
      justify="center"
      direction={{ base: "column", md: "row" }}
    >
      <Image
        src="/assets/homepage_delivery.svg"
        title="vite"
        width={["180px", "200px", "450px"]}
        alignContent="center"
        mb={{ base: "16px", md: "0" }}
      />
      <Grid textAlign={{ base: "center", md: "left" }} gap={8} px="32px">
        <Heading
          as="h2"
          bgGradient="linear-gradient(110.78deg, #27c4f5, #ba37ce, #ec9d5c, #58c322, #27c4f5)"
          bgClip="text"
          fontSize={["2xl", "3xl", "4xl", "6xl"]}
          fontWeight="extrabold"
          backgroundSize="500% auto"
          animation={headingAnimation}
          _hover={{ animation: headingAnimationHolder }}
        >
          One Place for All Your Medical Deliveries
        </Heading>
        <Text fontSize={["sm", "md", "2xl"]} fontWeight="semibold">
          One app to delivery them all. Easily place your medical items for
          delivery in a secure efficient way.
        </Text>
        <Box alignContent="center" py="16px">
          <Flex>
            <Button
              rightIcon={<MdOutlineVerifiedUser />}
              colorScheme="yellow"
              variant="solid"
              fontSize="lg"
              size="lg"
              fontWeight="bold"
              rounded="3xl"
              onClick={() => handleBackToHome(routeUrls.organizationRegister)}
            >
              Get started as a Company
            </Button>

            <Button
              rightIcon={<MdOutlineVerifiedUser />}
              colorScheme="yellow"
              variant="solid"
              fontSize="lg"
              size="lg"
              fontWeight="bold"
              rounded="3xl"
              onClick={() => handleBackToHome(routeUrls.riderRegister)}
              ml="8"
            >
              Get started as a Driver
            </Button>
          </Flex>
        </Box>
      </Grid>
    </Flex>
  );
};

export default SomeText;
