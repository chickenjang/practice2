import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


export function Update() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const currentId = Number(params.id)

        const responseP = await fetch("http://localhost:3333/topics/"+currentId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title:e.target.title.value, body:e.target.body.value})
        })
        const newTopic = await responseP.json()

        const response = await fetch("http://localhost:3333/topics");
        const result = await response.json();

        await dispatch({type: 'SET_TOPICS', topics: result})
        navigate(`/read/${newTopic.id}`)
    }
    const params = useParams();
    const topics = useSelector(state => state.topics)

    const [selectedTopic] = topics.filter(topic => topic.id === Number(params.id));

    const [title, setTitle] = useState(selectedTopic.title);
    const [body, setBody] = useState(selectedTopic.body);

    return <article>
    <h2>Update</h2>
    <form onSubmit={handleSubmit}>
      <p><input type="text" name="title" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} /></p>
      <p><textarea name="body" placeholder="body" value={body} onChange={(e)=>setBody(e.target.value)} ></textarea></p>
      <p><input type="submit" value="update" /></p>
    </form>
  </article>;
}
