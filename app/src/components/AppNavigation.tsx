import { Link as ReachLink } from "react-router-dom";
import { isAuth, logout } from "../services/Auth";
import React from "react";
import {
  Spacer, Button,

  Flex,
  Divider,
  Container,
} from "@chakra-ui/react";

export const AppNavigation: React.FC = () => {
  if (!isAuth()) {
    return <></>;
  }
  return (
    <>
      <Container>
        <Flex>
          <Button variant="ghost" as={ReachLink} to={"/"}>
            MUSIXER
          </Button>
          <Spacer />
          <Button variant="ghost" type="button" onClick={logout}>
            Logout
          </Button>
        </Flex>
      </Container>
      <Divider />
    </>
  );
};

export default AppNavigation;
