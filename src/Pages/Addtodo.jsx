import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addtask } from "../Redux-toolkit/todoSlice";

const Addtodo = () => {
  const toast = useToast();
  const [name, setname] = useState();
  const [description, setdescription] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.todo)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
    if (name && description) {
      const taskinfo = {
        name,
        description,
      };

      dispatch(Addtask(taskinfo));
      toast({
        title: "Task Added Successfully",
        status: "success",
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
          Add-Todo Task
        </Text>
        <FormControl>
          <FormLabel>Task-Name</FormLabel>
          <Input
            placeholder="Enter your Name"
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></Textarea>
        </FormControl>
        <Button
          colorScheme="blue"
          type="submit"
          variant={"solid"}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </VStack>
    </>
  );
};

export default Addtodo;
