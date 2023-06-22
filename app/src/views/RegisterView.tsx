import React, {  } from "react";
import { useNavigate } from "react-router";
import { Link as ReachLink } from "react-router-dom";

import {
  Grid,
  VStack,
  Box,
  Container,
  Stack,
  Link,
} from "@chakra-ui/react";
import { isAuth } from "../components/Auth";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Logo } from "../Logo";
import RegisterForm from "../components/registerForm/Form";


export const RegisterView: React.FC = () => {
  const navigate = useNavigate();


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
                <RegisterForm />
                <p>
                  <Link as={ReachLink} to="/login">
                    Login
                  </Link>
                </p>
              </Stack>
            </Container>
          </VStack>
        </Grid>
      </Box>
    </>
  );
};

export default RegisterView;
