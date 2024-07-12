/* eslint-disable react/prop-types */
import {
    Flex,
    Heading,
    Text,
    Box,

    Icon,
    Stack,
  } from "@chakra-ui/react";
  import {
    FaWallet,
    FaCreditCard,
    FaChartPie,
    FaMoneyBillAlt,
    FaSyncAlt,
    FaChartBar,
    FaPiggyBank,
  } from 'react-icons/fa';
  import { motion } from 'framer-motion';
  
  const MotionBox = motion(Box);
  
  export const Features = () => {

  
    return (
      <Flex
        as="section"
        align="center"
        justify="center"
        py={{ base: 8, md: 16 }}
        px={{ base: 4, md: 8 }}
        flexDirection="column"
        bg="gray.50"
      >
        <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb={8}>
          Key Features
        </Heading>
        <Flex wrap="wrap" justify="center">
          <FeatureItem
            icon={FaWallet}
            title="Account Management"
            description="Manage all your accounts seamlessly from one platform."
          />
          <FeatureItem
            icon={FaCreditCard}
            title="Card Services"
            description="Easily manage and control your debit and credit cards."
          />
          <FeatureItem
            icon={FaChartBar}
            title="Budget Creation"
            description="Create detailed budgets to track and manage your spending."
          />
          <FeatureItem
            icon={FaMoneyBillAlt}
            title="Expense Management"
            description="Set spending limits and control your expenses effectively."
          />
          <FeatureItem
            icon={FaSyncAlt}
            title="Accounts Sync"
            description="Sync all your financial accounts for a consolidated view."
          />
          <FeatureItem
            icon={FaChartPie}
            title="Financial Insights"
            description="Gain valuable insights into your financial habits and patterns."
          />
          <FeatureItem
            icon={FaPiggyBank}
            title="Savings Goals"
            description="Set and track your savings goals to achieve financial stability."
          />
        </Flex>
      </Flex>
    );
  };
  
  const FeatureItem = ({ icon, title, description }) => {
    return (
      <MotionBox
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        maxW="sm"
        w="full"
        p={4}
        m={4}
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        flexBasis={{ base: "100%", md: "45%", lg: "30%" }}
      >
        <Stack direction="row" align="center">
          <Icon as={icon} w={8} h={8} color="blue" />
          <Box>
            <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} mb={2}>
              {title}
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              {description}
            </Text>
          </Box>
        </Stack>
      </MotionBox>
    );
  };
  