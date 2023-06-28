import {
  Box,
  Heading,
  Button,
  Avatar,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export default function PersonList({ people, Actions }: any) {
  return (
    <Table variant="striped" mt={8}>
      <Tbody>
        {people?.map((person: any) => (
          <Tr key={person.name}>
            <Td>
              <Flex alignItems="center">
                <Avatar
                  mr={2}
                  size="sm"
                  name={person.name}
                  src={person.avatar}
                />
                {person.name}
              </Flex>
            </Td>
            {Actions && (
              <Td>
                <Flex justifyContent={"flex-end"}>
                  <Actions crmID={person.id} infoID={person.info?.id} />
                </Flex>
              </Td>
            )}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
