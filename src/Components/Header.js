import React, {Component} from 'react';
import logo from './logoBigColor2.png';
import behead from '../Components/beheaded.gif';

class Header extends Component {
   render() {
      return (
         <header>
         <img src={logo} alt="Header is coming soon" id="banner"/>

            <nav>
               <img src={behead} alt="none" id="gif" />
            </nav>
         </header>
      )
   }
}

export default Header;