export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tets-1plus1.vercel.app";
  const exampleId = "your-id";
  const exampleUrl = `${baseUrl}/result/${exampleId}`;

  return (
    <div style={{ padding: 20 }}>
      <h1>Public Result Viewer</h1>
      <p>Ask your prompt from the local frontend and visit a result like:</p>
      <a href={exampleUrl} target="_blank" rel="noopener noreferrer">
        {exampleUrl}
      </a>
    </div>
  );
}
