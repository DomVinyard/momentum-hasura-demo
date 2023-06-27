// simple component

import React from "react";
import { Box, Text, Heading, Center, Stack } from "@chakra-ui/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { adminClient } from "../../lib/apollo";
import {
  GetDocumentVisibilityDocument,
  GetDocumentSingleDocument,
} from "../../generated/graphql";
import { Context } from "@apollo/client";
import "github-markdown-css/github-markdown-light.css";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Embed from "react-embed";

const SharedDocument = (props: any) => {
  const visible: boolean = props.visible;
  if (!visible)
    return (
      <Box>
        <Heading>Document is not public</Heading>
      </Box>
    );

  const document: any = props.data;

  const convertToComponents = (title: string, blocks: any) => {
    const markdownTitle = (
      <ReactMarkdown
        key={title}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >{`# ${title}\n`}</ReactMarkdown>
    );

    const components =
      blocks?.map((block: any) => {
        if (block.type === "embed") {
          return <Embed key={block.id} url={block.prompt} />;
        } else {
          return (
            <ReactMarkdown
              key={block.id}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >{`${block.output}`}</ReactMarkdown>
          );
        }
      }) || [];

    return [markdownTitle, ...components];
  };

  return (
    <Stack
      pt={16}
      px={48}
      pb={8}
      className="markdown-body"
      alignItems={"center"}
    >
      <Box maxW={780}>
        {convertToComponents(document?.title, document?.blocks)}
      </Box>
      <Box pt={24}>
        <Center>
          <Text fontSize="m" color="gray.500">
            Created with ❤️ and 🤖 using momentum-demo
          </Text>
        </Center>
      </Box>
    </Stack>
  );
};

export default SharedDocument;

const isDocumentPublic = async (document_id: string) => {
  const response = await adminClient.query({
    query: GetDocumentVisibilityDocument,
    variables: { id: document_id },
    fetchPolicy: "network-only",
  });
  return response.data.documents_by_pk.is_public;
};

const getDocument = async (document_id: string) => {
  const docResponse = await adminClient.query({
    query: GetDocumentSingleDocument,
    variables: { documentID: document_id },
    fetchPolicy: "network-only",
  });
  return docResponse.data.documents_by_pk;
};

export const getServerSideProps = async ({ query }: Context) => {
  const { id: document_id } = query;

  const visible = await isDocumentPublic(document_id);
  if (!visible) {
    return { props: { visible } };
  }

  const data = await getDocument(document_id);
  return { props: { visible, data } };
};
