import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { GiLightBulb } from "react-icons/gi";

export default function GuidanceCount({
  count = 0,
  Icon = GiLightBulb,
}: {
  count: number;
  Icon?: any;
}) {
  return (
    <Box>
      <Button
        size={"xs"}
        variant={"ghost"}
        colorScheme="purple"
        pointerEvents={"none"}
      >
        <Flex alignItems={"center"}>
          <Icon size={"12px"} />
          <Text ml={0.5} fontSize={"xs"} fontWeight={"bold"}>
            {count}
          </Text>
        </Flex>
      </Button>
    </Box>
  );
}
