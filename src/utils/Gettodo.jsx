import React from "react";

const Gettodo = () => {
  try {
    const loadtodo = localStorage.getItem("todolist");
    return loadtodo ? JSON.parse(loadtodo) : [];
  } catch (error) {
    console.log("could not load" + error);
    return [];
  }
};

export default Gettodo;
