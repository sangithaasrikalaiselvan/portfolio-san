import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const words = ['AI Engineer', 'Data Analyst', 'Developer', 'WEB DEVELOPMENT'];
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  // Cycle the top-right rotating words when on the home section
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const interval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setWordVisible(true);
      }, 300);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/blue space.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="text-center space-y-8 max-w-4xl z-10">
        {activeSection === 'home' && (
          <div className="absolute top-6 right-6 z-30">
            <div
              className={`text-base md:text-lg lg:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 inline-block transform transition-all duration-300 ease-in-out ${
                wordVisible ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-2'
              } animate-float-sm`}
            >
              {words[wordIndex]}
            </div>
          </div>
        )}

        
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(45,212,191,0.35)] inline-block animate-float">
              SANGITHAA SRI
            </span>
          </h1>

          <div className="relative">
            <p className="text-2xl md:text-3xl font-light tracking-[0.3em] text-slate-300 uppercase inline-block animate-float">
              AI Engineer
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400"></div>
          </div>
        </div>

        <nav className="pt-8">
          <ul className="flex items-center justify-center gap-2 text-lg md:text-xl">
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('projects');
                }}
                className="text-white hover:text-cyan-400 transition-all duration-300 font-medium tracking-wide hover:scale-110 inline-block"
              >
                Projects
              </a>
            </li>

            <li className="text-slate-600 mx-2">|</li>

            <li>
              <a
                href="#credentials"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('credentials');
                }}
                className="text-white hover:text-cyan-400 transition-all duration-300 font-medium tracking-wide hover:scale-110 inline-block"
              >
                Credentials
              </a>
            </li>

            <li className="text-slate-600 mx-2">|</li>

            <li>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('skills');
                }}
                className="text-white hover:text-cyan-400 transition-all duration-300 font-medium tracking-wide hover:scale-110 inline-block"
              >
                Skills
              </a>
            </li>

            <li className="text-slate-600 mx-2">|</li>

            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('about');
                }}
                className="text-white hover:text-cyan-400 transition-all duration-300 font-medium tracking-wide hover:scale-110 inline-block"
              >
                About
              </a>
            </li>

            <li className="text-slate-600 mx-2">|</li>

            <li>
              <a
                href="#internships"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('internships');
                }}
                className="text-white hover:text-cyan-400 transition-all duration-300 font-medium tracking-wide hover:scale-110 inline-block"
              >
                Internships
              </a>
            </li>

            <li className="text-slate-600 mx-2">|</li>

            <li>
              <a
                href="#hackathons"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('hackathons');
                }}
                className="text-white hover:text-cyan-400 transition-all duration-300 font-medium tracking-wide hover:scale-110 inline-block"
              >
                Hackathons
              </a>
            </li>

            <li className="text-slate-600 mx-2">|</li>

            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('contact');
                }}
                className="text-white hover:text-cyan-400 transition-all duration-300 font-medium tracking-wide hover:scale-110 inline-block"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {activeSection === 'projects' && (
          <section id="projects" className="mt-10 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-white">PROJECTS</h2>

            <div className="mt-6 grid gap-4">
              <button
                onClick={() => setSelectedProject('copbot')}
                className="text-left p-4 bg-white/5 hover:bg-white/10 rounded-md transition"
              >
                <h3 className="text-xl font-bold text-white">COP-BOT CHAT BOT</h3>
                <p className="mt-2 text-slate-300 text-sm">Click to view details</p>
              </button>

              <button
                onClick={() => setSelectedProject('realtime')}
                className="text-left p-4 bg-white/5 hover:bg-white/10 rounded-md transition"
              >
                <h3 className="text-xl font-bold text-white">REAL TIME CPU MONITORING</h3>
                <p className="mt-2 text-slate-300 text-sm">Click to view details</p>
              </button>

              <button
                onClick={() => setSelectedProject('stock')}
                className="text-left p-4 bg-white/5 hover:bg-white/10 rounded-md transition"
              >
                <h3 className="text-xl font-bold text-white">STOCK PRICE PREDICTOR</h3>
                <p className="mt-2 text-slate-300 text-sm">Click to view details</p>
              </button>
            </div>

            {selectedProject === 'copbot' && (
              <div className="mt-6 p-6 bg-white/5 rounded-md">
                <h4 className="text-lg font-semibold text-white">COP-BOT CHAT BOT</h4>
                <div className="mt-3 text-slate-300 space-y-2">
                  <p>
                    Developed CopBotChatbot, an AI-powered chatbot designed to assist citizens with
                    police-related queries. Integrated structured legal data and multilingual support
                    to provide accurate, real-time responses. Enabled offline functionality for
                    deployment in police stations and public offices.
                  </p>

                  <p>
                    Empowers citizens with instant access to legal guidance, emergency contacts, and
                    complaint procedures—enhancing transparency, awareness, and trust in law
                    enforcement. Utilized Python, Node.js, and React.js to build a secure,
                    user-friendly, and scalable interface.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-3 py-1 bg-cyan-500 text-black rounded-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {selectedProject === 'realtime' && (
              <div className="mt-6 p-6 bg-white/5 rounded-md">
                <h4 className="text-lg font-semibold text-white">REAL TIME CPU MONITORING</h4>
                <div className="mt-3 text-slate-300 space-y-2">
                  <p>
                    I have worked with real-time data of my PC using Python. I have created a
                    real-time working dashboard which displays the current temperature of my CPU and
                    flags warnings if the temperature exceeds the limit (as we specify).
                  </p>

                  <p>
                    I took my real-time CPU data using an external resource which reads CPU data and
                    writes these data to a JSON file served over a local port acting as an API. The
                    dashboard consumes this API and visualizes the data using charts with an
                    auto-scale feature that rescales the graph every interval (2 seconds).
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-3 py-1 bg-cyan-500 text-black rounded-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {selectedProject === 'stock' && (
              <div className="mt-6 p-6 bg-white/5 rounded-md">
                <h4 className="text-lg font-semibold text-white">STOCK PRICE PREDICTOR</h4>
                <div className="mt-3 text-slate-300 space-y-2">
                  <p>
                    Designed and implemented a stock price predictor that analyzes large-scale
                    financial data using Big Data technologies and Python to forecast future stock
                    trends, supported by data visualizations.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-3 py-1 bg-cyan-500 text-black rounded-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        {activeSection === 'skills' && (
          <section id="skills" className="mt-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-white inline-block animate-float">Skills</h2>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-white/5 text-slate-200 rounded-full inline-block animate-float-sm">Python</span>
              <span className="px-3 py-1 bg-white/5 text-slate-200 rounded-full inline-block animate-float-sm">SQL</span>
              <span className="px-3 py-1 bg-white/5 text-slate-200 rounded-full inline-block animate-float-sm">Java</span>
              <span className="px-3 py-1 bg-white/5 text-slate-200 rounded-full inline-block animate-float-sm">C</span>
              <span className="px-3 py-1 bg-white/5 text-slate-200 rounded-full inline-block animate-float-sm">C++</span>
              <span className="px-3 py-1 bg-white/5 text-slate-200 rounded-full inline-block animate-float-sm">Git &amp; GitHub</span>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section id="about" className="mt-10 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-white inline-block animate-float">About</h2>
            <p className="mt-4 text-slate-300">
              Innovative developer with hands-on experience in AI, machine learning, and smart
              systems. Built projects such as real-time monitoring systems, a stock price predictor, and an
              AI-powered Cop-Bot chatbot. Skilled in Big Data analytics, Python, Git &amp; GitHub,
              React.js, and full-stack web development. Experienced in model training and
              evaluation, with a strong grasp of supervised learning and predictive analytics.
              Committed to building impactful tech solutions that enhance urban living and public
              services.
            </p>
          </section>
        )}

        {activeSection === 'credentials' && (
          <section id="credentials" className="mt-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-white inline-block animate-float">Credentials</h2>

            <div className="mt-6 space-y-4 text-slate-300">
              <div className="block animate-float-sm">NPTEL | Design Thinking A Primer | Jul-Aug 2024</div>

              <div className="block animate-float-sm">NPTEL | Python for Data Science | Jan-Feb 2025</div>

              <div className="block animate-float-sm">NPTEL | Cloud Computing | Jul-Oct 2025</div>

              <div className="block animate-float-sm">Oracle | Cloud Infrastructure 2025 Certified Generative AI Professional</div>

              <div className="block animate-float-sm">Introduction to MongoDB | March 2025</div>

              <div className="block animate-float-sm">Accenture | Data Analytics and visualization Job Simulation | Dec 2024</div>
            </div>
          </section>
        )}

        {activeSection === 'internships' && (
          <section id="internships" className="mt-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-white inline-block animate-float">Internships</h2>

            <div className="mt-6 text-slate-300 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Machine Learning Intern</h3>
                <p className="text-sm">CORIZO - Wipro certified | Feb 2024 - Apr 2024</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">Project Developer Intern</h3>
                <p className="text-sm">CED ANNA UNIVERSITY, CHENNAI | May 2025 - Jun 2025</p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'hackathons' && (
          <section id="hackathons" className="mt-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-white inline-block animate-float">Hackathons</h2>

            <div className="mt-6 text-slate-300 max-w-prose mx-auto space-y-4">
              <div className="text-sm tracking-widest uppercase font-medium animate-float-sm mb-4">W E B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A P P L I C A T I O N</div>

              <div className="font-semibold animate-float-sm">D E V E L O P M E N T | 13 &amp; 14 Oct 2025</div>

              <div className="animate-float-sm">
                CodeCraft’25 – 24-Hour Hackathon (Top 11 / 100 Participants, Special Recognition for
                Best Novelty)
              </div>

              <div className="animate-float-sm">
                Built a web + mobile fitness monitoring system prototype featuring real-time
                trainer–trainee tracking, gamified progress models, AI-based verification of workout
                inputs, and personalized analytics.
              </div>

              <div className="animate-float-sm">
                Contributed to the design and development of role-based UI/UX dashboards,
                authentication flows, progress tracking, and notification systems while ensuring a
                unique, non-template design approach.
              </div>

              <div className="animate-float-sm">
                Strengthened Git/GitHub collaboration skills, including repository setup, cloning,
                branching, committing, pushing updates, and syncing changes across team workflows.
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section id="contact" className="mt-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white">Contact me through</h2>

            <div className="mt-6 flex items-center justify-center gap-8 text-slate-300">
              <a
                href="mailto:sangithaasrik7@gmail.com"
                aria-label="Compose email to sangithaasrik7 at gmail"
                className="text-cyan-300 hover:underline inline-block animate-float-sm"
              >
                G mail
              </a>

              <a
                href="https://www.linkedin.com/in/sangithaa-sri-k-6b53562ab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile in a new tab"
                className="text-cyan-300 hover:underline inline-block animate-float-sm"
              >
                Linkedin
              </a>
            </div>
          </section>
        )}

        <div className="pt-12">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
