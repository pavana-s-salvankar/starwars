import {Switch,Route} from 'react-router-dom';
import Films from './AllLinks/Films/films';
import Species from './AllLinks/Species/species';
import Persons from './AllLinks/Persons/persons.jsx';
import Starship from './AllLinks/Starships/starship.jsx';
import Planets from './AllLinks/Planets/planets';
import Vehicles from './AllLinks/Vehicles/vehicles.jsx';
import Header from './header';


export default()=>
{
return (<Switch>
    <Route path={"/"} exact component={Header}/>
    <Route path={"/films"}  component={Films}/>
    <Route path={"/species"} exact component={Species}/>
    <Route path={"/planets"} exact component={Planets}/>
    <Route path={"/people"} exact component={Persons}/>
    <Route path={"/starship"} exact component={Starship}/>
    <Route path={"/vehicles"} exact component={Vehicles}/>
</Switch>);
};