
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

const url = 'http://geek.itheima.net/v1_0/channels'
function App() {

  const [list, setList] = useState([])

  useEffect(() => {
    async function getList() {
      // const list = await fetch(url).json()
      const res = await fetch(url)
      const jsonRes = await res.json()
      console.log(jsonRes)
      setList(jsonRes.data.channels)
    }
    getList()
  }, [])
  return (
    <div className="App">
      <h1>React App</h1>
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
