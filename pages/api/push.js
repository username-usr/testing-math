if (!global.store) {
    global.store = {};
  }
  
  export default function handler(req, res) {
    if (req.method === 'POST') {
      const { id, result } = req.body;
      global.store[id] = result;
      res.status(200).json({ status: 'stored' });
    } else {
      res.status(405).end();
    }
  }
  