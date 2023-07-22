"use client";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header({ size: headerSize }: any) {
  return (
    <Flex
      bg="#222"
      color="#fff"
      height={headerSize}
      px={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Box padding={2}>
        <Image src="/momentum.png" width={"170px"} />
      </Box>

      <InputGroup border="none" size="sm" w={200}>
        <InputLeftElement pointerEvents="none" children={<AiOutlineSearch />} />
        <Input
          bg="#444"
          border="none"
          type="text"
          placeholder="Search..."
          borderRadius={12}
        />
      </InputGroup>
    </Flex>
  );
}
