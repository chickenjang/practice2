import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function Read() {
    const params = useParams();
    const topics = useSelector(state => state.topics)

    const [selectedTopic] = topics.filter(topic => topic.id === Number(params.id));

  return <div>
      <h1>{selectedTopic.title}</h1>
      <p>{selectedTopic.body}</p>
  </div>
}
