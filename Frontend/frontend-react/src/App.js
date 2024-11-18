import { useEffect, useState } from "react";
import axios from "axios"
function App() {

const[entervalue,setvalue]=useState("")
const[fruit,setfruit]=useState([])

useEffect(function()
{
  axios.get("http://localhost:5000/fruitlist").then(function(data)
{
  console.log(data);
  
  setfruit(data.data)

})

},[]) 

function handlechange(event)
{
  setvalue(event.target.value)
}
function add()
{
  axios.post("http://localhost:5000/addfruit",{newfruit:entervalue})
  setfruit([...fruit,{name:entervalue}])
 setvalue("")
}

  return (
    <div className="App">
  <input value={entervalue} onChange={handlechange}></input>
  <button onClick={add}>ADD</button>

  {fruit.map(function(item,index)
  {
    return <h1 key={index}>{item.name}</h1>
  })}
    </div>
  );
}

export default App;
