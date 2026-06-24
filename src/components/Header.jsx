import { Component } from 'react';

class Header extends Component {
  render() {

    return (
      <header id="home">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portofolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;