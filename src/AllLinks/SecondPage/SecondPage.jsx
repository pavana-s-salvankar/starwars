import axios from "axios";
import React, {useState, useEffect } from 'react';
import logo from "../../images/logo.png"
import Footer from "../Footer/footer";
import Header from "../Header/header";
import './list.css';
import { Link, useParams, useRouteMatch } from "react-router-dom";
function Things(props){
    console.log(props.name);
    const{id}=useParams();
    console.log(id);
  
    const[things,setThing]=useState([]);
    const[next,setNext] =useState('');
    const[prev,setPrev] =useState('');
    const[count,setCount]=useState(0);
   
    useEffect(()=>
     {
         getDetail();
     },[id,setThing,setNext,setPrev]);

    const getDetail = async () => {
        await axios.get(`https://swapi.dev/api/${id}`)
         .then( response=>{
             setThing(response.data.results);
             setNext(response.data.next);
             setPrev(response.data.previous);
             console.log(things);
             setCount(0);
         })
          .catch(error=>{console.log(error)})}  
            
    
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
                  { 
            
                  things.map((thing)=><Link className='List'  to={`${id}/${thing.url.match(/[0-9]+/)}`}>
                      {thing.name !==undefined? thing.name.toUpperCase():thing.title.toUpperCase()}</Link>)}
             </ul>
                  <div className='Buttons'>
                       <button className='button' onClick={handlePrev}>Previous</button>
                       <button className='button' onClick={handleNext}>Next</button>
                  </div>
            <Footer/>
        </div>);
}
export default Things;

//{count===0? `/${id}/${index+1}`:`/${id}/${index+1+count+1}`}{{pathname:`${id}/${(10*count)+(index+1)}`}}