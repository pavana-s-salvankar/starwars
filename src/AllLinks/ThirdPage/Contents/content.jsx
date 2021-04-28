import React from 'react';
import './content.css'
import Header from '../../Header/header';
import logo from '../../../images/logo.png';
import  Footer from '../../Footer/footer'

import personImage from '../../../images/person.png';
import axios from 'axios';
const Content = ({ content, detail }) => {
    return (
            <div>
            <div className='logo'>
               <img src={logo} alt=''/>
            </div>
      <Header/>
         <div className='completeDiv'>
               <div className='left-image'>
                  <img className ='personImage'src={personImage} alt=''/>
               </div>
               <div className='right-details'>
               <h2> { (detail.data.name || detail.data.title).toUpperCase()}</h2>
               <ul>
            {
                content.map((element, index) => {
                    return (
                        <li key = {index} className = "details">
                            <span className = "span-details">{element}</span> : { detail.data[element]}</li>
                    )
                })
                }
             </ul>
          </div>
      </div>
      <Footer/>
      </div>
    )
}

export default Content;

