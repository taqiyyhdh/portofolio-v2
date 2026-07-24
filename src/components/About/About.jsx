import { FaCss3Alt, FaDownload, FaHtml5, FaJsSquare, FaPaperPlane, FaReact } from 'react-icons/fa';
import './About.css';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>

        <div className="about-container">
          
          <div className="about-profile">
            <div className="profile-img-wrapper">
              <img 
                src="https://placehold.co/150" 
                alt="Placeholder Profil" 
                className="profile-img"
              />
            </div>
            
            <div className="skills-container">
              <h3>Tech Stack</h3>
              <ul className="skills-list">
                <li><FaHtml5 /> HTML</li>
                <li><FaCss3Alt /> CSS</li>
                <li><FaJsSquare /> JavaScript</li>
                <li><SiTailwindcss /> Tailwind</li>
                <li><FaReact /> React</li>
                <li><SiTypescript /> TypeScript</li>
              </ul>
            </div>
          </div>

          <div className="about-details">
            <p className="about-description">
              Saya seorang lulusan S1 Sistem Informasi yang fokus mendalami dunia Frontend Web Development. 
              Berawal dari membangun logika dasar menggunakan HTML, CSS, dan JavaScript, kini saya aktif mengembangkan aplikasi berbasis React dan TypeScript menggunakan ekosistem Vite. 
              Fokus saya adalah membangun antarmuka web modern yang responsif, berkinerja tinggi, dan memberikan pengalaman pengguna yang optimal.
            </p>

            <div className="about-cta">
              <a href="#" className="btn-cv" download>
                <FaDownload /> Download CV
              </a>
              <a href="#contact" className="btn-contact">
                <FaPaperPlane /> Hire Me
              </a>
            </div>
          </div>

        </div>
      </section>
    );
  };

export default About;