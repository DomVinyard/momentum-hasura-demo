import { useRouter } from "next/router";
import Unassigned from "./components/Unassigned";
import SpecificPortfolio from "./components/SpecificPortfolio";

export default function Portfolio() {
  const router = useRouter();
  const { portfolioID } = router.query;
  const showUnassigned = portfolioID === "unassigned";

  if (showUnassigned) {
    return <Unassigned />;
  }
  return <SpecificPortfolio />;
}
