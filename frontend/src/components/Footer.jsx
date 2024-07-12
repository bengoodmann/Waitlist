
import {
  Box,
  Flex,
  Text,
  Stack,
  IconButton,
  Heading
} from '@chakra-ui/react';
import {  FaTwitter,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="black" color="white" py={4}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        wrap="wrap"
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <Box>
        <Heading
        as="h1"
        size="xl"
        fontStyle="oblique"
        transform="rotate(-5deg)"
        fontSize="5xl"
      >
        rails
      </Heading>
          <Text mt={2} fontSize="sm">
            © {new Date().getFullYear()} Rails Finance. All rights reserved.
          </Text>
        </Box>


        <Stack direction="row" spacing={6} mt={{ base: 6, md: 0 }}>
          <IconButton
            as="a"
            href="https://www.twitter.com"
            aria-label="Twitter"
            icon={<FaTwitter />}
            bg="gray.700"
            _hover={{ bg: 'gray.600' }}
            isRound
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            bg="gray.700"
            _hover={{ bg: 'gray.600' }}
            isRound
          />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
