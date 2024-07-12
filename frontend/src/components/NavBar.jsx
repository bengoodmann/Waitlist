/* eslint-disable react/prop-types */
import { Button, Flex, Heading, Hide } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      display="flex"
      justifyContent="space-around"
      alignContent="center"
      textAlign="center"
      padding="1.5rem"
      position="fixed"
      bg="black"
      color="white"
      width="100%"
      zIndex="1000"
      height="70px"
    >
      <Heading
        as="h1"
        size="xl"
        fontStyle="oblique"
        transform="rotate(-5deg)"
        fontSize="5xl"
      >
        rails
      </Heading>
      <Hide below="md">
        <Link to="/join">
          <Button
            size="lg"
            sx={{
              bg: "#000080",
              color: "white",
              _hover: {
                bg: "#000020",
              },
            }}
          >
            Join Waitlist
          </Button>
        </Link>
      </Hide>
    </Flex>
  );
};

export default NavBar;
