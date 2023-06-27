import { Button, Text, Flex } from "@chakra-ui/react";
import { BsClockFill } from "react-icons/bs";
import regenerateBlock from "../../../actions/regenerateBlock";

export default function ErrorAlert({
  status,
  blockID,
}: {
  blockID: string;
  status: string;
}) {
  return (
    <>
      <Flex mt={2} color={"firebrick"} fontSize={"sm"} fontWeight={"bold"}>
        <BsClockFill color="firebrick" size={"20px"} />
        <Text ml={1} as="span">
          <Flex>
            {status === "TIMEOUT" &&
              "Timed out generating block. Try again in a few minutes."}
            {status === "OPEN_AI_ERROR" && <Text>Error generating block </Text>}
            <Button
              ml={1}
              size="xs"
              color="#000"
              onClick={() => {
                regenerateBlock({
                  blockID,
                  skipGenerateSuggestions: true,
                });
              }}
            >
              Retry
            </Button>
          </Flex>
        </Text>
      </Flex>
    </>
  );
}
