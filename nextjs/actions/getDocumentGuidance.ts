const getDocumentGuidance = ({
  documentID,
  prompt,
}: {
  documentID: string;
  prompt: string;
}) => {
  fetch(`/api/suggest-document-guidance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ documentID, prompt }),
  });
};

export default getDocumentGuidance;
