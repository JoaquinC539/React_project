import './App.css';
import {useState} from 'react';
import {useEffect} from 'react'


function App() {
  const apiURL="https://jsonplaceholder.typicode.com";
  const [data,setData]=useState([]);
  const [dataType, setDataType] = useState("users");

  const getData=async (dataType)=>{
    try {
      const response=await fetch(apiURL+"/"+dataType);
      if(!response.ok) Error("Error fetching data");
      const info=await response.json();
      setData(info)
    } catch (error) {
      console.log(error)
    }
  }  
  useEffect(()=>{
    getData(dataType);
  },[dataType])
  

  return (
    <main >
      <div className='buttons'>
      <button onClick={()=>setDataType("users")}>users</button>
      <button onClick={()=>setDataType("posts")}>posts</button>
      <button onClick={()=>setDataType("comments")}>comments</button>
      </div>
      <table>
        <thead>
      <tr>
      {data.length > 0 && Object.keys(data[0]).map((key)=>{
      return (
        <th>{key}</th>
      )
    })}
          </tr>
        </thead>
        <tbody>
          { data.map(item=>(
            <tr>
              {Object.entries(item).map(([key,value])=>{
                return (
                  <td key={value[0]}>{JSON.stringify(value)}</td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>  
    </main>
  );
}

export default App;
