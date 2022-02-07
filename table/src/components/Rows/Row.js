import { usePassengersContext } from '../../context/passengersContext'
import { useEffect, useState} from 'react'

function Row({el,changeRow, i}) {
const { 
  checkedRows, 
  setCheckedRows, 
  moreIsShown, 
  setMoreIsShown 
} = usePassengersContext()

const [id, setId] = useState('')
const [first_name, setFirstName] = useState('')
const [last_name, setLastName] = useState('')
const [bdate, setBdate] = useState('')
const [gender, setGender] = useState(el.gender)
const [blood, setBlood] = useState('')
const [children, setChildren] = useState('')
const [checked, setChecked] = useState(false)

useEffect(() => {
  setId(el.id)
  setFirstName(el.first_name)
  setLastName(el.last_name)
  setBdate(el.bdate)
  setGender(el.gender)
  setBlood(el.blood)
  setChildren(el.children)
  setGender(el.gender)
}, [])

  const handleCheck = (e) => {
    setChecked(!checked)
    if (checked) { 
      const newArr = checkedRows.filter(el => el != e.target.name)
      setCheckedRows(newArr)
    } else { 
      setCheckedRows([...checkedRows, e.target.name])
    }
  }

  return (
    <tr onBlur={()=> {changeRow(el.id, {id, first_name, last_name, bdate, gender} )}}>
    <td>
    <input onChange={handleCheck} checked={checked} type='checkbox' name={el.id} />
    </td>
    <td className="idrow">
    {i+1}
    </td>
      <td>
      <input placeholder="например Иванов И.И." pattern="[А-ЯA-Z]{1}[a-zа-я]{3,20}\s{1}[А-ЯA-Z]{1}\.[А-ЯA-Z]{1}\." required="true" onChange={(e) => setFirstName(e.target.value)} value={first_name}/>
    </td>
    <td>
    <input type="date" required="true" onChange={(e) => setBdate(e.target.value)} value={bdate}/>
    </td>
    <td>
      <select value={gender}  onChange={(e) => setGender(e.target.value)}>
        <option value="Мужской"> Мужской</option>
        <option value="Женский"> Женский</option>
        <option value="Другое"> Другое</option>
      </select>
    </td>
    <td>
      <button > ... </button>
    </td>
    </tr>
  )
}

export default Row
