import styles from './row.module.css'
import { usePassengersContext } from '../../context/passengersContext'

import { useEffect, useState} from 'react'

function Row({el,changeRow, i}) {
  const { checkedRows, setCheckedRows } = usePassengersContext()

const [id, setId] = useState('')
const [first_name, setFirstName] = useState('')
const [last_name, setLastName] = useState('')
const [bdate, setBdate] = useState('')
const [gender, setGender] = useState('')

const [checked, setChecked] = useState(false)

useEffect(() => {
  setId(el.id)
  setFirstName(el.first_name)
  setLastName(el.last_name)
  setBdate(el.bdate)
  setGender(el.gender)
}, [])

  const handleCheck = (e) => {
    setChecked(!checked)
    if (checked) { //хотим удалить
      const newArr = checkedRows.filter(el => el != e.target.name)
      setCheckedRows(newArr)
    } else { //хотим добавить 
      setCheckedRows([...checkedRows, e.target.name])
    }
  }

  return (
    <tr onBlur={()=> {changeRow(el.id, {id, first_name, last_name, bdate, gender} )}}>
    <td>
    <input onChange={handleCheck} checked={checked} type='checkbox' name={el.id} />
    </td>
    <td>
      <input  disabled='false' value={i+1}/>
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
