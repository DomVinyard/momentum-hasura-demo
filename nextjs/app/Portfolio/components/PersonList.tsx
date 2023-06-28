import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Table, Tbody, Tr, Td } from "@chakra-ui/react";

export default function PersonList({ people, Actions }: any) {
  return (
    <Table variant="simple" mt={8}>
      <Tbody>
        {people?.map((person: any) => {
          console.log({ person });
          return (
            <Tr key={person.id} bg="#f5f5f5" borderTop={"8px solid white"}>
              <Td>
                <Flex alignItems="center">
                  <Avatar
                    mr={2}
                    size="sm"
                    name={person.name}
                    src={person.avatar}
                  />
                  <Box>
                    <Text>{person.name}</Text>
                    <Text color="#555" fontWeight={"bold"} fontSize={"xs"}>
                      {person.momentum?.touches || 0} touch
                      {person.momentum?.touches === 1 ? "" : "es"}
                    </Text>
                  </Box>
                </Flex>
              </Td>
              {Actions && (
                <Td>
                  <Flex justifyContent={"flex-end"}>
                    <Actions
                      crmID={person.id}
                      momentumID={person?.momentum?.id}
                    />
                  </Flex>
                </Td>
              )}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
