const ProjectsContent: React.FC = () => {
  const projects = [
    {
      name: "E-commerce Platform",
      description: "A full-stack online shopping platform",
      tags: ["Nextjs", "NestJs", "Postgres", "Typescript"],
    },
    {
      name: "Task Manager",
      description: "A productivity app for managing daily tasks",
      tags: ["Nodejs", "Typescript", "React"],
    },
    {
      name: "Portfolio Website",
      description: "This desktop-like portfolio website",
      tags: ["React", "Tailwind", "Typescript"],
    },
  ];

  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-500">{project.description}</p>
            {project.tags.map((tag) => (
              <p className="text-sm inline p-1 rounded-md mt-2 mr-2  bg-gray-200">
                {tag}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsContent;
