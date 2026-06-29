import { Component } from "react";
import qyufeeImg from '../assets/qyufee-preview.png';
import geometryImg from '../assets/geometry-preview.png';

class Portofolio extends Component {
  projects = [
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

  render() {
    return (
      <section className="portfolio-section" id="portfolio">
        <div className="portfolio-container">
          <h2 className="section-title">My Project</h2>
          
          <div className="projects-list-zigzag">
            {this.projects.map((project, index) => (
              <div 
                className={`project-row ${index % 2 === 1 ? 'row-reverse' : ''}`} 
                key={project.id}
              >
                
                <span className="project-number">0{index + 1}.</span>
                <div className="project-image-side">
                  <div className="image-wrapper">
                    <img 
                      src={project.image} 
                      alt={`${project.title} Preview`} 
                      className="project-img"
                    />
                  </div>
                </div>
                
                <div className="project-text-side">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag-badge">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn-project">
                      View Code
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn-project">
                      Live Demo
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portofolio;