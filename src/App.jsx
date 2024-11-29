import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Chat from './Screens/Chat'
import Login from './Screens/Login'


function App() {

  return (
    <>
      <Routes>
        <Route 
          path='/' 
          element={<Login/>}>
        </Route>
        <Route 
          path='/chat' 
          element={<Chat/>}>
        </Route>
        <Route 
          path='/chat/:contact_id' 
          element={<Chat/>}>
        </Route>
      </Routes>
    </>
  )
}

export default App
