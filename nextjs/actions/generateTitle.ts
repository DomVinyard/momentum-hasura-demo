const generateTitle = async (prompt: string) => {
  const res = await fetch("/api/title", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  return res.text();
};

export default generateTitle;
