import { Route, Switch, useRouteMatch } from "react-router";
import EachPerson from "./eachPerson";
import Persons from "./persons";

export default(props)=>
{
    console.log(props);
    let { path, url } = useRouteMatch();
   return (<Switch>
    <Route path={path} exact component={Persons}/>
    <Route path={`${path}/:id`} >
        <EachPerson></EachPerson>
    </Route>
    
</Switch>);
};