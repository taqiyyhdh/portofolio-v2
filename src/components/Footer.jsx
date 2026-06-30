import { Component } from 'react';

class Footer extends Component {
  getCurrentYear = () => {
    return new Date().getFullYear();
  };

  render() {
    return (
      <footer className="footer-section">
        <div className="footer-container">
          
          <div className="footer-info">
            <p>&copy; {this.getCurrentYear()} Taqiyyah Adha. All rights reserved.</p>
          </div>
          
          <div className="footer-socials-horizontal">
            <a href="https://github.com/taqiyyhdh" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/taqiyyahadha" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:taqiyyhdh@gmail.com">Email</a>
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;