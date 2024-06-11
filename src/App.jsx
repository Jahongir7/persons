import { Route, Routes } from "react-router-dom"
import { Person } from "./Person"


function App() {

  return (
    <Routes>
      <Route path="/persons/:id" element={<Person />} />
    </Routes>
  )
}

export default App
