import React from "react";

const savetodo = (todos) => {
  try {
    localStorage.setItem("todolist", JSON.stringify(todos));
    console.log("todo saved successfully");
  } catch (error) {
    console.error("error in savefile" + error);
  }
};

export default savetodo;
