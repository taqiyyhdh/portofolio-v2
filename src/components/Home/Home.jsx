import { FaCode, FaGithub } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
            <h1>Taqiyyah Adha</h1>
            <h3>Aspiring Web Developer | Frontend Enthusiast</h3>
            
            <ul className="home-buttons">
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
            </ul>
          </div>
        </div>
      </section>
    );
};

export default Home;