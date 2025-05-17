import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../../types/project';
import ImageCarousel from '../../../components/ImageCarousel';

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-theme-primary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/portfolio" 
            className="inline-block px-6 py-2 mb-8 text-theme-primary border border-theme-primary/20 rounded hover:bg-theme-primary/5 transition-colors font-body"
          >
            ← Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-6xl mb-4 font-display text-theme-primary text-center">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 justify-center text-theme-text/60 font-body">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.category}</span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">


      
            
            {/* Project Metadata */}
            <div className="flex flex-wrap gap-4 mb-8 text-theme-text/80">
              {project.year && <span>{project.year}</span>}
              <div className="flex items-center gap-2 text-theme-text/60 font-body">
                {project.category && <span>{project.category}</span>}
                {project.genre && <span>• {project.genre}</span>}
                {project.technicalDetails?.duration && <span>• {project.technicalDetails.duration}</span>}
              </div>
            </div>

            {/* Short Description */}
            <p className="text-xl mb-12 text-theme-text/90">{project.description}</p>

            {/* YouTube Video */}
            {!['left-unsaid', 'slay-station'].includes(project.id) && (
              <div className="relative mb-12 aspect-video">
                <iframe 
                  width="560" 
                  height="315" 
                  src={
                    project.id === 'tin-kvadrata-kolo' 
                      ? "https://www.youtube.com/embed/4UjjGepORKg?si=1ET0vBj3_-namEcK"
                      : project.id === 'graveyard-love'
                        ? "https://www.youtube.com/embed/aeRs7AXTSrU?si=Dx_yjMeKNJ31i-yD"
                        : project.id === 'the-last-wish'
                          ? "https://www.youtube.com/embed/MeoFAUg2Fkc?si=yUdfcK5XGVl3DJAE"
                          : "https://www.youtube.com/embed/2JGI1fxbyV0?si=N1_SiYv2dWmefdWp"
                  }
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-lg shadow-md"
                />
              </div>
            )}

            {/* Full Description */}
            {project.fullDescription && (
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-4 text-theme-primary">About the Project</h2>
                <div className="prose prose-sage max-w-none">
                  {project.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-theme-text/80">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Role Information */}
            {project.role && (
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-4 text-theme-primary">{project.role.title}</h2>
                <div className="prose prose-sage max-w-none">
                  {project.role.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-theme-text/80">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Creative Process */}
            {project.process && (
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-4 text-theme-primary">{project.process.title}</h2>
                <div className="prose prose-sage max-w-none">
                  {project.process.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-theme-text/80">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-4 text-theme-primary">{project.challenges.title}</h2>
                <div className="prose prose-sage max-w-none">
                  {project.challenges.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-theme-text/80">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Learnings */}
            {project.learnings && (
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-4 text-theme-primary">{project.learnings.title}</h2>
                <div className="prose prose-sage max-w-none">
                  {project.learnings.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-theme-text/80">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Conclusion */}
            {project.conclusion && (
              <div className="mb-12">
                <h2 className="text-2xl font-display mb-4 text-theme-primary">{project.conclusion.title}</h2>
                <div className="prose prose-sage max-w-none">
                  {project.conclusion.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-theme-text/80">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
                        {/* Project Gallery */}
                        <div className="mb-12">
              <ImageCarousel images={project.images} title={project.title} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 