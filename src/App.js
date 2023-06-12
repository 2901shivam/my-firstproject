import logo from './logo.svg';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import { useState } from 'react';


function App() {
  const[usersList,setUsersList]=useState([])

  const addUsersHnadler=(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,age:uAge, id:Math.random().toString()}];
    })

  }

  return (
    <div>
    <AddUser onAddUser={addUsersHnadler}/>
    <UsersList users={usersList} />
    </div>
  );
}

export default App;
