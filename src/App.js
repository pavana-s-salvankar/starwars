import React from 'react';
import image from './images/background.png';
import Route from './route.jsx' 
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
         <Route/>
     </div>
  );
}
export default App;

