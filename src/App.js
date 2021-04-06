import React from 'react';
import DispImages from './dispimages.jsx';
import DispLogo from './displogo.jsx';
import DispLine from './displine.jsx';
import DispFooter from './dispfooter.jsx';
import image from './images/background.png';
import './App.css';
function App() {
  return (
     <div 
      style={{backgroundImage:`url(${image})`,
      textAlign:'center',
      backgroundSize:'cover',
      backgroundPosition:'center',
      width:'100vw',
      height:'100vh',
      }}>
         <h1>helllo</h1>
         <DispLogo/>
         <DispLine/>
         <DispImages/>
         <DispLine/>
         <DispFooter/>
         <p3>TM &copy; Lucasfilm Ltd. All Rights Reserved</p3>
     </div>
  );
}
export default App;
