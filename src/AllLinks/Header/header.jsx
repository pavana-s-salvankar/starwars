import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
class Header
 extends Component {
    state = {  }
    render() { 
        return (<div>
          <table  className='header'>
             <Link className ='header-elements' to ='/films' >FILMS</Link>
             <Link className ='header-elements' to='/species'>SPECIES</Link>
            <Link className ='header-elements' to='/planets'>PLANETS</Link>
            <Link className ='header-elements' to='/people'>CHARACTERS</Link>
            <Link className ='header-elements'to='/starship'>STARSHIPS</Link>
             <Link className ='header-elements'to='/vehicles'>VEHICLES</Link>
        </table> 
        </div> );
    }
}
 
export default Header;