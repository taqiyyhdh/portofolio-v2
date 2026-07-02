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
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>Tailwind</li>
                <li>React</li>
                <li>TypeScript</li>
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
              <a href="#" download>Download CV</a>
              <a href="#contact" className="btn-secondary">Hire Me</a>
            </div>
          </div>

        </div>
      </section>
    );
  };

export default About;