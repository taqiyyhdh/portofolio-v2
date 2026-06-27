import { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact-section">
        <h2 className="contact-title">Contact Me</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's connect!</h3>
            <p className="contact-subtitle">
              Punya ide seru, pertanyaan, atau sekadar ingin menyapa? 
              Jangan ragu untuk menghubungi saya.
            </p>
            
            <div className="contact-details-list">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Padang, Indonesia</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:taqiyyhdh@gmail.com">taqiyyhdh@gmail.com</a></p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/taqiyyahadha" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
              <a href="https://github.com/taqiyyhdh" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              
              <div className="form-group">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Nama Lengkap *" 
                  required 
                />
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Alamat Email *" 
                  required 
                />
              </div>

              <div className="form-group">
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  placeholder="Tuliskan pesan Anda di sini... *" 
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">Kirim Pesan</button>
            </form>
          </div>

        </div>
      </section>
    );
  }
}

export default Contact;