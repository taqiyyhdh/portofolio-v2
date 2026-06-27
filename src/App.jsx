import { Component } from 'react';
import './App.css'
import Header from "./components/Header";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <main>
          <Home />
          <About />
          <Contact />
        </main>
      </div>
    )
  }
}

export default App;
