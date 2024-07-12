import {
  Flex,
  Heading,
  Button,
  ButtonGroup,
  Text,
  Box,
  Highlight,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <Flex
      as="section"
      height={{ base: "100vh", sm: "80vh", lg: "100vh", md: "80vh" }}
      p={[2, 4, 6]}
      align="center"
      justify="center"
      textAlign="center"
      color="white"
      bg="black"
    >
      <Box />
      <Box
        w={{ base: "", lg: "60%", sm: "100%" }}
        padding={{ base: "1rem", sm: "1.5rem" }}
        marginTop={{ base: "0%", sm: "70px", lg: "100px" }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "", lg: "6xl", sm: "4xl" }}
          fontWeight="900"
          paddingBottom="2rem"
        >
          <Highlight
            query={["smarter"]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: "#000080",
              color: "white",
              fontStyle: "italic",
            }}
          >
            The smarter way to budget & bank.
          </Highlight>
        </Heading>
        <Text as="p" fontSize={{ base: "xl", sm: "sm" }}>
          Manage all your accounts seamlessly, transfer funds, create budgets,
          set spending limits, and control your expenses—all in one convenient
          platform.
        </Text>

        <ButtonGroup gap="1" marginTop="50px">
          <Link to="/join">
            <Button
              sx={{
                bg: "#000080",
                color: "white",
                _hover: {
                  bg: "#000020",
                },
              }}
              size={{base: "md", sm: "md", lg: "lg"}}
            >
              Join Waitlist
            </Button>
          </Link>
          <Link to="/volunteer">
            <Button size={{base: "md", sm: "md", lg: "lg"}}>Join as a Volunteer</Button>
          </Link>
        </ButtonGroup>
      </Box>
    </Flex>
  );
};
