export interface Project {
  id: string;
  title: string;
  year: number;
  category: 'Short Film' | 'Documentary' | 'TV Show' | 'Drama';
  genre?: string;
  description: string;
  fullDescription?: string;
  duration?: string;
  role?: {
    title: string;
    description: string;
  };
  process?: {
    title: string;
    description: string;
  };
  challenges?: {
    title: string;
    description: string;
  };
  learnings?: {
    title: string;
    description: string;
  };
  conclusion?: {
    title: string;
    description: string;
  };
  thumbnail: string;
  images: string[];
  videoUrl?: string;
  credits: {
    director: string;
    cinematographer?: string;
    editor?: string;
    writer?: string;
    [key: string]: string | undefined;
  };
  awards?: string[];
  technicalDetails?: {
    duration: string;
    format: string;
    resolution: string;
    [key: string]: string;
  };
}

export const projects: Project[] = [
  {
    id: 'left-unsaid',
    title: 'Left Unsaid',
    year: 2025,
    category: 'Drama',
    description: 'On the night of her farewell party, Mabel prepares to leave town, while her friend Eugene struggled with unspoken feelings. Left Unsaid captures a night of impulsive choices and emotional tension, where love, friendship, and future paths collide.',
    fullDescription: `Are some things better left unsaid? Our film is a reminder of those special moments that slip away but never really leave us. On the night of her farewell party, Mabel is getting ready to leave hometown for good in pursuit of the bigger, while Eugene, a longtime friend of hers, is on a ticking clock to tell Mabel how he really feels. With impulsive decisions and awkward actions in the way, it sure is easier said than done.

Left Unsaid is a bittersweet and sentimental reflection upon the tough choices we have all got to make. It's a contemplative piece on the idea of one's comfort zone, and the fine line between the heart and the brain. It's an encouragement that life's uncertainty can simultaneously attract and repel. How do we know what is ultimately best for us? We can't offer you an answer, but our film might just bring you some relief if you ever felt overwhelmed with that matter too.`,
    role: {
      title: 'Producer',
      description: `Left Unsaid was my first hands-on experience working as a film producer, and it became a defining step in shaping my professional identity. From day one, I was responsible for overseeing the project through all key phases — from pre-production and production to post.

As a producer, I took on multiple responsibilities including organizing shooting schedules, managing logistics and locations, coordinating communication across the team, and making sure the workflow remained smooth and efficient. I also occasionally assisted with technical aspects on set, which, while rewarding, taught me a valuable lesson about staying focused on my core leadership role.`,
    },
    process: {
      title: 'The Creative Process',
      description: `We started the project with a clear vision, and I worked closely with the team to translate that into a realistic, structured plan.

During pre-production, I focused on establishing timelines, securing resources, and ensuring everyone was aligned.

During production, I maintained oversight of the entire process, made quick decisions under pressure, and supported the team in real-time problem-solving.

In post-production, I continued to guide the project toward completion, making sure the creative direction stayed consistent, and the team stayed motivated to reach the finish line.

Throughout the journey, the project evolved — stylistically and emotionally — into something even more meaningful than we originally envisioned. Each stage revealed the power of teamwork, preparation, and creative adaptability.`,
    },
    challenges: {
      title: 'Key Challenges',
      description: `One of the main challenges was balancing my producer duties with occasional on-set technical responsibilities. While I enjoyed being involved on multiple levels, I realized that stepping too far into other roles can cause you to lose sight of the overall vision.

Time constraints and unexpected production issues also tested our ability to adapt — and taught me to stay calm, make fast decisions, and trust the team. Learning to lead with clarity while being open to change was one of the most valuable takeaways.`,
    },
    learnings: {
      title: 'What I Learned',
      description: `This project taught me more than any classroom could:

• A producer's role goes beyond logistics — it's about leadership, vision, and creating space for creative professionals to do their best work.
• Communication is everything. When the team understands the vision and feels supported, they rise to the challenge.
• Planning is essential, but so is flexibility. No matter how much you prepare, things will shift — and your ability to adapt defines the outcome.`,
    },
    conclusion: {
      title: 'Final Thoughts',
      description: `Looking back, Left Unsaid was not just a student film — it was a turning point. It confirmed my passion for producing and showed me what I'm capable of under pressure. I discovered that I thrive in environments that demand both structure and creativity, and I'm excited to continue growing in this field.

This project gave me the foundation, the insight, and the motivation to pursue producing as a career — with purpose, confidence, and a deep respect for the collaborative nature of filmmaking.`,
    },
    thumbnail: '/img/12345.JPG',
    images: [
      '/img/12345.JPG',
      '/img/IMG_1137.JPG',
      '/img/IMG_1138.JPG',
      '/img/IMG_1139.JPG',
      '/img/IMG_1142.JPG',
      '/img/IMG_1143.JPG',
      '/img/IMG_1144.JPG',
      '/img/IMG_1145.JPG',
      '/img/IMG_1146.JPG',
      '/img/Left_Unsaid_Publicity_Still_002.jpeg',
      '/img/Left_Unsaid_Publicity_Still_001.jpeg',
      '/img/Left_Unsaid_Still_008.jpeg',
      '/img/Left_Unsaid_Still_003.jpeg'
    ],
    credits: {
      director: 'Dana Syrota',
      writer: 'Dana Syrota',
      cinematographer: 'John Doe',
    },
    technicalDetails: {
      format: 'Digital',
      resolution: '4K',
      duration: '15 minutes'
    }
  },
  {
    id: 'all-of-me',
    title: 'All of Me',
    year: 2025,
    category: 'Documentary',
    description: 'A former Google software developer abandons her successful tech career to reinvent herself as a DJ, navigating the vibrant world of electronic music and personal reinvention.',
    fullDescription: `Uncoded tells the story of Anastasia Denisova, a software developer who, after seven years of a successful career at Google, made the life-changing decision to leave the world of tech to pursue her true passion for electronic music. Her story of personal transformation is both a bold testament to following one's heart and a deeply relatable exploration of the risks and rewards that come with walking away from a stable career for an uncertain dream.

The documentary follows Anastasia's journey from the polished, structured life of a Google employee to the dynamic, unpredictable world of a DJ. Along the way, the film explores the emotional challenges she faced, including the fear of failure, the financial insecurities of a creative career, and the pressures of building a personal brand in the competitive electronic dance music (EDM) scene. Through intimate interviews, energetic festival performances, and behind-the-scenes glimpses into her creative process, "Uncoded" delves into the essence of what it means to leave behind societal expectations and embrace a life of artistic freedom.`,
    role: {
      title: 'Sound Recordist',
      description: `This documentary focused on electronic music culture, with a strong emphasis on techno and underground rave scenes. As the Sound Recordist, my role was to authentically capture the unique sonic environments that define this world — from pulsating club sets to ambient street sounds and candid conversations with artists and attendees.

Recording high-quality audio in dynamic, often unpredictable environments
Capturing live techno performances and crowd ambience in real-time settings
Ensuring dialogue and interviews were clean and well-balanced despite high-volume surroundings
Coordinating closely with the director and camera crew to adapt recording techniques to each location and context`
    },
    process: {
      title: 'Creative Process',
      description: `The audio dimension of this project was crucial in reflecting the raw, immersive energy of rave culture. I worked to preserve not just the music itself, but also the atmosphere surrounding it — the reverb of warehouses, the subtle shifts in crowd energy, and the contrast between intense musical moments and quieter personal reflections.`
    },
    challenges: {
      title: 'Technical & Environmental Challenges',
      description: `Recording in high-decibel environments like underground raves required real-time monitoring, careful mic selection, and quick adjustments to avoid distortion while still capturing the emotional essence of the scene. This pushed me to refine my live sound techniques and develop a flexible, responsive approach to field recording.`
    },
    learnings: {
      title: 'What I Learned',
      description: `How to balance technical control with artistic intuition in sound recording
The importance of mobility, speed, and adaptability in fast-paced documentary settings
Deepened understanding of electronic music soundscapes and how to represent them authentically in film
This experience taught me how sound can be more than just a technical layer — it's a powerful storytelling element that transports viewers directly into the heart of a culture.`
    },
    conclusion: {
      title: 'Final Thoughts',
      description: `This project was a significant step in my career as a sound recordist. It allowed me to explore the vibrant world of electronic music and the unique challenges of recording in diverse environments. I learned how to adapt to different situations and capture the essence of a culture through sound.

This experience taught me the importance of mobility, speed, and adaptability in fast-paced documentary settings. It also deepened my understanding of electronic music soundscapes and how to represent them authentically in film.`,
    },
    thumbnail: '/img/all of me head.JPG',
    images: [
      '/img/all of me head.JPG',
      '/img/IMG_5421.JPG',
      '/img/IMG_5563.JPG',
      '/img/IMG_1830.PNG',
      '/img/IMG_18311111.PNG'
    ],
    credits: {
      director: 'Dana Syrota',
      cinematographer: 'Jane Smith'
    },
    technicalDetails: {
      format: 'Digital',
      resolution: '4K',
      duration: '45 minutes'
    }
  },
  {
    id: 'tin-kvadrata-kolo',
    title: 'TINЬ KVADRATA KOLO',
    year: 2023,
    category: 'Drama',
    description: 'The shadow of a square is a circle.',
    fullDescription: 'This short film explores the universal theme of individuality and unity — the idea that while we all have unique experiences, we are fundamentally connected by shared emotions, thoughts, and human complexity. Visually, the film reflects this paradox through contrast and harmony, and as the Set Designer, I was responsible for building environments that reinforced these layered meanings.',
    role: {
      title: 'Set Designer',
      description: 'The set design aimed to mirror the film\'s exploration of diversity and sameness. By juxtaposing contrasting elements—such as structured versus chaotic spaces, warm versus sterile color palettes, and intimate versus impersonal settings—I sought to reflect the characters\' internal conflicts and connections. Each design choice was intentional, contributing to the film\'s overarching message about the human experience.'
    },
    process: {
      title: 'Responsibilities',
      description: `• Collaborated closely with the director and cinematographer to align set designs with the film's narrative and emotional tone.
• Conceptualized and executed set designs that visually convey themes of individuality and unity.
• Sourced materials and managed the assembly of set pieces, ensuring they met both aesthetic and practical requirements.
• Adapted designs to various shooting locations, maintaining visual consistency throughout the film.`
    },
    challenges: {
      title: 'Highlights & Challenges',
      description: 'One of the most rewarding aspects of this project was the opportunity to translate abstract concepts into tangible environments. Designing sets that encapsulate complex themes required a balance of creativity and practicality. Challenges included working within budget constraints and adapting designs to different locations, which necessitated innovative problem-solving and flexibility.'
    },
    learnings: {
      title: 'What I Learned',
      description: `• The power of visual storytelling in conveying complex themes and emotions.
• The importance of collaboration across departments to achieve a cohesive aesthetic.
• Enhanced skills in resource management and adaptability in dynamic production environments.
• A deeper understanding of how set design influences audience perception and engagement.`
    },
    thumbnail: '/img/IMG_1847.PNG',
    images: [
      '/img/IMG_4699.JPG',
      '/img/IMG_1832.PNG',
      '/img/IMG_1833.PNG',
      '/img/IMG_1847.PNG'
    ],
    credits: {
      director: 'Dana Syrota',
      cinematographer: 'Alex Johnson',
    },
    technicalDetails: {
      format: 'Digital',
      resolution: '4K',
      duration: '20 minutes'
    }
  },
  {
    id: 'slay-station',
    title: 'Slay Station',
    year: 2025,
    category: 'TV Show',
    description: 'A dynamic studio TV show exploring contemporary fashion and culture.',
    fullDescription: 'Slay Station was a bold, fashion-forward studio program created as part of our college TV studio training. Designed to be sarcastic, stylish, and high-energy, the show offered light-hearted commentary on fashion and featured playful makeovers, engaging visuals, and dynamic on-set interactions. Our aim was to mix glam with humor, creating a format that was as entertaining as it was visually polished.',
    role: {
      title: 'Floor Manager',
      description: `The project followed the full cycle of studio production — from idea development to live recording. In the pre-production phase, we brainstormed concepts, built the show's structure, developed scripts, and planned the technical and visual style.

As the Floor Manager, my role became especially active once we entered the rehearsal and live recording phases. I served as the main point of communication between the Director (via headset) and the on-floor crew and presenters. I was responsible for:
-Managing set flow and cue execution
-Relaying real-time directions and updates
-Ensuring safety protocols were followed
-Keeping performers informed and on time
-Responding quickly to last-minute changes`
    },
    process: {
      title: 'Production Process',
      description: `This involved:
-Collaborative script writing
-Coordinated set and graphics design
-Rehearsal planning
-Departmental alignment through regular team meetings`
    },
    challenges: {
      title: 'Key Challenges',
      description: `Managing a live studio environment presented unique challenges:
-Coordinating multiple departments in real-time
-Maintaining clear communication despite high-energy atmosphere
-Adapting to technical issues without disrupting flow
-Keeping talent and crew focused and on schedule`
    },
    learnings: {
      title: 'Key Takeaways',
      description: `This experience enhanced my:
-Leadership and communication skills
-Ability to work under pressure
-Understanding of live TV production
-Problem-solving capabilities in real-time situations`
    },
    thumbnail: '/img/Slay Station Head.PNG',
    images: [
      '/img/Slay Station Head.PNG',
      '/img/IMG_1834.JPG',
      '/img/IMG_1835.JPG',
      '/img/IMG_1836.JPG',
      '/img/IMG_1837.JPG',
      '/img/IMG_1839.PNG',
      '/img/IMG_1841.PNG',
      '/img/IMG_1842.PNG',
      '/img/IMG_1843.PNG',
      '/img/IMG_1844.PNG',
      '/img/IMG_1845.PNG'
    ],
    credits: {
      director: 'Dana Syrota',
      cinematographer: 'Sarah Wilson'
    },
    technicalDetails: {
      format: 'Digital',
      resolution: '4K',
      duration: '30 minutes'
    }
  },
  {
    id: 'graveyard-love',
    title: 'Graveyard Love',
    year: 2023,
    category: 'Drama',
    description: 'A philosophy lecture with an ominous teacher takes a dark turn when he tries to bring his murderous teaching to life.',
    role: {
      title: '1st Assistant Director',
      description: `As the 1st Assistant Director, I was responsible for managing the overall flow of production on set, ensuring that every department was aligned with the schedule, and that each shooting day was carried out efficiently and safely. This role placed me at the center of communication between the director, crew, and cast, and required a balance of strategic planning and real-time decision-making.`
    },
    process: {
      title: 'Responsibilities',
      description: `-Created and maintained the daily shooting schedule in collaboration with the director and producer
-Led on-set operations, calling roll and managing timing for every take
-Coordinated departments to ensure camera, lighting, sound, art, and costume teams were ready for each setup
-Delivered clear cues to the crew and cast, keeping energy and focus on set
-Identified and resolved potential delays or conflicts, always working toward time-efficient solutions
-Ensured that health and safety protocols were respected on location`
    },
    challenges: {
      title: 'Workflow & Collaboration',
      description: `Pre-production involved breaking down the script into shooting blocks, calculating timings, and coordinating logistics to prepare for a smooth shoot. During production, I worked closely with the director to balance creative needs with time management, helping the team stay focused while giving the director room to work with the cast.

My position required being both firm and diplomatic — keeping things moving while maintaining a positive, focused atmosphere on set.`
    },
    learnings: {
      title: 'Key Skills & Takeaways',
      description: `-Mastered production time management and on-set logistics
-Strengthened my communication and leadership skills under pressure
-Learned to anticipate issues before they arise and adjust schedules accordingly
-Developed confidence in guiding large crews and supporting the director's vision

This project sharpened my ability to bridge creativity and structure, and affirmed my passion for working at the heart of the filmmaking process — where planning, problem-solving, and leadership all come together to make the story happen.`
    },
    thumbnail: '/img/IMG_1845.PNG',
    images: [
      '/img/IMG_1845.PNG',
      '/img/IMG_1839.PNG',
      '/img/IMG_1841.PNG',
      '/img/IMG_9015.jpg',
      '/img/IMG_8996.jpg'
    ],
    credits: {
      director: 'Dana Syrota',
      writer: 'Dana Syrota',
      cinematographer: 'Michael Brown',
    },
    technicalDetails: {
      format: 'Digital',
      resolution: '4K',
      duration: '25 minutes'
    }
  },
  {
    id: 'the-last-wish',
    title: 'The Last Wish',
    year: 2023,
    category: 'Drama',
    description: 'An emotional journey through the final moments of a life well-lived.',
    fullDescription: 'This short film marked my directorial debut, created as part of a cinematography course during my film studies. The assignment challenged us to think visually and narratively within very specific constraints:\n-Only 10 static shots\n-No camera movement',
    role: {
      title: 'Director',
      description: `Working within these limitations pushed me to focus deeply on visual storytelling, framing, and blocking. I had to think like both a director and cinematographer — carefully planning how to communicate emotion, pacing, and narrative progression through composition, lighting, and performance alone.

Despite the constraints, I approached the project with a clear creative vision and attention to detail. I worked closely with the cast and crew to ensure that each shot served the story and expressed the internal state of the characters with intention.`
    },
    process: {
      title: 'The Concept',
      description: `Limiting the film to only 10 static shots was surprisingly complex. It required:
-Precise planning during pre-production
-Intentional framing and mise-en-scène
-Strong collaboration with actors to ensure their performances carried the emotional weight of each scene
-The ability to tell a full story with clarity and rhythm, even with minimal visual variation`
    },
    challenges: {
      title: 'Challenges & Achievements',
      description: `Although it was technically demanding, this restriction ultimately made the film stronger. It allowed me to focus on the essence of each frame and truly understand the power of visual economy in storytelling.`
    },
    learnings: {
      title: 'What I Learned',
      description: `-The importance of preparation, rehearsal, and precision in directing
-How to maximize storytelling impact with minimal tools
-The value of simplicity — and how constraints can boost creativity
-How to lead a small team and maintain a clear artistic vision throughout production

Completing this project was a deeply rewarding experience. It confirmed my passion for directing and gave me a strong foundation in visual storytelling — not through complex tools, but through creative intention.`
    },
    thumbnail: '/img/IMG_1843.PNG',
    images: [
      '/img/IMG_1844.PNG',
      '/img/IMG_1843.PNG',
      '/img/IMG_1842.PNG',
      '/img/Screenshot 2025-05-16 035721.png',
      '/img/Screenshot 2025-05-16 035751.png'
    ],
    credits: {
      director: 'Dana Syrota',
      writer: 'Dana Syrota',
      cinematographer: 'Robert Wilson',
    },
    technicalDetails: {
      format: 'Digital',
      resolution: '4K',
      duration: '10 minutes'
    }
  }
]; 