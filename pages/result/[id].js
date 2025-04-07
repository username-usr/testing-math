import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ResultPage() {
  const router = useRouter();
  const { id } = router.query;

  const [result, setResult] = useState("Loading...");

  useEffect(() => {
    if (id) {
      fetch(`/api/result?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.result !== undefined) {
            setResult(data.result);
          } else {
            setResult("Result not found.");
          }
        })
        .catch(() => setResult("Error loading result."));
    }
  }, [id]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Result Viewer</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Result:</strong> {result}</p>
    </div>
  );
}
