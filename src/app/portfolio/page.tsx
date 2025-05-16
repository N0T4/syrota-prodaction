import { projects } from '../../types/project';
import { ProjectCard } from '../../components/ProjectCard';

export default function PortfolioPage() {
  // Sort projects by year (newest first)
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);
  
  // Get featured projects (newest 3)
  const featuredProjects = sortedProjects.slice(0, 3);
  const otherProjects = sortedProjects.slice(3);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-theme-primary/5" />
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl text-center mb-6 font-display text-theme-primary">
            Portfolio
          </h1>
          <p className="text-theme-text/80 text-center max-w-2xl mx-auto text-lg font-body">
            Explore a collection of cinematic works that push boundaries and tell compelling stories through the lens of innovation.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl mb-12 text-center font-display text-theme-primary">
            Featured Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-theme-accent/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl mb-12 text-center font-display text-theme-primary">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 