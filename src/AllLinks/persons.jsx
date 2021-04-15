import axios from "axios";
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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


    handleNext=()=>{ axios.get(this.state.next)
    .then( response=>{console.log(response);
        this.setState({persons:response.data.results,next:response.data.next,prev:response.data.previous})})
    .catch(error=>{console.log(error)})}


    handlePrev=()=>{ axios.get(this.state.prev)
        .then( response=>{console.log(response);
            this.setState({persons:response.data.results,next:response.data.next,prev:response.data.previous})})
        .catch(error=>{console.log(error)})}
    

    render() { 
        return (<div>
                  <ul className='person-left'>
                   {this.state.persons.map(person=><Link className='personList'>{person.name}</Link>)}   
                   <button className='button' onClick={this.handlePrev}>Previous</button>
                   <button className='button' onClick={this.handleNext}>Next</button>
                </ul>
                </div>);
    }
}
 
export default Persons;
