import { Route, Switch, useRouteMatch,useParams } from "react-router";
import { Link } from "react-router-dom";
import films2020 from '../AllLinks/films2020';

function Films() {
    let { path, url } = useRouteMatch();

    return (
      <div>
        <p1>Films</p1>
        <ul  >
          <li className='filmlinks'>
            <Link  className='link' to={`${url}/2021`}>2021</Link>
          </li>
          <li className='filmlinks'>
            <Link  className='link' to={`${url}/2020`}>2020</Link>
          </li>
          <li className='filmlinks'>
            <Link className='link' to={`${url}/2019`}>2019</Link>
          </li>
        </ul>

      </div>
    );
  }
  export default Films;


             