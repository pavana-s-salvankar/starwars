import React, { Component } from 'react';
import {Link, } from "react-router-dom";
class DispImage extends Component {
    render()
        {
        return (  <li 
            id={this.props.id} 
             className='imag' 
        onMouseOver={()=>this.props.handleChange(this.props.id,this.props.name,this.props.src,this.props.src2)}
        onMouseOut={()=>this.props.handleChange(this.props.id,this.props.name,this.props.src,this.props.src2)} >
        <Link to ={`/${this.props.name.toLowerCase()}`}>
              <img src={this.props.src} />
              <div className='name'>{this.props.name}</div>
         </Link>
         </li>)
    }
}
 
export default DispImage;