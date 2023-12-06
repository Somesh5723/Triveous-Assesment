import React, { useState } from "react";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth();
const Login = () => {
  const [email, setEmai] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("login success"))
      .then((value) => navigate("/"))
      .catch((err) => console.log(err));

    setError(true);
    if (!email) {
      setError("Please fill the email");
      return;
    }
    if (!password) {
      setError("Please fill the password");
      return;
    }
  };

  return (
    <Box
      w="40%"
      border="1px"
      borderColor="gray.400"
      m="auto"
      p="10"
      borderRadius="2xl"
    >
      <Heading size="md" mb="10">
        Login{" "}
      </Heading>
      <Input
        value={email}
        onChange={(e) => setEmai(e.target.value)}
        type="email"
        required
        placeholder="Email"
        mb="5"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        mb="5"
      />
      {error && <Text>{error}</Text>}
      <Button colorScheme="blue" w="60%" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
