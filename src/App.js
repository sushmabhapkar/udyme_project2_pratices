import React,{useState,Fragment} from 'react';
import './App.css';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';

function App() {

  const[usersList,setUsersList]=useState([]);


  const addUsersHandler=(uName, uAge)=>
  {
         setUsersList((prevUserList)=>
         {
          return [...prevUserList,{ name : uName, age : uAge , id: Math.random().toString()}];
         });
  };

  return (
   
    <Fragment>
      <AddUser onAddUser={addUsersHandler}/>
      <UserList users={usersList}/>
    </Fragment>
  );
}

export default App;
