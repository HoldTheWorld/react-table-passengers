import './App.css';
import Table from './components/Table';
import { useEffect, useState} from 'react'



function App() {
  const [passengers, setPassengers] = useState([])
  
  
  useEffect(() => {
    
    async function getPass() {
      const response = await fetch('http://localhost:3000/passengers')
      const data = await response.json() 
      setPassengers(data) 
    }
    getPass()
  }, []) 

  return (      
    <div className="App">
      <Table passengers={passengers}/>
    </div>
  );
}

export default App;
