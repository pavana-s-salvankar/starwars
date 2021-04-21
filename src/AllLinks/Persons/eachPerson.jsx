import Header from '../Header/header';
import '../Persons/persons.css';
import logo from '../../images/logo.png';
import  Footer from '../Footer/footer'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
const EachPerson=(props)=>
{
    let {id}=useParams();
    const[details,setDetails]=useState({});   
    useEffect(async ()=>{ await axios.get(`https://swapi.dev/api/people/${id}`)
    .then( response=>{setDetails(response.data);console.log(details);}
    )
    .catch(error=>{console.log(error)})},[setDetails])
    return(<div>
              <div className='logo'>
                 <img src={logo} alt=''/>
              </div>
        <Header/>
           <div className='completeDiv'>
                 <div className='left-image'>
                    <img src={logo} alt=''/>
                 </div>
                 <div className='right-details'>
                 <ul>
               <li>{`Name:${details.name}`}</li>
               <li>{`Height:${details.height}`}</li>
               <li>{`Mass:${details.mass}`}</li>
               <li>{`Hair color:${details.hair_color}`} </li> 
               <li>{`Skin color:${details.skin_color} `}</li> 
               <li>{`Eye color:${details.eye_color }`}</li>
               <li>{`Birth year:${details.birth_year }`}</li>
               <li>{`Gender:${details.gender} `}</li>
               <li>{`Name:${details.name}`}</li>
               <li>{`Height:${details.height}`}</li>
               <li>{`Mass:${details.mass}`}</li>
               <li>{`Hair color:${details.hair_color}`} </li> 
               <li>{`Skin color:${details.skin_color} `}</li> 
               <li>{`Eye color:${details.eye_color }`}</li>
               <li>{`Birth year:${details.birth_year }`}</li>
               <li>{`Gender:${details.gender} `}</li>
               </ul>
            </div>
        </div>
        <Footer/>
        </div>
    );
}
export default EachPerson;