"use client";
import { useDisclosure } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DonorInfo from "../../../components/ContactInfo/ContactInfo";
import DraftModal from "../../../components/DraftModal";
import users from "../../../mock_data/users";
import RootLayout from "../../layout";

export default function DonorPanel() {
  const pathname = usePathname();
  const selectedDonor = pathname.split("/").slice(-1)[0];
  const donor = users.find((u) => u.id === selectedDonor);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [options, setOptions] = useState([]);
  const [generatingOptions, setGeneratingOptions] = useState(false);
  return (
    <RootLayout>
      <DonorInfo
        donor={donor}
        openDraftModal={onOpen}
        setOptions={setOptions}
        setGeneratingOptions={setGeneratingOptions}
      />
      <DraftModal
        donor={donor}
        isOpen={isOpen}
        onClose={onClose}
        options={options}
        generatingOptions={generatingOptions}
      />
    </RootLayout>
  );
}
