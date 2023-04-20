import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [users, setUsers] = useState([])
  const getData = async() => {
    const res = await axios.get('/api/users')
    setUsers(res.data)
  }

  useEffect(() => {
    getData()
  }, [])
 
  return (
    <div style={{textAlign:'center'}}>
      {users.map(u => <h4 key={u._id}>userName : {u.userName} { <br></br> }user : {u.firstName}</h4>)}
    
    </div>
  )
}

export default App