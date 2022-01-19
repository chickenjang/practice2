import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export function Control() {
  const location = useLocation();
  const currentId = location.pathname.slice(6);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return <ul>
    <li><Link to="create">create</Link></li>
    <li><Link to={"update/"+currentId}>update</Link></li>
    <li><button onClick={async ()=>{
      const responseP = await fetch("http://localhost:3333/topics/"+Number(currentId), {
        method: 'DELETE'
      })
      navigate('/')
      const response = await fetch("http://localhost:3333/topics");
      const result = await response.json();

      await dispatch({type: 'SET_TOPICS', topics: result})
      
    }}>delete</button></li>
  </ul>;
}
