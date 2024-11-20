import { useEffect, useState } from "react";
import axios from "axios";
import tracker from "../components/tracker";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Heading,
  Select,
  Textarea,
  Button,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const JoinPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [test, setTest] = useState("");
  const [pro, setPro] = useState("");
  const [recommendFeatures, setRecommendFeatures] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toast = useToast();

  useEffect(() => {
    tracker("join_page");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/join", {
        name,
        email,
        test,
        pro,
        recommendFeatures,
      });
      toast({
        title: "Success",
        description: res.data.message,
        status: "success",
      });
      setLoading(false);
      navigate("/");
    } catch (error) {
      const err = error.response?.data?.message || error.response?.data[0];
      toast({
        title: "Error",
        description: err,
        status: "error",
      });
      console.log(error);
      setLoading(false);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxW="xl" mx="auto" mt={4} p={4}>
      <Box display="flex" justifyContent="center" mb={2}>
        <Heading as="h2">Join Waiting List</Heading>
      </Box>

      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={2} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            borderColor="black"
          />
        </FormControl>
        <FormControl id="email" mb={2} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            borderColor="black"
          />
        </FormControl>
        <FormControl mb={2} isRequired>
          <FormLabel htmlFor="test" mb="0">
            Will you join our test phases?
          </FormLabel>
          <br />
          <Select
            name="test"
            value={test}
            onChange={(e) => setTest(e.target.value)}
            placeholder="Choose one"
            borderColor="black"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="maybe">Maybe</option>
          </Select>
        </FormControl>
        <FormControl mb={2} isRequired>
          <FormLabel htmlFor="pro" mb="0">
            Can you pay for PRO features?
          </FormLabel>
          <br />
          <Select
            name="pro"
            value={pro}
            onChange={(e) => setPro(e.target.value)}
            placeholder="Choose one"
            borderColor="black"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="maybe">Maybe</option>
          </Select>
        </FormControl>
        <FormControl id="recommendFeatures" mb={2}>
          <FormLabel>Recommend Features</FormLabel>
          <Textarea
            name="recommendFeatures"
            value={recommendFeatures}
            onChange={(e) => setRecommendFeatures(e.target.value)}
            placeholder="Recommend features (optional)"
            borderColor="black"
            resize="none"
            size="sm"
          />
        </FormControl>
        <Box display="flex" justifyContent="center">
          <Button
            type="submit"
            size="lg"
            sx={{
              bg: "#000080",
              color: "white",
              _hover: {
                bg: "#000020",
              },
            }}
          >
            {loading ? <Spinner /> : "Join Waitlist"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default JoinPage;
