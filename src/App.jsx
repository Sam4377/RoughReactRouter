import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './navbar'
import HomePage from './homepage'
import AllUsers from './allusers'
import AllPosts from './posts'
import SingleUser from './singleuser'

function App() {
  const [users, allUsers] = useState([])
  const [posts, allPosts] = useState([])

  useEffect(() => {
    const fetchUsers = async() => {
      const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      allUsers(data)
      console.log(data)
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    const fetchPosts = async() => {
      const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts')
      allPosts(data)
      console.log(data)
    }
    fetchPosts()
  }, [])

  return (
    <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage  />}/>
          <Route path='/users' element={<AllUsers allUsers={users}/>}/>
          <Route path='/posts' element={<AllPosts allPosts={posts}/>}/>
          <Route path='/users:id' element={<SingleUser allUsers={users}/>}/>
        </Routes>
    </div>
  )
}

export default App
