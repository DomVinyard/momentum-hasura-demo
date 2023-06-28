import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
} from "@chakra-ui/react";
import Portfolio from "../../../../app/Portfolio/Portfolio";
import Layout from "../../../../app/_Global/_Layout";
import { useRouter } from "next/router";
import Donor from "../../../../app/Donor/Donor";

const DonorPage = () => {
  const router = useRouter();
  const { portfolioID } = router.query;
  const closeDrawer = () => {
    router.push(`/portfolio/${portfolioID}`);
  };
  return (
    <Layout>
      <Portfolio />{" "}
      <Drawer size={"lg"} isOpen={true} placement="right" onClose={closeDrawer}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Donor />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Layout>
  );
};

export default DonorPage;
