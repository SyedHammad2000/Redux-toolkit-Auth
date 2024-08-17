import { Container } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Componenet/Header";
import Signup from "./Pages/Signup";
import Addtodo from "./Pages/Addtodo";
import Login from "./Pages/Login";
import Protectedroute from "./Pages/Protectedroute";
import TaskList from "./Pages/TaskList";

const App = () => {
  return (
    <Container h="100vh">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/addtodo"
            element={<Protectedroute component={Addtodo} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<TaskList />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
