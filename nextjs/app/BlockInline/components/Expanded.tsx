import { Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown-light.css";
import remarkGfm from "remark-gfm";
import ErrorAlert from "./ErrorAlert";
import LoadingSkeleton from "./LoadingSkeleton";
import rehypeRaw from "rehype-raw";
import Embed from "react-embed";

export default function Expanded({ block, showLoading, isError }: any) {
  const getContentComponent = () => {
    if (block.type === "embed") {
      return <Embed url={block.prompt} />;
    } else {
      return (
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {block.output}
        </ReactMarkdown>
      );
    }
  };

  return (
    <>
      <Box key={block.id} bg="#fff" p={4} pb={8}>
        {showLoading ? (
          <LoadingSkeleton />
        ) : (
          <Box className="markdown-body" mt={2}>
            {getContentComponent()}
            {block?.status === "GENERATING" && <LoadingSkeleton />}
            {isError && (
              <ErrorAlert status={block?.status} blockID={block?.id} />
            )}
          </Box>
        )}
      </Box>
    </>
  );
}
