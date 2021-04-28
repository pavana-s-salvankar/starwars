import { Route, Switch, useParams, useRouteMatch } from "react-router";
import ThirdPage from '../ThirdPage/ThirdPage.jsx';
import SecondPage from '../SecondPage/SecondPage.jsx';

export default(props)=>
{
    console.log(props);
    let { path, url } = useRouteMatch();
    const {id}=useParams();
    return (<Switch>
    <Route path={path} exact component={SecondPage}/>
    <Route path={`/:id/:id1`} >
        <ThirdPage></ThirdPage>
        </Route>
</Switch>);
};