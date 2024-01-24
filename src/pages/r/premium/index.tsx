import { Flex, Image } from "@chakra-ui/react";
import React from "react";

function index() {
  return (
    <Flex
      align="flex-end"
      color="white"
      p="6px 10px"
      bg="blue.500"
      height="100vh"
      borderRadius="4px 4px 0px 0px"
      fontWeight={600}
      bgImage="url(/Images/premium.png)"
      backgroundSize="cover"
    >
      {/* <Image src='Images/premium' alt='Premium Page' /> */}
    </Flex>
  );
}

export default index;
