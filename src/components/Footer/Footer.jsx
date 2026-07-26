import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  // Efek memantau scroll layar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-info">
          <p>&copy; {getCurrentYear()} Taqiyyah Adha. All rights reserved.</p>
        </div>

        <div className="footer-socials-horizontal">
          <a href="https://github.com/taqiyyhdh" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/taqiyyahadha" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:taqiyyhdh@gmail.com" aria-label="Email">
            <FaEnvelope /> Email
          </a>
        </div>

        {showScrollTop && (
          <button 
            className="scroll-top-btn" 
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        )}

      </div>
    </footer>
  );
};

export default Footer;