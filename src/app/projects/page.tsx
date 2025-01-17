import Link from "next/link";

export default function Projects() {
  const projects = [
    { slug: "project-1", title: "Project 1" },
    { slug: "project-2", title: "Project 2" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Projecten & Foto's</h1>
      <ul className="mt-4">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
