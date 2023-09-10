import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';


function App() {

function handleclick(){
  alert('Clicked')
}
 const addToFive = (num) =>{
    alert(num+5);
  }
  function click(){
    alert('Clicked')
}
  return (
    <>
      <h1>React Concepts</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleclick}>Click Me</button> 
      <button onClick={() => addToFive(3)}>Submit Me</button>
      <button onClick={click}>Five</button>
    </>
  )
}

export default App
