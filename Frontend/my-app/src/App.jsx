import { useState, useEffect } from "react";
import axios from "axios";


function App() {

  const [data , setData] = useState('')

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then(res => setData(res.data))   // ✅ store response in state
      .catch(err => console.log(err));
  }, []); 

  return (
    <>
      <h1>{data}</h1>
    </>
  )
}

export default App
