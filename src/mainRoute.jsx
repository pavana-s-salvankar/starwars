import {Switch,Route} from 'react-router-dom';
import Films from './AllLinks/Films/films';
import Species from './AllLinks/Species/species';
import Persons from './AllLinks/Persons/persons.jsx';
import Starship from './AllLinks/Starships/starship.jsx';
import Planets from './AllLinks/Planets/planets';
import Vehicles from './AllLinks/Vehicles/vehicles.jsx';
import LegalNotices from './AllLinks/Footer/legalnotices';
import TermsOfUse from './AllLinks/Footer/termsofuse';
import PrivacyPolicy from './AllLinks/Footer/privacypolicy';
import Help from './AllLinks/Footer/help';
import DisneyStore from './AllLinks/Footer/disneystore';
import DispImages from './dispimages';

export default()=>
{
return (<Switch>
    <Route path={"/"} exact component={DispImages}/>
    <Route path={"/films"}  component={Films}/>
    <Route path={"/species"} exact component={Species}/>
    <Route path={"/planets"} exact component={Planets}/>
    <Route path={"/people"} exact component={Persons}/>
    <Route path={"/starship"} exact component={Starship}/>
    <Route path={"/vehicles"} exact component={Vehicles}/>
    <Route path={"/termsofuse"} exact component={TermsOfUse}/>
    <Route path={"/legalnotices"} exact component={LegalNotices}/>
    <Route path={"/privacypolicy"} exact component={PrivacyPolicy}/>
    <Route path={"/help"} exact component={Help}/>
    <Route path={"/disneystore"} exact component={DisneyStore}/>
</Switch>);
};