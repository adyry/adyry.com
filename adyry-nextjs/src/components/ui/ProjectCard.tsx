import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const renderLink = () => {
    if (project.url) {
      return (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-800 transition-colors duration-300 hover:text-gray-500"
        >
          {project.title}
        </a>
      );
    }
    
    return <span className="text-slate-800 transition-colors duration-300 hover:text-gray-500">{project.title}</span>;
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <p>
        {renderLink()}: {project.description}
        {project.technology.length > 0 && (
          <>
            {' '}
            <strong>{project.technology.join(', ')}</strong>
          </>
        )}
        {project.githubUrl && (
          <>
            {' '}
            <a 
              href={project.githubUrl} 
              className="text-slate-800 transition-colors duration-300 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              [GitHub]
            </a>
          </>
        )}
      </p>
    </div>
  );
}
