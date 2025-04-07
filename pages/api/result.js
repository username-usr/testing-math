if (!global.store) {
    global.store = {};
  }
  
  export default function handler(req, res) {
    const { id } = req.query;
    const result = global.store[id];
    if (result !== undefined) {
      res.status(200).json({ id, result });
    } else {
      res.status(404).json({ error: "Result not found" });
    }
  }
  