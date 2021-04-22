import axios from "axios";
import React, {useState, useEffect } from 'react';
import logo from '../../images/logo.png';
import Footer from "../Footer/footer";
import Header from "../Header/header";
import '../../AllLinks/list.css';
import { Link, useRouteMatch } from "react-router-dom";
function Persons(){
    let { path} = useRouteMatch();
    const[persons,setPerson]=useState([]);
    const[next,setNext] =useState('');
    const[prev,setPrev] =useState('');
    const[count,setCount]=useState(0);
   
    useEffect(async ()=>{  await axios.get('https://swapi.dev/api/people/')
    .then( response=>{
        setPerson(response.data.results);
        setNext(response.data.next);
        setPrev(response.data.previous);
        console.log(persons);})
     .catch(error=>{console.log(error)})},[setPerson,setNext,setPrev])

    
  function handleNext(){
        if(next===null)
        {alert("Nothing to show");}
        else{ axios.get(next)
    .then( response=>{console.log(response);
        setPerson(response.data.results);
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
        setPerson(response.data.results);
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
              <ul className='person'>
                  {persons.map((person,index)=><Link className='List'  to={{pathname:`${path}/${(10*count)+(index+1)}`}}>{person.name.toUpperCase()}</Link>)}  
             </ul>
                  <div className='Buttons'>
                       <button className='button' onClick={handlePrev}>Previous</button>
                       <button className='button' onClick={handleNext}>Next</button>
                  </div>
            <Footer/>
        </div>);
}
export default Persons;
/*class Persons extends Component {
    state = {
    persons:[],
    next:'',
    prev:''
}
    componentDidMount()
    {
        axios.get('https://swapi.dev/api/people/')
        .then( response=>{
            setPerson({persons:response.data.results,next:response.data.next,prev:response.data.previous});
            console.log(pers.persons.results);})
         .catch(error=>{console.log(error)})
    }


    handleNext=()=>{
        if(pers.next===null)
        {alert("Nothing to show");}
        else{ axios.get(pers.next)
    .then( response=>{console.log(response);
        setPerson({persons:response.data.results,next:response.data.next,prev:response.data.previous})})
    .catch(error=>{console.log(error)})}
}


    handlePrev=()=>{ 
        if(pers.prev===null)
        {alert("Nothing to show");}
        else
        { axios.get(pers.prev)
        .then( response=>{console.log(response);
            setPerson({persons:response.data.results,next:response.data.next,prev:response.data.previous})})
        .catch(error=>{console.log(error)})
    }}


    render() { 
        return (
            <div>
                 <div className='logo'>
                     <img src={logo} alt=''/>
                 </div>
                 <hr></hr>
                 <div className='header'>
                    <Header/>
                </div>
                    <hr></hr>
                  <ul className='person'>
                      {pers.persons.map(person=><Link className='List' key={person.name} to={`${this.props.match}/${person.name}`} >{person.name.toUpperCase()}</Link>)}  
                 </ul>
                      <div className='Buttons'>
                           <button className='button' onClick={this.handlePrev}>Previous</button>
                           <button className='button' onClick={this.handleNext}>Next</button>
                      </div>
                      <hr></hr>
                <Footer/>
            </div>);
    }
}
*/
 



