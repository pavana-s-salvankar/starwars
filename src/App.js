import React from 'react';
import image from './images/background.png';
import MainRoute from './MainPage/mainRoute' ;
import './MainPage/App.css';
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
         <MainRoute/>
     </div>
  );
}
export default App;

