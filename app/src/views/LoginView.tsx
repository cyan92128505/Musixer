import { useCallback, useState } from "react";
import { api, errorHandler } from "../services/Utils";
import { useNavigate } from "react-router";
import { Link as ReachLink } from "react-router-dom";

import { isAuth, login } from "../services/Auth";
import {
  Grid,
  VStack,
  Input,
  Box,
  Button,
  Container,
  Stack,
  Link,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Logo } from "../Logo";

export const LoginView: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const requestLogin = useCallback(() => {
    api
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => login(response))
      .catch((error) => {
        errorHandler(error, {});
      });
  }, [email, password]);

  // When the user already authenticated
  if (isAuth()) {
    navigate("/");
    return <></>;
  }

  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Container maxW="md">
              <Stack padding="4" spacing={3}>
                <Logo></Logo>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={"Email"}
                />
                <Input
                  type="password"
                  name="email"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={"Password"}
                />
                <br />
                <Button
                  colorScheme="teal"
                  type="button"
                  fontSize="19px"
                  onClick={requestLogin}
                >
                  Login
                </Button>
                <Link as={ReachLink} to="/register">
                  Register
                </Link>
              </Stack>
            </Container>
          </VStack>
        </Grid>
      </Box>
    </>
  );
};

export default LoginView;
