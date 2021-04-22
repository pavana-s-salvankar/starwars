import axios from "axios";
import React, {useState, useEffect } from 'react';
import logo from '../../images/logo.png';
import Footer from "../Footer/footer";
import Header from "../Header/header";
import '../../AllLinks/list.css';
import { Link, useRouteMatch } from "react-router-dom";
function Planets(){
    let { path} = useRouteMatch();
    const[planets,setPerson]=useState([]);
    const[next,setNext] =useState('');
    const[prev,setPrev] =useState('');
    const[count,setCount]=useState(0);
   
    useEffect(async ()=>{  await axios.get('https://swapi.dev/api/planets/')
    .then( response=>{
        setPerson(response.data.results);
        setNext(response.data.next);
        setPrev(response.data.previous);
        console.log(planets);})
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
              <ul className='planet'>
                  {planets.map((planet,index)=><Link className='List'  to={{pathname:`${path}/${(10*count)+(index+1)}`}}>{planet.name.toUpperCase()}</Link>)}  
             </ul>
                  <div className='Buttons'>
                       <button className='button' onClick={handlePrev}>Previous</button>
                       <button className='button' onClick={handleNext}>Next</button>
                  </div>
            <Footer/>
        </div>);
}
export default Planets;
/*import axios from "axios";
import React, { Component } from 'react';
import logo from '../../images/logo.png';
import Footer from "../Footer/footer";
import Header from "../Header/header";
import '../../AllLinks/list.css';
import { Link } from "react-router-dom";
class Planets extends Component {
    state = {
    planets:[],
    next:'',
    prev:''
}
    componentDidMount()
    {
        axios.get('https://swapi.dev/api/planets/')
        .then( response=>{
            this.setState({planets:response.data.results,next:response.data.next,prev:response.data.previous});
            console.log(this.state.planets.results);})
         .catch(error=>{console.log(error)})
    }


    handleNext=()=>{
        if(this.state.next===null)
        {alert("Nothing to show");}
        else{ axios.get(this.state.next)
    .then( response=>{console.log(response);
        this.setState({planets:response.data.results,next:response.data.next,prev:response.data.previous})})
    .catch(error=>{console.log(error)})}
}


    handlePrev=()=>{ 
        if(this.state.prev===null)
        {alert("Nothing to show");}
        else
        { axios.get(this.state.prev)
        .then( response=>{console.log(response);
            this.setState({planets:response.data.results,next:response.data.next,prev:response.data.previous})})
        .catch(error=>{console.log(error)})
    }}


    render() { 

        return (
            <div>
                 <div className='logo'>
                     <img src={logo} alt=''/>
                 </div>
            
                 <div className='header'>
                    <Header/>
                </div>

                  <ul className='planet'>
                      {this.state.planets.map(planet=><Link key={planet.name }  to={`/${planet.name}`}className='List' >{planet.name.toUpperCase()}</Link>)}  
                 </ul>
                      <div className='Buttons'>
                           <button className='button' onClick={this.handlePrev}>Previous</button>
                           <button className='button' onClick={this.handleNext}>Next</button>
                      </div>
                <Footer/>
            </div>);
    }
}
 
export default Planets;
*/