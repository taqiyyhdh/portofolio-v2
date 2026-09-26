import {motion} from 'framer-motion';
import { FaCss3Alt, FaDownload, FaHtml5, FaJsSquare, FaPaperPlane, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import './About.css';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Tiap ikon muncul dengan jeda 0.1 detik
      delayChildren: 0.2
    }
  }
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.h2 
        className="about-title"
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        About Me</motion.h2>

        <div className="about-container">
          
          <motion.div 
            className="about-profile"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="profile-img-wrapper">
              <img 
                src="profile.jpeg" 
                alt="Placeholder Profil" 
                className="profile-img"
              />
            </div>
            
            <div className="skills-container">
              <h3>Tech Stack</h3>
              <motion.ul 
                className="skills-list"
                variants={skillsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <motion.li variants={skillItemVariants}><FaHtml5 /> HTML</motion.li>
                <motion.li variants={skillItemVariants}><FaCss3Alt /> CSS</motion.li>
                <motion.li variants={skillItemVariants}><FaJsSquare /> JavaScript</motion.li>
                <motion.li variants={skillItemVariants}><SiTailwindcss /> Tailwind</motion.li>
                <motion.li variants={skillItemVariants}><FaReact /> React</motion.li>
                <motion.li variants={skillItemVariants}><SiTypescript /> TypeScript</motion.li>
              </motion.ul>
            </div>
          </motion.div>

          <motion.div
            className="about-details"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
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
          </motion.div>

        </div>
      </section>
    );
  };

export default About;