import { createContext, useState, useContext, useEffect } from "react"

const passengersContext = createContext()

export function PassengersContextProvider({children}) {
  const [passengers, setPassengers] = useState([])
  const [visibleSave, setVisibleSave] = useState(false)
  const [chosenRows, setChosenRows] = useState([])
  const handleSubmitChanges = () => {

  }



  return (
    <passengersContext.Provider value={{ 
      passengers, setPassengers ,
      visibleSave, setVisibleSave,
      handleSubmitChanges,
      chosenRows, setChosenRows,
      }}>
      {children}
    </passengersContext.Provider>
  )
}

export const usePassengersContext = () => useContext(passengersContext)
