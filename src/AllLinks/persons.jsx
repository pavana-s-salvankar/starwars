import axios from "axios";
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import '../App.css';
class Persons extends Component {
    state = {
    persons:[],
    next:'',
    prev:''
}

    componentDidMount()
    {
        axios.get('https://swapi.dev/api/people/')
        .then( response=>{
            this.setState({persons:response.data.results,next:response.data.next,prev:response.data.previous})
            console.log(this.state.persons.results);})
         .catch(error=>{console.log(error)})
    }


    handleNext=()=>{
        if(this.state.next===null)
        {alert("Nothing to show");}
        else{ axios.get(this.state.next)
    .then( response=>{console.log(response);
        this.setState({persons:response.data.results,next:response.data.next,prev:response.data.previous})})
    .catch(error=>{console.log(error)})}
}


    handlePrev=()=>{ 
        if(this.state.prev===null)
        {alert("Nothing to show");}
        else
        { axios.get(this.state.prev)
        .then( response=>{console.log(response);
            this.setState({persons:response.data.results,next:response.data.next,prev:response.data.previous})})
        .catch(error=>{console.log(error)})
    }}

    

    render() { 

        return (
            <div>
                 <div className='logo'>
                     <img src={logo} alt=''/>
                 </div>
                 <hr></hr>
                <div>
                    <div>
                        <ul className='header'>
                         <li>FILMS</li>
                         <li>SPECIES</li>
                        <li>PLANETS</li>
                        <li>CHARACTERS</li>
                        <li>STARSHIPS</li>
                         <li>VEHICLES</li>
              <hr></hr>
                        </ul>
                    </div>
                  <ul className='person-left'>
                      {this.state.persons.map(person=><li className='personList' >{person.name.toUpperCase()}</li>)}  
                      <button className='button' onClick={this.handlePrev}>Previous</button>
                      <button className='button' onClick={this.handleNext}>Next</button>
                  </ul>
                </div>
            </div>);
    }
}
 
export default Persons;
