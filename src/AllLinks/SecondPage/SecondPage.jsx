import axios from "axios";
import React, {useState, useEffect } from 'react';
import logo from "../../images/logo.png"
import Footer from "../Footer/footer";
import Header from "../Header/header";
import './list.css';
import { Link, useParams} from "react-router-dom";
function Things(){
    const{id}=useParams();
    const[things,setThing]=useState([]);
    const[next,setNext] =useState('');
    const[prev,setPrev] =useState('');
    const[loading,setLoading]=useState(true);
    const getDetail = async (url) => {
        const response = await axios.get(url);
             setThing(response.data.results);
             setNext(response.data.next);
             setPrev(response.data.previous);
             setLoading(false);
         }
          useEffect(()=>
          {
              getDetail(`https://swapi.dev/api/${id}`);
          },[id,setThing,setNext,setPrev]);
          
  function handleNext(){
     getDetail(next);
}
  function handlePrev(){ 
        getDetail(prev);
  }
  if(loading)
  return(<h2>Loading...Please wait</h2>)
    return (
        <div>
             <div className='logo'>
                 <img src={logo} alt=''/>
             </div>
             <div className='header'>
                <Header/>
            </div>
              <ul className='thing'>
                  { 
            
                  things.map((thing)=><Link className='List'  key={thing.name} to={`${id}/${thing.url.match(/[0-9]+/)}`}>
                      {thing.name !==undefined? thing.name.toUpperCase():thing.title.toUpperCase()}</Link>)}
             </ul>
                  <div className='Buttons'>
                      { prev ? <button className='button' onClick={handlePrev}>Previous</button>:null}
                       {next ? <button className='button' onClick={handleNext}>Next</button>:null}
                  </div>
            <Footer/>
        </div>);
}
export default Things;

/*{count===0? `/${id}/${index+1}`:`/${id}/${index+1+count+1}`}{{pathname:`${id}/${(10*count)+(index+1)}`}}*/