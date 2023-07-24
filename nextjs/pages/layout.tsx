import DonorTable from "../components/ContactTable/ContactTable";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import { useAppQuery } from "../generated/graphql";
import OnBoard from "../components/OnBoard/OnBoard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerSize = 16;
  const { data, error, loading } = useAppQuery();
  if (loading) return <Box>Loading...</Box>;
  if (error) return <Box>Error: {error.message}</Box>;
  if (!data?.orgs.length) return <OnBoard />;
  return (
    <>
      <NavBar size={headerSize} />
      <Box
        position="fixed"
        left={0}
        top={headerSize}
        bottom={0}
        right={400}
        bg="#fafafa"
        overflowY={"scroll"}
      >
        <DonorTable />
      </Box>
      <Box
        position={"fixed"}
        right={0}
        top={headerSize}
        bottom={0}
        overflowY={"scroll"}
        borderLeft={"1px solid #ccc"}
        w={"400px"}
        bg="white"
      >
        {children}
      </Box>
    </>
  );
}
