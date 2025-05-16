export default function About() {
  return (
    <main className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display mb-12 text-center text-theme-primary">About Me</h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-xl text-theme-text/80 leading-relaxed mb-6 font-body">
              Hey there! I'm a passionate Film and TV production student at Griffith College Dublin, 
              driven by an unwavering desire to make my mark in the film industry. My journey in 
              visual storytelling is fueled by a deep love for sound design, innovative camera work, 
              and the art of bringing stories to life through directing.
            </p>
            <p className="text-xl text-theme-text/80 leading-relaxed mb-6 font-body">
              I believe that every frame tells a story, and I'm committed to mastering the craft 
              of filmmaking in all its forms. Whether I'm behind the camera or in the editing room, 
              I'm constantly pushing boundaries and exploring new ways to create compelling narratives.
            </p>
          </section>

          {/* Passions & Interests */}
          <section className="mb-12">
            <h2 className="text-2xl font-display mb-6 text-theme-secondary">Passions & Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="theme-card">
                <h3 className="text-xl font-display mb-4 text-theme-primary">Creative Pursuits</h3>
                <ul className="space-y-3 text-theme-text/80 font-body">
                  <li>• Playing guitar and exploring musical composition</li>
                  <li>• Animal lover and advocate</li>
                  <li>• Avid reader of diverse genres</li>
                  <li>• Film analysis and criticism</li>
                </ul>
              </div>
              <div className="theme-card">
                <h3 className="text-xl font-display mb-4 text-theme-primary">Film Interests</h3>
                <ul className="space-y-3 text-theme-text/80 font-body">
                  <li>• Drama and character-driven narratives</li>
                  <li>• Documentary filmmaking</li>
                  <li>• Sound design and audio production</li>
                  <li>• Experimental cinematography</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="mb-12">
            <h2 className="text-2xl font-display mb-6 text-theme-secondary">My Vision</h2>
            <p className="text-xl text-theme-text/80 leading-relaxed font-body">
              I'm not just studying film—I'm preparing to become a professional in the industry. 
              My goal is to create works that challenge perspectives, evoke emotions, and 
              leave a lasting impact on audiences. Through dedication to my craft and 
              continuous learning, I'm building the foundation for a future where my creative 
              vision can truly make a difference in the world of cinema.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 