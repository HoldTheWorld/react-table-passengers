import Row  from './Rows/Row'
import { usePassengersContext } from '../context/passengersContext'


function Table1() {
  const {passengers,  setPassengers, visibleSave, setVisibleSave} = usePassengersContext()


  return (
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
           key={el.id} el={el} 
           />
         )}
      </tbody>
    </table>

  )
}

export default Table1
