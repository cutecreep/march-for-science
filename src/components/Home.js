import React, { Component } from 'react';
import '../assets/css/fonts.css';
import '../assets/css/App.css';
import styles from '../components/Home.css';
import ModuleOne from './ModuleOne/ModuleOne';
import ModuleTwo from './ModuleTwo/ModuleTwo';
import Hero from './Hero/Hero';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

class Home extends Component {
    render() {
        return (
          <div id="page-wrapper">
              <HamburgerMenu />
              <Hero />
              <ModuleOne />
              <ModuleTwo />


              <section id="three" className="wrapper style3 special">
                <div className="inner">
                  <header className="major">
                    <h2>Accumsan mus tortor nunc aliquet</h2>
                    <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
                    fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
                  </header>
                  <ul className="features">
                    <li className="icon fa-paper-plane-o">
                      <h3>Arcu accumsan</h3>
                      <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                    </li>
                    <li className="icon fa-laptop">
                      <h3>Ac Augue Eget</h3>
                      <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                    </li>
                    <li className="icon fa-code">
                      <h3>Mus Scelerisque</h3>
                      <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                    </li>
                    <li className="icon fa-headphones">
                      <h3>Mauris Imperdiet</h3>
                      <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                    </li>
                    <li className="icon fa-heart-o">
                      <h3>Aenean Primis</h3>
                      <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                    </li>
                    <li className="icon fa-flag-o">
                      <h3>Tortor Ut</h3>
                      <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="cta" className="wrapper style4">
                <div className="inner">
                  <header>
                    <h2>Arcue ut vel commodo</h2>
                    <p>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</p>
                  </header>
                  <ul className="actions vertical">
                    <li><a href="#" className="button fit special">Activate</a></li>
                    <li><a href="#" className="button fit">Learn More</a></li>
                  </ul>
                </div>
              </section>

              <footer id="footer">
                <ul className="icons">
                  <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                  <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                  <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                  <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                  <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
              </footer>

          </div>
        );
    }
}

export default Home;
