const store = {};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { id, result } = req.body;
    store[id] = result;
    return res.status(200).json({ success: true });
  }
  res.status(405).json({ error: "Method not allowed" });
}

export { store };
