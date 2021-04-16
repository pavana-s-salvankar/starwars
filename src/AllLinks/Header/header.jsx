import React, { Component } from 'react';
import './header.css';
class Header
 extends Component {
    state = {  }
    render() { 
        return (<div>
          <table  className='header'>
             <button className ='header-elements'>FILMS</button>
             <button className ='header-elements'>SPECIES</button>
            <button className ='header-elements'>PLANETS</button>
            <button className ='header-elements'>CHARACTERS</button>
            <button className ='header-elements'>STARSHIPS</button>
             <button className ='header-elements'>VEHICLES</button>
        </table> 
        </div> );
    }
}
 
export default Header;