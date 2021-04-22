import {Switch,Route, useRouteMatch} from 'react-router-dom';
import Films from '../AllLinks/Films/films.jsx';
import Species from '../AllLinks/Species/species';
import Starship from '../AllLinks/Starships/starship.jsx';
import Planets from '../AllLinks/Planets/planets';
import Vehicles from '../AllLinks/Vehicles/vehicles.jsx';
import LegalNotices from '../AllLinks/Footer/legalnotices';
import TermsOfUse from '../AllLinks/Footer/termsofuse';
import PrivacyPolicy from '../AllLinks/Footer/privacypolicy';
import Help from '../AllLinks/Footer/help';
import DisneyStore from '../AllLinks/Footer/disneystore';
import DispImages from '../MainPage/dispimages';
import PersonRoute from '../AllLinks/Persons/personRoute';
import SecondPage from '../AllLinks/SecondPage'
/*
export default(props)=>
{   
   const icons=['films','species','planets','people','starships','vehicles'];
   const foot=['legalnotices','termsofuse','privacypolicy','Help','disneystore'];
   return (<Switch>
    <Route path={'/'} exact component={DispImages}/>
    {  icons.map((name)=>(<Route path={`/${name}`}>
             <PersonRoute name={name}></PersonRoute>
        </Route>))
             }
     <Route path={"/termsofuse"} exact component={TermsOfUse}/>
    <Route path={"/legalnotices"} exact component={LegalNotices}/>
    <Route path={"/privacypolicy"} exact component={PrivacyPolicy}/>
    <Route path={"/help"} exact component={Help}/>
    <Route path={"/disneystore"} exact component={DisneyStore}/>
</Switch>);
};*/

export default()=>
{
return (<Switch>
    <Route path={"/"} exact component={DispImages}/>
    <Route path={"/films"}  component={Films}/>
    <Route path={"/species"} exact component={Species}/>
    <Route path={"/planets"} exact component={Planets}/>
    <Route path={"/people"}  component={PersonRoute}/>
    <Route path={"/starships"} exact component={Starship}/>
    <Route path={"/vehicles"} exact component={Vehicles}/>
    <Route path={"/termsofuse"} exact component={TermsOfUse}/>
    <Route path={"/legalnotices"} exact component={LegalNotices}/>
    <Route path={"/privacypolicy"} exact component={PrivacyPolicy}/>
    <Route path={"/help"} exact component={Help}/>
    <Route path={"/disneystore"} exact component={DisneyStore}/>
</Switch>);
};