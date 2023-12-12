import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './navbar'
import HomePage from './homepage'
import AllUsers from './allusers'

function App() {
  const [users, allUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async() => {
      const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      allUsers(data)
      console.log(data)
    }
    fetchUsers()
  }, [])

  return (
    <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage  />}/>
          <Route path='/users' element={<AllUsers allUsers={allUsers}/>}/>
        </Routes>
    </div>
  )
}

export default App
