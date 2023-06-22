import * as React from "react"
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
  Center,
} from "@chakra-ui/react"
import logo from "./logo.svg"

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {

  return (
    <Center>
      <chakra.img
        width={"240px"}
        src={logo}
        ref={ref}
        {...props}
      />
    </Center>
  );
})
