import './App.css'
import './components/table.css'
import Row from './components/Rows/Row'
import { usePassengersContext } from './context/passengersContext'
import { useEffect, useState} from 'react'

function App() {
  const { passengers,  setPassengers, checkedRows, setCheckedRows, moreIsShown, setMoreIsShown} = usePassengersContext()
  const [count, setCount] = useState(0)
  const [disabledDelete, setDisabledDelete] = useState(true)

  useEffect(() => {
    async function getPass() {
      const response = await fetch('http://localhost:3000/passengers')
      const data = await response.json()
      setCount(data.length)
      setPassengers(data) 
    }
    getPass()
  }, []) 

  useEffect(() => {
    if(!checkedRows.length) {
      setDisabledDelete(false)
    } else {
      setDisabledDelete(true)
    }
  }, [checkedRows])

  const changeRow = (id, obj) => {
    const update = passengers.map((pass) => pass.id == id ? obj : pass )
    setPassengers(update)
  }

  const handleSubmitChanges = async () => {
    passengers.forEach(async (element) => {
      // console.log(element.name, element.gender, element.bdate);
      if(!element.name && !element.gender && !element.bdate) {
        alert('Заполните все обязательные поля!')
      } else {
        // console.log('true');
        await fetch(`http://localhost:3000/passengers/${element.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(element)
      })
      }
    })
  }

  const handleAdd = async () => {
    await fetch(`http://localhost:3000/passengers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    const response = await fetch('http://localhost:3000/passengers')
    const data = await response.json()

    setPassengers(data)
  }

  const handleDelete = async () => {
    const resp = window.confirm('Вы уверены что хотите удалить выбранные элементы?')
    if (resp) {

      checkedRows.forEach(async (el) => {
          await fetch(`http://localhost:3000/passengers/${el}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        })
        setPassengers(passengers.filter((elem) => el != elem.id))
      })
      alert('данные удалены')
    } 
  }

  return (      
    <div className="App">
      <button onClick={handleAdd} >Добавить строку </button>
      <button disabled={!disabledDelete} onClick={handleDelete}> Удалить</button>
      <button onClick={handleSubmitChanges}> Сохранить </button> 
      <table>
      <thead>
        <th>
        </th>
        <th className='idrow'>
       
        </th>
        <th>
          Имя
        </th>
        {/* <th>
        last name
        </th> */}
        <th>
        Дата рождения
        </th>
        <th>
        Пол
        </th>
          <th>
          Другое
          </th>
      </thead>
      <tbody>
         {passengers.map((el, i) => 
           <Row 
           key={el.id} 
           el={el} 
           changeRow={changeRow}
           i={i}
           />
         )}
      </tbody>
    </table>
    </div>
  );
}

export default App;
