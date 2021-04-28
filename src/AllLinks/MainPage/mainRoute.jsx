import {Switch,Route} from 'react-router-dom';
import LegalNotices from '../Footer/legalnotices';
import TermsOfUse from '../Footer/termsofuse';
import PrivacyPolicy from '../Footer/privacypolicy';
import Help from '../Footer/help';
import DisneyStore from '../Footer/disneystore';
import DispImages from '../MainPage/dispimages';
import SecondRoute from '../SecondPage/SecondRoute';


const MainRoute=()=>
{ 
 // const{id}=useParams();
   return (<Switch>
            <Route path={"/termsofuse"} exact component={TermsOfUse}/>
    <Route path={"/legalnotices"} exact component={LegalNotices}/>
    <Route path={"/privacypolicy"} exact component={PrivacyPolicy}/>
    <Route path={"/help"} exact component={Help}/>
    <Route path={"/disneystore"} exact component={DisneyStore}/>
    <Route path={'/'} exact component={DispImages}/>
    <Route path={`/:id`} >
         <SecondRoute ></SecondRoute></Route>
</Switch>);
};

export default MainRoute;