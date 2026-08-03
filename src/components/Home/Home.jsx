import { motion } from 'framer-motion';
import { FaCode, FaGithub } from 'react-icons/fa';
import './Home.css';

const containerVariants = {
  hidden: {opaacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25},
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut'}
  }
};

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <motion.div
         className="home-content"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
        >
            <motion.h1 variants={itemVariants}>
              Taqiyyah Adha
            </motion.h1>

            <motion.h3 variants={itemVariants}>
              Aspiring Web Developer | Frontend Enthusiast
            </motion.h3>
            
            <motion.ul className="home-buttons" variants={itemVariants}>
              <li>
                <a href="#portfolio" className="btn-primary btn-project">
                  <FaCode /> Project
                </a>
              </li>
              <li>
                <a href="https://github.com/taqiyyhdh" target="_blank" rel="noreferrer" className="btn-secondary btn-github">
                  <FaGithub /> Github
                </a>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </section>
    );
};

export default Home;