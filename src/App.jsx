import './styles/global.css';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portofolio from './components/Portofolio/Portofolio';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Portofolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;