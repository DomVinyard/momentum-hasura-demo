import React from "react";
import {
  Text,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
} from "@chakra-ui/react";
import { BiChevronDown, BiLogOut } from "react-icons/bi";
import { signOut, useSession } from "next-auth/react";

interface HamburgerMenuProps {
  menuItems?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = () => {
  const { data: session } = useSession();
  return (
    <Box>
      <Menu>
        <MenuButton aria-label="Options">
          <Flex alignItems={"center"}>
            <Text fontWeight={"bold"}>{session?.user?.name}</Text>
            <BiChevronDown />
          </Flex>
        </MenuButton>
        <MenuList>
          {session?.user && (
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              <MenuItem key={"logout"} display={"flex"}>
                <BiLogOut size={19} /> <Text ml={2}>Sign out</Text>
              </MenuItem>
            </a>
          )}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default HamburgerMenu;
