import styles from './row.module.css'
import { usePassengersContext } from '../../context/passengersContext'

import { useEffect, useState} from 'react'

function Row({el,changeRow}) {
  // const { setPassengers, visibleSave, setVisibleSave, chosenRows, setChosenRows, handleSubmitChanges} = usePassengersContext()

const [id, setId] = useState('')
const [first_name, setFirstName] = useState('')
const [last_name, setLastName] = useState('')
const [bdate, setBdate] = useState('')
const [gender, setGender] = useState('')

useEffect(() => {
  setId(el.id)
  setFirstName(el.first_name)
  setLastName(el.last_name)
  setBdate(el.bdate)
  setGender(el.gender)
}, [])



  return (
    <tr onBlur={()=> {changeRow(el.id, {id, first_name, last_name, bdate, gender} )}}>
    <td>
    <input type='checkbox' name={el.id} />
    </td>
    <td>
      <input  disabled='false' value={el.id}/>
    </td>
      <td>
      <input onChange={(e) => setFirstName(e.target.value)} value={first_name}/>
    </td>
    <td>
      <input onChange={(e) => setLastName(e.target.value)} value={last_name}/>
    </td>
    <td>
    <input onChange={(e) => setBdate(e.target.value)} value={bdate}/>
    </td>
    <td>
    <input onChange={(e) => setGender(e.target.value)} value={gender}/>
    </td>
    <td>
      <button> more </button>
    </td>
    </tr>
  )
}

export default Row
