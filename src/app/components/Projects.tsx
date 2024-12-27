const projects = [
    {
      title: 'Portfolio Website',
      description: 'A creative developer portfolio built with Next.js and Tailwind.',
      techStack: 'Next.js, Tailwind CSS',
    },
    // Add more projects
  ];
  
  const Projects = () => (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-md hover:scale-105 transition-all"
          >
            <h3 className="text-white text-xl">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <p className="text-sm text-gray-500">{project.techStack}</p>
          </div>
        ))}
      </div>
    </div>
  );
export default Projects;