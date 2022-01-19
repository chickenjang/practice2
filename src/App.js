
import './App.css';
import { Header } from './Header';
import { Nav } from './Nav';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Create } from './Create';
import { Read } from './Read';
import { Control } from './Control';
import { Update } from './Update';

function App() {
  const dispatch = useDispatch();

  useEffect(async ()=>{
    const response = await fetch("http://localhost:3333/topics")
    const result = await response.json()
    dispatch({type: 'SET_TOPICS', topics: result})
  },[])

  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<h1>hello, web</h1>}></Route>
        <Route path="/read/:id" element={<Read></Read>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
      </Routes>
      <Control></Control>
    </div>
  );
}

export default App;
