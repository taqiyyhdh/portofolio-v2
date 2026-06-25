import { Component } from 'react';
import './App.css'
import Header from "./components/Header";
import Home from './components/Home';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <main>
          <Home />
        </main>
      </div>
    )
  }
}

export default App;
