export default function ProjectDetails({ params }) {
  const { slug } = params;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Details for {slug}</h1>
      <p>More information about the project...</p>
    </div>
  );
}
