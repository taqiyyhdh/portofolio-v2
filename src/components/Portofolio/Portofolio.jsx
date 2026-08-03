import './Portofolio.css';
import qyufeeImg from '../../assets/qyufee-preview.png';
import geometryImg from '../../assets/geometry-preview.png';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};


const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const fadeInRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const tagsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const tagItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 }
  }
};

const Portofolio = () => {
  const projects = [
    {
      id: 1,
      title: "Qyuféé - Point of Sales App",
      description: "Aplikasi kasir (POS) modern dengan implementasi cart logic untuk manajemen keranjang belanja dan penanganan pesanan secara real-time. Menggunakan arsitektur layout Master-Detail yang responsif untuk mengoptimalkan pengalaman pengguna di berbagai ukuran layar perangkat.",
      image: qyufeeImg,
      tags: ["React", "TypeScript", "Vite", "CSS Modern"],
      githubLink: "https://github.com/taqiyyhdh/qyufee",
      demoLink: "https://qyufee.vercel.app/"
    },
    {
      id: 2,
      title: "Geometry Calculator",
      description: "Aplikasi kalkulator berbasis web yang dirancang khusus untuk membantu penghitungan keliling dan luas berbagai macam bangun datar secara instan. Berfokus pada akurasi logika matematika, manipulasi DOM yang bersih, serta tampilan interface yang elegan.",
      image: geometryImg,
      tags: ["HTML", "CSS", "JavaScript (ES6)"],
      githubLink: "https://github.com/taqiyyhdh/kalkulator-geometri",
      demoLink: "https://taqiyyhdh.github.io/kalkulator-geometri/"
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        
        <motion.h2 
          className="section-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          My Project
        </motion.h2>
        
        <div className="projects-list-zigzag">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div 
                className={`project-row ${isEven ? 'row-reverse' : ''}`} 
                key={project.id}
              >
                <span className="project-number">0{index + 1}.</span>
                
                <motion.div 
                  className="project-image-side"
                  variants={isEven ? fadeInRightVariants : fadeInLeftVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="image-wrapper">
                    <img 
                      src={project.image} 
                      alt={`${project.title} Preview`} 
                      className="project-img"
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="project-text-side"
                  variants={isEven ? fadeInLeftVariants : fadeInRightVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <motion.div 
                    className="project-tags"
                    variants={tagsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex} 
                        className="tag-badge"
                        variants={tagItemVariants}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  <div className="project-links">
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn-demo">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn-code">
                      <FaGithub /> View Code
                    </a>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Portofolio;