import axios from "axios";
import React, { Component } from 'react';
import logo from '../../images/logo.png';
import Footer from "../Footer/footer";
import Header from "../Header/header";
import '../../AllLinks/list.css';
import { Link } from "react-router-dom";
class Species extends Component {
    state = {
    species:[],
    next:'',
    prev:''
}
    componentDidMount()
    {
        axios.get('https://swapi.dev/api/species/')
        .then( response=>{
            this.setState({species:response.data.results,next:response.data.next,prev:response.data.previous});
            console.log(this.state.species.results);})
         .catch(error=>{console.log(error)})
    }


    handleNext=()=>{
        if(this.state.next===null)
        {alert("Nothing to show");}
        else{ axios.get(this.state.next)
    .then( response=>{console.log(response);
        this.setState({species:response.data.results,next:response.data.next,prev:response.data.previous})})
    .catch(error=>{console.log(error)})}
}


    handlePrev=()=>{ 
        if(this.state.prev===null)
        {alert("Nothing to show");}
        else
        { axios.get(this.state.prev)
        .then( response=>{console.log(response);
            this.setState({species:response.data.results,next:response.data.next,prev:response.data.previous})})
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

                  <ul className='species'>
                      {this.state.species.map(species=> <Link key={species.name }  to={`/${species.name}`} className='List' >{species.name.toUpperCase()}</Link>)}  
                 </ul>
                      <div className='Buttons'>
                           <button className='button' onClick={this.handlePrev}>Previous</button>
                           <button className='button' onClick={this.handleNext}>Next</button>
                      </div>
                   
                <Footer/>
            </div>);
    }
}
 
export default Species;
