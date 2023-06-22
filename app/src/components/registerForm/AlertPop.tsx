import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

type AlertPopType = {
  title?: string;
}

export default function AlertPop(props: AlertPopType) {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{props.title}</AlertTitle>
    </Alert>
  );
}
