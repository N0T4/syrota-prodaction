import Link from 'next/link';
import Image from 'next/image';

type BaseExperience = {
  id: string;
  title: string;
  company: string;
  period: string;
};

type ExperienceWithLogo = BaseExperience & {
  logo?: string;
  image?: string;
};

type Experience = BaseExperience | ExperienceWithLogo;

export default function Experience() {
  const experiences: Experience[] = [
    {
      id: 'production-assistant',
      title: 'Production Assistant',
      company: 'Hedgehogs vs Foxes',
      period: 'January 2025 – March 2025',
      image: '/img/heads.jpg'
    },
    {
      id: 'background-casting',
      title: 'Background & Casting Work',
      company: 'Celtic Casting',
      period: '2024',
      logo: '/img/cropped-Celtic-Casting-Logo-1.png'
    }
  ];

  return (
    <main className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display mb-12 text-center text-theme-primary">Industry Experience</h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp) => (
              <Link 
                key={exp.id}
                href={`/experience/${exp.id}`}
                className="block theme-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="space-y-4">
                  {'logo' in exp && exp.logo && (
                    <div className="flex justify-center mb-2">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={200}
                        height={70}
                        className="object-contain"
                      />
                    </div>
                  )}
                  {'image' in exp && exp.image && (
                    <div className="flex justify-center mb-4">
                      <Image
                        src={exp.image}
                        alt={`${exp.title} at ${exp.company}`}
                        width={75}
                        height={70}
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display text-theme-primary">{exp.title}</h3>
                    <p className="text-theme-text/80 font-body">{exp.company}</p>
                    <p className="text-sm text-theme-text/60 font-body">{exp.period}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 