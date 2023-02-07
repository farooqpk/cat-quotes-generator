
import './App.css';
import {  useState } from 'react'
import axios from 'axios';
import { Button } from '@mui/material';

function App() {

  const [data, setData] = useState('')

  const fetchData = () => {
    axios.get(" https://catfact.ninja/fact").then((res) => {

      setData(res.data.fact);
    })
  }

  return (<div>

    <main>
      <section>

        <div className='headDiv'>
          <h1>CAT QUOTES</h1>
        </div>

        <div className='btnDiv'>
          <Button variant="outlined" onClick={fetchData}>fetch quote</Button>
        </div>

        <div className='outDiv'>
          <div className='innerOut'>
            <p>"{data ? data : 'output here...'}"</p>
          </div>
        </div>

      </section>
    </main>












    {/* <button >fetchData</button>
    <p>{data}</p> */}
  </div>)
}





export default App;
