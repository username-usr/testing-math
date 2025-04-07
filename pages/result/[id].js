import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ResultPage() {
  const router = useRouter();
  const { id } = router.query;
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/get-result?id=${id}`)
      .then((res) => res.json())
      .then((data) => setResult(data.result));
  }, [id]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Result Viewer</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Result:</strong> {result ?? 'Loading...'}</p>
    </div>
  );
}
