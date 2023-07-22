import {
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  Flex,
  Text,
  Avatar,
  Badge,
  Thead,
  Progress,
} from "@chakra-ui/react";
import TimeAgo from "react-timeago";
import { useRouter, usePathname } from "next/navigation";
import users from "../../mock_data/users";

function shortenNumber(num: number) {
  if (!num) return 0;
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "m";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  } else {
    return num.toString();
  }
}

const TOUCH_TARGET = 8;

export default function DonorTable() {
  const router = useRouter();
  const pathname = usePathname();
  const selectedDonor = pathname.split("/").slice(-1)[0];
  return (
    <Box
      padding={16}
      paddingTop={4}
      w="100%"
      pb={1000}
      onClick={(e) => {
        console.log({ e: e.target });
        if (selectedDonor) {
          router.push(`/`, { scroll: false });
        }
      }}
    >
      <Table variant="simple" mt={4}>
        <Thead>
          <Tr>
            {[
              "Donor",
              "Lifetime giving",
              "Last Gift",
              "Touches",
              "Stage",
              "",
            ].map((header) => (
              <Td key={header} fontSize={"sm"} fontWeight={"bold"}>
                {header}
              </Td>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((person: any) => {
            return (
              <Tr
                cursor="pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/donor/${person.id}`, { scroll: false });
                }}
                key={person.id}
                border={
                  selectedDonor === person.id ? `1.5px solid #4597F8` : "none"
                }
              >
                <Td>
                  <Flex alignItems="center">
                    <Avatar
                      mr={2}
                      size="sm"
                      name={person.name}
                      src={person.avatar}
                    />
                    <Box>
                      <Text fontSize="md">{person.name}</Text>
                    </Box>
                  </Flex>
                </Td>
                <Td>
                  <Text fontSize="md">
                    ${shortenNumber(person.lifetime_giving)}
                  </Text>
                </Td>
                <Td>
                  <Text fontSize="md">
                    <TimeAgo date={person.gifts[0]?.date} />
                  </Text>
                </Td>
                <Td>
                  <Progress
                    value={(person.correspondance.length / TOUCH_TARGET) * 100}
                  />
                </Td>
                <Td>
                  <Text textTransform={"capitalize"} fontSize="md">
                    {person.stage}
                  </Text>
                </Td>
                <Td textAlign={"right"}>
                  {person.recommend && (
                    <Badge colorScheme="green">Get in touch</Badge>
                  )}
                  {person.do_not_contact && (
                    <Badge colorScheme="red">Do not email</Badge>
                  )}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
