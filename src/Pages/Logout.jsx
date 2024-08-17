import { ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Redux-toolkit/authSlice";
import { Link } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const RemoveAuth = () => {
    const authentication = "authentication";
    dispatch(logout({ authentication }));
    window.location.reload();
  };

  return (
    <UnorderedList 
    styleType="none">
      <ListItem color="white">
        <Link   onClick={RemoveAuth}>Logout</Link>
      </ListItem>
    </UnorderedList>
  );
};

export default Logout;
