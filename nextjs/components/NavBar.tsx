import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  AiOutlineLogout,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import UserProfileModal from "./UserProfileModal/UserProfileModal";

export default function NavBar({ size: headerSize }: any) {
  const { data: session } = useSession();
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      bg="#222"
      color="#fff"
      height={headerSize}
      pl={16}
      pr={2}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Box padding={2}>
        <Image src="/momentum.png" width={"170px"} />
      </Box>

      <Flex alignItems={"center"}>
        <InputGroup border="none" size="sm" w={200}>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch />}
          />
          <Input
            bg="#444"
            border="none"
            type="text"
            placeholder="Search..."
            borderRadius={12}
          />
        </InputGroup>
        <Menu>
          <MenuButton
            ml={2}
            mr={3.5}
            cursor={"pointer"}
            as={Avatar}
            aria-label="Options"
            width={"34px"}
            height="34px"
            src={session?.user?.image}
            variant="outline"
          />
          <MenuList>
            <MenuItem
              icon={<AiOutlineUser />}
              color="#222"
              onClick={() => {
                onOpen();
              }}
            >
              Your Profile
            </MenuItem>
            <MenuItem
              icon={<AiOutlineLogout />}
              color="#222"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <UserProfileModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
