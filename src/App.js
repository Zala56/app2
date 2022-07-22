import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const [data,addData] = useState([])
  const [name,updateName] = useState("")

  useEffect(() => {
    fetch("https://localhost:44383/api/Cu")
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if (data.length === 0){
        addData(res)
      }
    })
  })

  return (
    <div className="App">
      <input type='text' placeholder='name' onChange={e => updateName(e.target.value) }></input>
      
 
      {
        data.map(d => {
        
          if (d.customerName.includes(name)){
          return(
            <div className='xd'>
             
              <h3>{d.customerId}</h3>
              <h3>{d.customerName}</h3>
              <h3>{d.address}</h3>
              <h3>{d.city}</h3>
             
            </div> 
          )
          }
        })
      }
    
       
    </div>
  );

  
}

export default App;
