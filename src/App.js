import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
      
    </div>
  );
}

function LoadComments(){
  const [comments, setComments] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setComments(data))
    // .then(data => console.log(data))
    // state ke set na korle data dekhte parbo na
  },[])
  return(
   <div>
     <h3>Load Comments</h3>
     {
       comments.map(comment => <Comment title={comment.title} body={comment.body}></Comment>)
     }
   </div>
  );
}

function Comment(props){
  return(
    <div style={{backgroundColor: 'green', margin: '20px'}}>
      <h4>Title: {props.title}</h4>
      <p>Body: {props.body}</p>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)
  const handleIncrease = () => setCount(count + 1)
  const handleDecrease = () => setCount(count - 1)
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
export default App;
