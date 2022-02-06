import { createContext, useState, useContext, useEffect } from "react"

const passengersContext = createContext()

export function PassengersContextProvider({children}) {
  const [passengers, setPassengers] = useState([])
  const [visibleSave, setVisibleSave] = useState(false)
  const [checkedRows, setCheckedRows] = useState([])


  return (
    <passengersContext.Provider value={{ 
      passengers, setPassengers ,
      visibleSave, setVisibleSave,
      checkedRows, setCheckedRows,
      }}>
      {children}
    </passengersContext.Provider>
  )
}

export const usePassengersContext = () => useContext(passengersContext)
