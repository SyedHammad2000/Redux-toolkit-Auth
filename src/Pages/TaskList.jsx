import {
  Box,
  Button,
  flexbox,
  Text,
  textDecoration,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletetask, toggletask } from "../Redux-toolkit/todoSlice";

const TaskList = () => {
  const Mystate = useSelector((state) => state);
  const dispatch = useDispatch();

  const handledelete = (id) => {
    dispatch(deletetask(id));
  };

  console.log(Mystate);

  return (
    <VStack>
      <Text>TaskList</Text>
      <Box
        width={"40em"}
        bg={"black"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        color={"white"}
        borderRadius={"10px"}
      >
        {Mystate.todo.map((el) => {
          return (
            <Box
              key={el.id}
              width={"33em"}
              m={"20px"}
              bg={"white"}
              display={"flex"}
              marginTop={"20px"}
              justifyContent={"space-evenly"}
              height={"5rem"}
              flexFlow={"row"}
              p={"4"}
              borderRadius={"10px"}
              color={"black"}
              alignItems={"center"}
              textTransform={"uppercase"}
            >
              <Text>
                {`Task Name`}
                <br />
                {`${el.name}`}
              </Text>
              <Text overflow={"hidden"} width={"100px"} height={"50px"}>
                {`Description`}
                <br />
                {`${el.description}`}
              </Text>
              <Text
                cursor={"pointer"}
                onClick={() => dispatch(toggletask(el.id))}
              >
                <Button>{el.isCompleted ? "Completed" : "inProcess"}</Button>
              </Text>
              <Button
                variant={"solid"}
                colorScheme={"red"}
                onClick={() => handledelete(el.id)}
              >
                Delete
              </Button>
            </Box>
          );
        })}
      </Box>
      ;
    </VStack>
  );
};

export default TaskList;
