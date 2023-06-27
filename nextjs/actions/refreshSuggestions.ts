const refreshSuggestions = async ({ documentID }: any) => {
  if (!documentID) return console.log("no documentID");
  await fetch("/api/suggestions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ documentID }),
  });
};

export default refreshSuggestions;
