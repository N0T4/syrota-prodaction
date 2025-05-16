import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <div className={`theme-card h-[800px] flex flex-col ${featured ? 'border-theme-primary/20' : ''}`}>
      <div className="relative h-[450px] mb-4">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-contain rounded transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col flex-grow space-y-4">
        <div>
          <h3 className={`text-xl font-display mb-1 ${featured ? 'text-theme-primary' : 'text-theme-secondary'}`}>
            {project.title}
          </h3>
          <div className="flex gap-2 text-sm text-theme-text/60">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.category}</span>
            {project.genre && (
              <>
                <span>•</span>
                <span>{project.genre}</span>
              </>
            )}
          </div>
        </div>
        
        <p className="text-theme-text/80 line-clamp-2 flex-grow">
          {project.description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <div className="text-sm text-theme-text/60">
            {project.technicalDetails?.duration}
          </div>
          <Link href={`/portfolio/${project.id}`}>
            <button className={`theme-button ${!featured && 'bg-theme-secondary hover:bg-theme-primary'}`}>
              View Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}; 