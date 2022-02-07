import { createContext, useState, useContext, useEffect } from "react"

const passengersContext = createContext()

export function PassengersContextProvider({children}) {
  const [passengers, setPassengers] = useState([])
  const [visibleSave, setVisibleSave] = useState(false)
  const [checkedRows, setCheckedRows] = useState([])
  const [moreIsShown, setMoreIsShown] = useState(false)
  return (
    <passengersContext.Provider value={{ 
      passengers, setPassengers ,
      visibleSave, setVisibleSave,
      checkedRows, setCheckedRows,
      moreIsShown, setMoreIsShown,
      }}>
      {children}
    </passengersContext.Provider>
  )
}

export const usePassengersContext = () => useContext(passengersContext)
