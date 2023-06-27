const getBlockGuidance = ({ blockID }: { blockID: string }) => {
  fetch(`/api/suggest-guidance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ blockID }),
  });
};

export default getBlockGuidance;
