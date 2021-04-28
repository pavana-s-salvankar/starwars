import { Route, Switch,useRouteMatch } from "react-router";
import ThirdPage from '../ThirdPage/ThirdPage.jsx';
import SecondPage from '../SecondPage/SecondPage.jsx';

const SecondRoute =()=>
{
    let { path} = useRouteMatch();
    return (<Switch>
    <Route path={path} exact component={SecondPage}/>
    <Route path={`/:id/:id1`} >
        <ThirdPage></ThirdPage>
        </Route>
</Switch>);
};
export default SecondRoute;