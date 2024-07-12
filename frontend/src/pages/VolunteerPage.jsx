import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  useToast,
  Spinner,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import tracker from "../components/tracker";

const VolunteerPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [experience, setExperience] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();
  useEffect(() => {
    tracker("volunteer_page");
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/volunteer", {
        name,
        email,
        profession,
        experience,
      });
      setLoading(false);
      toast({
        title: "Success",
        description: res.data.message,
        status: "success",
      });
    } catch (error) {
      const err = error.response?.data?.message || error.response?.data[0];
      toast({
        title: "Error",
        description: err || "An error occurred",
        status: "error",
      });
      console.log(error);
      setLoading(false);
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box maxW="xl" mx="auto" mt={4} p={4}>
      <Box  display="flex" justifyContent="center" mb={2}>
        <Heading as="h2">Join As A Volunteer</Heading>
      </Box>
      <Box>
        <form method="post" onSubmit={handleSubmit}>
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
          <FormControl id="profession" mb={2} isRequired>
            <FormLabel>Profession</FormLabel>
            <Input
              type="text"
              name="profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              placeholder="Profession (ex. Software Developer)"
              borderColor="black"
            />
          </FormControl>
          <FormControl id="experience" mb={2} isRequired>
            <FormLabel>How Many Years Of Do You Have?</FormLabel>
            <Input
              type="number"
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Input number only. Matter of fact, experience doesn't matter"
              borderColor="black"
            />
          </FormControl>
          <Box display="flex" justifyContent="center">
            <Button type="submit"  size="lg"
            sx={{
              bg: "#000080",
              color: "white",
              _hover: {
                bg: "#000020",
              },
            }}>
              {loading ? <Spinner /> : "Join!"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default VolunteerPage;
