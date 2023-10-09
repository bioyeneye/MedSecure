// DrawerComponent.tsx
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import type React from "react";

import { useDrawer } from "../contexts/SignupDrawerContext";

import BusinessInfoTab from "./components/BusinessInformationSignup";

interface SignupDrawerProps {}

const SignupDrawer: React.FC<SignupDrawerProps> = () => {
  const { isOpen, onClose } = useDrawer();
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontSize="md">Get Started with Account</DrawerHeader>
        <Divider />
        <DrawerBody p="0">
          <Tabs isFitted colorScheme="yellow">
            <TabList>
              <Tab fontWeight="bold" padding="16px 8px">
                Add Information
              </Tab>
              <Tab fontWeight="bold" padding="16px 8px">
                Summary
              </Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="0px"
              bg="yellow"
              borderRadius="0px"
            />
            <TabPanels>
              <TabPanel>
                <BusinessInfoTab />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerBody>
        <Divider />
        <DrawerFooter justifyContent="center">
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="yellow">Continue</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SignupDrawer;
