 import { store } from "./push";

export default function handler(req, res) {
  const { id } = req.query;

  if (store[id]) {
    res.status(200).json({ result: store[id] });
  } else {
    res.status(404).json({ error: "Result not found" });
  }
}
