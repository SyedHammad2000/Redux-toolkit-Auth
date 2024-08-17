import React, { useState } from "react";
import {
  Container,
  VStack,
  Text,
  FormControl,
  Input,
  FormLabel,
  Center,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { login } from "../Redux-toolkit/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth.user);
  const name = state.name;

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
    if (state.email == email && state.password == password) {
      const userInfo = {
        // i want spread operator
        name,
        email,
        password,
      };
      dispatch(login(userInfo));
      toast({
        title: "Login Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      navigate("/addtodo");
    } else {
      toast({
        title: "Login Failed",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  return (
    <>
      <VStack spacing={5}>
        <Text fontFamily={"cursive"} fontSize={"2rem"}>
          Log in
        </Text>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your Email"
            type={"email"}
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Create your Password"
            type={"password"}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="blue" variant={"solid"} onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </>
  );
};

export default Login;
