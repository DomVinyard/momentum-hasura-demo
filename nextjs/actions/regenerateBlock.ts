import refreshSuggestions from "./refreshSuggestions";

const regenerateBlock = async ({
  blockID,
  documentID,
  skipGenerateSuggestions,
}: {
  blockID: string;
  documentID?: string;
  skipGenerateSuggestions?: boolean;
}) => {
  await fetch("/api/regenerate-block", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ blockID }),
  });
  if (documentID && !skipGenerateSuggestions) {
    await refreshSuggestions({ documentID });
  }
};
export default regenerateBlock;
