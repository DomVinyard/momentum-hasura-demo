import {
  Button,
  Text,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Stack,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import {
  BsCheckCircleFill,
  BsImage,
  BsPen,
  BsPuzzle,
  BsRobot,
} from "react-icons/bs";
import "github-markdown-css/github-markdown-light.css";
import { GrAdd } from "react-icons/gr";

type BlockType = {
  id: string;
  label: string;
  description: string;
  is_manual_overwrite?: boolean;
  Icon: any;
};

export const BLOCK_TYPES = [
  {
    id: "ai-text",
    label: "AI Text",
    description: "Tell the AI what to write",
    is_manual_overwrite: false,
    SmallIcon: () => <BsRobot size="14px" />,
    Icon: () => <BsRobot size="20px" />,
  },
  {
    id: "plain-text",
    label: "Plain Text",
    is_manual_overwrite: true,
    description: "Just start writing with plain text",
    SmallIcon: () => <BsPen size="14px" />,
    Icon: () => <BsPen size="20px" />,
  },
  {
    id: "image",
    label: "Image",
    is_manual_overwrite: true,
    description: "Add an image from the web",
    SmallIcon: () => <BsImage size="14px" />,
    Icon: () => <BsImage size="20px" />,
  },
  {
    id: "embed",
    label: "Embed",
    is_manual_overwrite: true,
    description: "Add video or interactive content",
    SmallIcon: () => <BsPuzzle size="14px" />,
    Icon: () => <BsPuzzle size="20px" />,
  },
  {
    id: "quiz",
    label: "Quiz",
    description: "Quiz your readers",
    SmallIcon: () => <BsCheckCircleFill size="14px" />,
    Icon: () => <BsCheckCircleFill size="20px" />,
  },
];

export default function AddBlockPopover({ block, retrievePrompt }: any) {
  return (
    <Popover>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button size={"xs"} variant={"ghost"}>
              <GrAdd size="16px" />
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent bg="white">
              <PopoverArrow />
              <PopoverBody>
                {BLOCK_TYPES.map((block_type: BlockType) => {
                  return (
                    <Flex
                      p={1}
                      borderRadius={8}
                      cursor={"pointer"}
                      alignItems={"center"}
                      mb={0}
                      _hover={{ bg: "gray.100" }}
                      onClick={async () => {
                        onClose();

                        let prompt;
                        if (block_type.id === "plain-text") {
                          prompt = "";
                        } else if (block_type.id === "quiz") {
                          prompt = "Quiz";
                        } else if (block_type.id === "image") {
                          prompt = window.prompt("Add a URL to an image:");
                          if (!prompt) return;
                        } else if (block_type.id === "embed") {
                          prompt = window.prompt(
                            "Add a URL to an Embed (e.g. Youtube, Soundcloud, Twitter, PDF, .mp3, etc):"
                          );
                          if (!prompt) return;
                        } else {
                          prompt = window.prompt("Add a section on:");
                          if (!prompt) return;
                        }
                        await retrievePrompt(
                          prompt,
                          block.index + 1,
                          block_type.id,
                          block_type.is_manual_overwrite
                        );
                      }}
                    >
                      <Center
                        w={12}
                        h={12}
                        border={"1px solid #ddd"}
                        borderRadius={8}
                        mr={2}
                      >
                        <block_type.Icon />
                      </Center>
                      <Stack spacing={-1} py={1}>
                        <Text p={0} m={0} fontSize={"sm"} fontWeight={"500"}>
                          {block_type.label}
                        </Text>
                        <Text m={0} fontSize={"xs"} color="#555">
                          {block_type.description}
                        </Text>
                      </Stack>
                    </Flex>
                  );
                })}
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
}
