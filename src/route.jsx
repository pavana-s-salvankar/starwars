import {Switch,Route} from 'react-router-dom';
import Films from './AllLinks/films';
import Species from './AllLinks/species';
import Persons from './AllLinks/persons';
import Starship from './AllLinks/starship';
import Planets from './AllLinks/planets';
import Vehicles from './AllLinks/vehicles';
import LegalNotices from './AllLinks/legalnotices';
import TermsOfUse from './AllLinks/termsofuse';
import PrivacyPolicy from './AllLinks/privacypolicy';
import Help from './AllLinks/help';
import DisneyStore from './AllLinks/disneystore';
import DispImages from './dispimages';
import route2 from './AllLinks/route2';

export default()=>
{
return (<Switch>
    <Route path={"/"} exact component={DispImages}/>
    <Route path={"/films"}  component={route2}/>
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