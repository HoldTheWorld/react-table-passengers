import './App.css';
import Table from './components/Table';
import Row from './components/Rows/Row';
import SortingTable from './components/SortingTable';
import RowSelection from './components/RowSelection';
import { usePassengersContext } from './context/passengersContext'
import Table1 from './components/Table1';
import { useEffect, useState} from 'react'

function App() {
  const { passengers,  setPassengers, visibleSave, setVisibleSave} = usePassengersContext()

  useEffect(() => {
    async function getPass() {
      const response = await fetch('http://localhost:3000/passengers')
      const data = await response.json() 
      setPassengers(data) 
    }
    getPass()
  }, []) 


  const changeRow = (id, obj) => {
    const update = passengers.map((pass) => pass.id == id ? obj : pass )
    setPassengers(update)
  }

  const handleSubmitChanges = async () => {
    passengers.forEach(async (element) => {
      const response = await fetch(`http://localhost:3000/passengers/${element.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(element)
      })
    })
  }

  const handleAdd = async () => {
    const response = await fetch(`http://localhost:3000/passengers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    const response2 = await fetch('http://localhost:3000/passengers')
    const data2 = await response2.json() 
    setPassengers(data2) 
  }

  return (      
    <div className="App">
      <button onClick={handleAdd} >Add </button>
      <button> Delete </button>
      <button onClick={handleSubmitChanges}>Save </button> 
      {/* {visibleSave ?  <button >Save </button> : ''} */}
  
      {/* <Table passengers={passengers}/> */}
      {/* <SortingTable passengers={passengers}/> */}
      {/* <RowSelection passengers={passengers}/> */}
      {/* <Table1/> */}
      <table>
      <thead>
        <th>
       
        </th>
        <th>
          id
        </th>
        <th>
          first name
        </th>
        <th>
        last name
        </th>
        <th>
        bdate
        </th>
        <th>
        gender
        </th>
        <th>
        other
        </th>
      </thead>
      <tbody>
         {passengers.map((el) => 
           <Row 
           key={el.id} 
           el={el} 
           changeRow={changeRow}
           />
         )}
      </tbody>
    </table>
    </div>
  );
}

export default App;
