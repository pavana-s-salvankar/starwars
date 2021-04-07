import React, { Component } from 'react';
import footerLogo from './images/footer_logo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import TermsOfUse from './termsofuse';
import './App.css';
const DispFooter=()=>{
    return ( 
<Router>
         <div className='footer'>
                <ul>
                    <li>
                    <img src={footerLogo} alt=''/ >
                    </li>
                    <li className='footer-element'>
                        <Link to ='/termsofuse'>
                            <div className='image-name'>TERMS OF USE</div>
                        </Link>
                    </li >
                    <li className='footer-element'>
                        <Link to ='/species'>
                            <div className='image-name'>LEGAL NOTICES</div>
                         </Link>
                    </li>
                    <li className='footer-element'>
                       <Link to ='/planets'>
                          <div className='image-name'>PRIVACY POLICY</div>
                       </Link>
                     </li >
                     <li className='footer-element'>
                        <Link to ='/species'>
                            <div className='image-name'>STAR WARS HELPDESK</div>
                         </Link>
                    </li>
                    <li className='footer-element'>
                        <Link to ='/species'>
                            <div className='image-name'>STAR WARS AI DISNEY STORE</div>
                         </Link>
                    </li>
               </ul>
    </div >
    <Switch>
<Route path='/termsofuse'>
    <TermsOfUse/>
</Route>
    </Switch>
    </Router>
    );
}
export default DispFooter;