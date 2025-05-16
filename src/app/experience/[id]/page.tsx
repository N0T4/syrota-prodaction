import { notFound } from 'next/navigation';
import Image from 'next/image';

const experiences = {
  'production-assistant': {
    title: 'Production Assistant',
    company: 'Various Productions',
    period: '2023',
    image: '/img/production-assistant.jpg',
    description: 'Worked as a Production Assistant on multiple film and TV productions, gaining hands-on experience in both office and on-set environments.',
    responsibilities: {
      office: [
        'Assisted with script distribution and revisions',
        'Managed daily production paperwork',
        'Coordinated with various departments',
        'Helped with scheduling and logistics'
      ],
      onSet: [
        'Supported Assistant Directors',
        'Managed crowd control and set safety',
        'Facilitated communication between departments',
        'Assisted with equipment handling and transport'
      ]
    },
    skills: [
      'Set Protocol',
      'Production Coordination',
      'Team Communication',
      'Problem Solving',
      'Time Management'
    ]
  },
  'background-casting': {
    title: 'Background Casting Assistant',
    company: 'MovieExtras.ie',
    period: '2023',
    image: '/img/casting.jpg',
    description: 'Assisted in the casting process for background actors in various film and television productions.',
    responsibilities: {
      office: [
        'Managed talent database',
        'Coordinated casting calls',
        'Processed applications',
        'Handled talent communications'
      ],
      onSet: [
        'Supervised background actors',
        'Coordinated with production teams',
        'Managed paperwork and contracts',
        'Ensured scheduling compliance'
      ]
    },
    skills: [
      'Talent Management',
      'Database Administration',
      'Communication',
      'Organization',
      'Attention to Detail'
    ]
  }
};

// Generate static params for all experiences
export function generateStaticParams() {
  return Object.keys(experiences).map((id) => ({
    id,
  }));
}

export default function ExperiencePage({ params }: { params: { id: string } }) {
  const experience = experiences[params.id as keyof typeof experiences];

  if (!experience) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="mb-12">
            <a
              href="/experience"
              className="inline-block px-6 py-2 text-theme-primary border border-theme-primary/20 rounded hover:bg-theme-primary/5 transition-colors font-body"
            >
              ← Back to Experience
            </a>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display text-theme-primary mb-4">
              {experience.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-theme-text/60 font-body">
              <span>{experience.company}</span>
              <span>•</span>
              <span>{experience.period}</span>
            </div>
          </header>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-theme-text/80">{experience.description}</p>
          </div>

          {/* Responsibilities */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Office Responsibilities */}
            <div>
              <h2 className="text-2xl font-display text-theme-primary mb-4">Office Responsibilities</h2>
              <ul className="space-y-2">
                {experience.responsibilities.office.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-theme-primary mr-2">•</span>
                    <span className="text-theme-text/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* On-Set Responsibilities */}
            <div>
              <h2 className="text-2xl font-display text-theme-primary mb-4">On-Set Responsibilities</h2>
              <ul className="space-y-2">
                {experience.responsibilities.onSet.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-theme-primary mr-2">•</span>
                    <span className="text-theme-text/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-display text-theme-primary mb-4">Key Skills</h2>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-theme-primary/10 text-theme-primary rounded-full text-sm font-body"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 