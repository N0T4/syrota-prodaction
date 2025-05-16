import { notFound } from 'next/navigation';
import Image from 'next/image';

const experiences = {
  'production-assistant': {
    title: 'Production Assistant',
    company: 'Hedgehogs vs Foxes',
    period: 'January 2025 – March 2025',
    image: '/img/heads.jpg',
    description: 'As an intern at Hedgehogs vs Foxes, I worked across both office-based and on-set production environments, supporting the team in the creation of commercial and branded content. This hands-on industry experience gave me valuable insight into how professional production companies operate from pitch to post.',
    responsibilities: {
      office: [
        'Assisting with scheduling, call sheets, and shoot logistics',
        'Supporting production managers in crew and location bookings',
        'Managing internal documents, databases, and release forms',
        'Handling general office tasks, ensuring day-to-day operations flowed efficiently',
        'Occasionally contributing to creative brainstorm sessions or concept research'
      ],
      onSet: [
        'Setting up and maintaining equipment and production space',
        'Managing talent and crew needs throughout the day',
        'Assisting with props, wardrobe, and continuity tracking',
        'Supporting departments like camera, lighting, or art as needed',
        'Helping to ensure the shoot stayed on schedule and within safety protocols'
      ]
    },
    skills: [
      'Production Workflow',
      'Multitasking',
      'Team Coordination',
      'Problem Solving',
      'Professional Communication'
    ]
  },
  'background-casting': {
    title: 'Background & Casting Work',
    company: 'Celtic Casting',
    role: 'Background Artist / Supporting Talent',
    period: '2024',
    logo: '/img/cropped-Celtic-Casting-Logo-1.png',
    description: 'In 2024, I was actively involved with Celtic Casting, one of Ireland\'s leading casting agencies for film and television. Through this collaboration, I had the opportunity to work on high-profile international productions and gain valuable on-set experience as part of professional, large-scale crews.',
    projects: [
      {
        name: 'Wednesday – Season 2 (Netflix)',
        details: 'Worked as a background performer on the second season of the globally popular series Wednesday, filmed in Ireland. This role provided first-hand insight into high-end TV production environments and gave me the chance to observe and learn from experienced directors, cast, and crew on a major international set.'
      },
      {
        name: 'Power Ballad (Feature Film)',
        details: 'Participated in on-location shooting for Power Ballad, contributing to key atmospheric scenes. The production involved stylized visual language and choreographed sequences, which allowed me to observe creative processes in both narrative and aesthetic direction.'
      }
    ],
    takeaways: [
      'Gained experience on professional sets with complex logistics and fast-paced coordination',
      'Learned on-set etiquette, discipline, and communication',
      'Observed the interplay between departments such as camera, costume, AD teams, and continuity in real time',
      'Deepened my appreciation for detail, timing, and team coordination in screen performance environments'
    ]
  }
};

export default function ExperienceDetail({ params }: { params: { id: string } }) {
  const experience = experiences[params.id as keyof typeof experiences];

  if (!experience) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="theme-card">
            <div className="space-y-6">
              {/* Header */}
              <div>
                {'logo' in experience && experience.logo && (
                  <div className="mb-8 flex justify-center">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={300}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                )}
                {'image' in experience && experience.image && (
                  <div className="mb-8 flex justify-center">
                    <Image
                      src={experience.image}
                      alt={`${experience.title} at ${experience.company}`}
                      width={100
                      }
                      height={100}
                      className="object-cover rounded-lg"
                    />
                  </div>
                )}
                <h1 className="text-4xl md:text-5xl font-display mb-4 text-theme-primary">{experience.title}</h1>
                <p className="text-theme-text/80 mb-1 font-body text-xl">{experience.company}</p>
                {'role' in experience && (
                  <p className="text-theme-text/80 mb-1 font-body">{experience.role}</p>
                )}
                <p className="text-theme-text/60 font-body">{experience.period}</p>
              </div>

              {/* Description */}
              <div>
                <p className="text-theme-text/80 leading-relaxed font-body">
                  {experience.description}
                </p>
              </div>

              {/* Responsibilities */}
              {'responsibilities' in experience && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-display text-theme-secondary mb-4">Office-Based Responsibilities:</h2>
                    <ul className="list-disc pl-5 space-y-2 text-theme-text/80 font-body">
                      {experience.responsibilities.office.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-2xl font-display text-theme-secondary mb-4">On-Set Experience:</h2>
                    <ul className="list-disc pl-5 space-y-2 text-theme-text/80 font-body">
                      {experience.responsibilities.onSet.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Projects */}
              {'projects' in experience && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-display text-theme-secondary mb-4">Projects I Participated In:</h2>
                  {experience.projects.map((project, i) => (
                    <div key={i} className="space-y-2">
                      <h3 className="text-xl font-display text-theme-primary">{project.name}</h3>
                      <p className="text-theme-text/80 font-body">{project.details}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Takeaways */}
              {'takeaways' in experience && (
                <div>
                  <h2 className="text-2xl font-display text-theme-secondary mb-4">Key Takeaways:</h2>
                  <ul className="list-disc pl-5 space-y-2 text-theme-text/80 font-body">
                    {experience.takeaways.map((takeaway, i) => (
                      <li key={i}>{takeaway}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {'skills' in experience && (
                <div>
                  <h2 className="text-2xl font-display text-theme-secondary mb-4">Key Skills:</h2>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-theme-primary/10 text-sm text-theme-primary rounded-full font-body"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 