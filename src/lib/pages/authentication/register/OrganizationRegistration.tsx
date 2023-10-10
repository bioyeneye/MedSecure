import {
  Box,
  CircularProgress,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

import type { Country } from "../../../services/CountryStateService";
import CountryStateService from "../../../services/CountryStateService";

export const OrganizationRegistration: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  const initialized = useRef(false);
  const handleCloseLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!initialized.current) {
        initialized.current = true;

        const cachedData = localStorage.getItem("cachedData");
        if (cachedData && cachedData !== "undefined") {
          setLoading(false);
          setCountries(JSON.parse(cachedData));
        } else {
          const countryStateService = new CountryStateService();
          try {
            const data = await countryStateService.fetchData();
            setCountries(data);
            setLoading(false);
            localStorage.setItem("cachedData", JSON.stringify(data));
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            setLoading(false);
          }
        }
      }
    };

    fetchData();
  }, [initialized]);

  const [businessInfo, setBusinessInfo] = useState({
    businessName: "",
    streetAddress: "",
    zipCode: "",
    state: "",
    city: "",
    country: "USA", // Default to USA
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBusinessInfo({
      ...businessInfo,
      [name]: value,
    });
  };
  return (
    <Box p={4}>
      <Heading size="sm">Business Information</Heading>
      {!loading && countries?.length > 0 && (
        <Box>
          <FormControl mt={4}>
            <FormLabel>Business Name</FormLabel>
            <Input
              type="text"
              name="businessName"
              value={businessInfo.businessName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Country</FormLabel>
            <Select
              name="country"
              value={businessInfo.country}
              onChange={handleChange}
            >
              {countries?.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Street Address</FormLabel>
            <Input
              type="text"
              name="streetAddress"
              value={businessInfo.streetAddress}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Zip Code</FormLabel>
            <Input
              type="text"
              name="zipCode"
              value={businessInfo.zipCode}
              onChange={handleChange}
            />
          </FormControl>
          <Flex mt={4}>
            <FormControl flex={1} mr={2}>
              <FormLabel>State</FormLabel>
              <Input
                type="text"
                name="state"
                value={businessInfo.state}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl flex={1} ml={2}>
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                name="city"
                value={businessInfo.city}
                onChange={handleChange}
              />
            </FormControl>
          </Flex>
        </Box>
      )}
      <Modal
        isOpen={loading}
        closeOnOverlayClick={false}
        isCentered
        onClose={handleCloseLoading}
      >
        <ModalOverlay />
        <ModalContent textAlign="center" p={8}>
          <CircularProgress isIndeterminate color="teal.300" />
          <Text mt="4">Loading...</Text>
        </ModalContent>
      </Modal>
    </Box>
  );
};
