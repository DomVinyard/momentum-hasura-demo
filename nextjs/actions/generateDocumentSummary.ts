const generateDocumentSummary = async ({ topic }: { topic: string }) => {
  const response = await fetch(`/api/doc-summary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic }),
  });
  return await response.text();
};

export default generateDocumentSummary;
