import { Container, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Pages/Logout";

const Header = () => {
  const auth = localStorage.getItem("authentication");

  return (
    <Container
      spacing="5px"
      display="flex"
      alignItems="center"
      bg="black"
      h={"5rem"}
      justifyContent={"space-between"}
      textTransform={"uppercase"}
      borderRadius={"0 0 10px 10px"}
      _hover={{
        bg: "blue",
        color: "black",
        //   transition
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Text color={"white"} fontSize={"1rem"}>
        Todo List
      </Text>
      <UnorderedList
        display={"flex"}
        gap="10px"
        styleType={"none"}
        fontFamily={"cursive"}
      >
        <ListItem>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to={""}
          >
            Task-List
          </Link>
        </ListItem>
        <ListItem>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to={"/addtodo"}
          >
            Add-Todo
          </Link>
        </ListItem>
        {auth ? (
          <>
            <Logout />
          </>
        ) : (
          <>
            <ListItem>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to={"/login"}
              >
                Login
              </Link>
            </ListItem>
            <ListItem>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to={"/signup"}
              >
                Signup
              </Link>
            </ListItem>
          </>
        )}
      </UnorderedList>
    </Container>
  );
};

export default Header;
{
  /*  */
}
