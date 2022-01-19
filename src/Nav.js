import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Nav() {
  const topics = useSelector(state => state.topics)

  return <ul>
    {topics.map(topic => <li key={topic.id}><Link to={`/read/${topic.id}`}>{topic.title}</Link></li>)}
  </ul>
}
