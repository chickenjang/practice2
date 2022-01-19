import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const responseP = await fetch("http://localhost:3333/topics", {
      method: 'POST',
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


  return <article>
    <h2>Create</h2>
    <form onSubmit={handleSubmit}>
      <p><input type="text" name="title" placeholder="title" /></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="create" /></p>
    </form>
  </article>;
}
