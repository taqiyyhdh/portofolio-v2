import { motion } from 'framer-motion';
import './Contact.css';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

const fadeInRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

const Contact = () => {

  // Fungsi untuk menangani submit via mailto native
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Email tujuan kamu
    const myEmail = "taqiyyahadha@gmail.com";
    
    // Subjek dan isi email otomatis
    const subject = encodeURIComponent(`Pesan Portofolio dari ${name}`);
    const body = encodeURIComponent(
      `Nama: ${name}\nEmail Pengirim: ${email}\n\nPesan:\n${message}`
    );

    // Buka aplikasi email pengguna
    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
  
      <motion.h2 
        className="contact-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Contact Me
      </motion.h2>
      
      <div className="contact-container">
       
        <motion.div 
          className="contact-info"
          variants={fadeInLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3>Let's connect!</h3>
          <p className="contact-subtitle">
            Punya ide seru, pertanyaan, atau sekadar ingin menyapa? 
            Jangan ragu untuk menghubungi saya.
          </p>
          
          <div className="contact-details-list">
            <div className="contact-item">
              <span className="contact-icon">
                <FiMapPin />
              </span>
              <div>
                <h4>Location</h4>
                <p>Padang, Indonesia</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">
                <FiMail />
              </span>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:taqiyyhdh@gmail.com">taqiyyahadha@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/taqiyyahadha" target="_blank" rel="noreferrer" className="social-link">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/taqiyyhdh" target="_blank" rel="noreferrer" className="social-link">
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          variants={fadeInRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            
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

            <button type="submit" className="btn-submit">
              <FaPaperPlane /> Kirim Pesan
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;