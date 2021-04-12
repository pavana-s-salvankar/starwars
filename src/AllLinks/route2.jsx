import { Route, Switch, useRouteMatch } from "react-router";
import Films from "./films";
import films2020 from "./films2020";

export default()=>
{
 let { path, url } = useRouteMatch();
 return(
<Switch>    
<Route path={path} exact component={Films}/>
<Route path={`${path}/2020`} exact component={films2020}/>
<Route path={`${path}/2021`} exact component={films2020}/>
<Route path={`${path}/2019`} exact component={films2020}/>
</Switch>
 );
}