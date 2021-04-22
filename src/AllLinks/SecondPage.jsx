import axios from "axios";
import React, {useState, useEffect } from 'react';
import logo from "../images/logo.png"
import Footer from "./Footer/footer";
import Header from "./Header/header";
import '../AllLinks/list.css';
import { Link, useParams, useRouteMatch } from "react-router-dom";
function Things(props){
    console.log(props.name);
    const{id}=useParams();
    console.log(id);
    let { path} = useRouteMatch();
    const[things,setThing]=useState([]);
    const[next,setNext] =useState('');
    const[prev,setPrev] =useState('');
    const[count,setCount]=useState(0);
   
    useEffect(async ()=>{ await axios.get(`https://swapi.dev/api/${props.name}/`)
    .then( response=>{
        setThing(response.data.results);
        setNext(response.data.next);
        setPrev(response.data.previous);
        console.log(things);
    })
     .catch(error=>{console.log(error)})},[setThing,setNext,setPrev])

    
  function handleNext(){
        if(next===null)
        {alert("Nothing to show");}
        else{ axios.get(next)
    .then( response=>{console.log(response);
        setThing(response.data.results);
        setNext(response.data.next);
        setPrev(response.data.previous);
        setCount(count+1);
    })
    .catch(error=>{console.log(error)})}
}
  function handlePrev(){ 
        if(prev===null)
        {alert("Nothing to show");}
        else
        { axios.get(prev)
        .then( response=>{console.log(response);
        setThing(response.data.results);
        setNext(response.data.next);
        setPrev(response.data.previous);
        setCount(count-1);
    })
        .catch(error=>{console.log(error)})
    }}
    return (
        <div>
             <div className='logo'>
                 <img src={logo} alt=''/>
             </div>
             <div className='header'>
                <Header/>
            </div>
              <ul className='thing'>
                  {things.map((thing,index)=><Link className='List'  to={{pathname:`${path}/${(10*count)+(index+1)}`}}>{thing.name.toUpperCase()}</Link>)}  
             </ul>
                  <div className='Buttons'>
                       <button className='button' onClick={handlePrev}>Previous</button>
                       <button className='button' onClick={handleNext}>Next</button>
                  </div>
            <Footer/>
        </div>);
}
export default Things;