import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Youtube } from 'lucide-react';
import Projects from './Projects';
import Videos from './Videos';
import About from './About';

const GridBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden bg-gray-100">
    <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200"></div>
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
        backgroundPosition: 'center center',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)'
      }}
    />
  </div>
);

const AnimatedText = ({ text }) => {
  const letters = Array.from(text);
  return (
    <div className="flex justify-center">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: [1, 0.5, 1],
            y: [0, -5, 0],
            transition: { 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.1
            }
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

const SocialIcon = ({ Icon, href, hoverColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-gray-400 transition-colors duration-200 ${hoverColor}`}
  >
    <Icon size={20} />
  </a>
);

const PageContent = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-fade-in">
      <Routes location={location}>
        <Route path="/" element={
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-2 text-gray-800">yoder</h1>
            <AnimatedText text="pursuing creation" />
          </div>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen text-gray-800 relative overflow-hidden font-sans">
        <GridBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="flex-grow flex items-center justify-center overflow-auto">
            <PageContent />
          </main>

          <footer className="mt-auto">
            <div className="flex justify-center space-x-6 mb-6">
              <SocialIcon Icon={Github} href="https://github.com/yodering" hoverColor="hover:text-purple-600" />
              <SocialIcon Icon={Linkedin} href="https://linkedin.com/in/yodering" hoverColor="hover:text-blue-600" />
              <SocialIcon Icon={Youtube} href="https://youtube.com/yodering" hoverColor="hover:text-red-600" />
            </div>

            <nav className="bg-gray-100 bg-opacity-70 backdrop-blur-sm py-3 rounded-t-3xl mx-auto shadow-lg" style={{ width: '300px' }}>
              <div className="flex justify-between px-4">
                <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">home</Link>
                <Link to="/projects" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">projects</Link>
                <Link to="/videos" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">videos</Link>
                <Link to="/about" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">about</Link>
              </div>
            </nav>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
