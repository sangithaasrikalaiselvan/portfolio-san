import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
              SANGITHAA SRI
            </span>
          </h1>

          <div className="relative">
            <p className="text-2xl md:text-3xl font-light tracking-[0.3em] text-slate-300 uppercase">
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
                className="text-slate-300 hover:text-cyan-400 transition-all duration-300 font-medium tracking-wide hover:scale-110 inline-block"
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
                className="text-slate-300 hover:text-cyan-400 transition-all duration-300 font-medium tracking-wide hover:scale-110 inline-block"
              >
                Credentials
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
                className="text-slate-300 hover:text-cyan-400 transition-all duration-300 font-medium tracking-wide hover:scale-110 inline-block"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="pt-12">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
