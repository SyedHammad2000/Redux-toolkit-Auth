import {
  VStack,
  Text,
  FormControl,
  Input,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { signup } from "../Redux-toolkit/authSlice";
import { redirect, useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }

    const userInfo = {
      name,
      email,
      password,
    };
    dispatch(signup(userInfo));
    toast({
      title: "Registered Successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });

    navigate("/login");

    setname = "";
    setemail = "";
    setpassword = "";
  };

  return (
    <>
      <VStack spacing={5}>
        <Text fontFamily={"cursive"} fontSize={"2rem"}>
          Sign Up
        </Text>

        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter your Name"
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your Email"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Create your Password"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme="blue"
          type="submit"
          variant={"solid"}
          onClick={handleRegister}
        >
          Signin
        </Button>
      </VStack>
    </>
  );
};

export default Signup;
