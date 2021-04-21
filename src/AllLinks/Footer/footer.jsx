import React, { Component } from 'react';
import footerLogo from '../../images/footer_logo.png';
import {Link, useRouteMatch} from 'react-router-dom';
import  './footer.css';
class Footer extends Component {
    state = { footerElements:[
        {to:'/termsofuse' ,name:'TERMS OF USE'},
        {to:'/legalnotices', name:'LEGAL NOTICES'},
        {to:'/privacypolicy' ,name:'PRIVACY POLICY'},
        {to:'/help',name:'STAR WARS HELPDESK'},
        {to:'/disneystore',name:'STAR WARS AI DISNEY STORE'}
    ]  }
    render() { 
          const footer = this.state.footerElements.map(ele => {
            return (
                <li key={ele.name} className='footer-element'>
                <Link className='footer-links'to ={ele.to}>
                    <div className='footer-name'>{ele.name}</div>
               </Link>
            </li>
                      );
            }
        );
        return(
        <div className='footer-elements' >
            <ul  >
                   <li key='logo' className='footer-element'>
                        <img src={footerLogo} alt=''/>
                   </li>
                   {footer}
             </ul>
            <div >
                <p>TM &copy; Lucasfilm Ltd. All Rights Reserved</p>
         </div>
       </div>
     )
    }
}
 
export default Footer;