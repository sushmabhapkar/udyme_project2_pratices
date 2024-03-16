import React,{useState,useRef} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";
const AddUser=(props)=>
{

  const nameInputRef= useRef();
  const ageInputRef=useRef();
  const clgInputRef=useRef();

   
   
   const[error,setError]=useState('');

   


    const addUserHandler=(event)=>
    {
       event.preventDefault();
      const enteredName=nameInputRef.current.value;
      const enteredAge=ageInputRef.current.value;
      const enteredClgName=clgInputRef.current.value;
       
       if(enteredName.trim().length===0 ||enteredAge.trim().length===0 ||enteredClgName===0)
       {
         
         setError({
            title:'Invalid input',
            message:"please enter a valid name and age(non-empty value)."
         });

         return;
       }

       if(+enteredAge<1)
       {

         setError({
            title:'Invalid age',
            message:"please enter a  valid age(> 0)."

         });
         return;
       }
       //console.log(enteredUsername,enteredAge);
       props.onAddUser(enteredName, enteredAge,enteredClgName);
      nameInputRef.current.value='';
      ageInputRef.current.value='';
      clgInputRef.current.value='';
    };


const errorHandler= () =>
{
   setError(null);
};
   

return(
<Wrapper>
     {error && (
     <ErrorModal 
     title={error.title} 
     message={error.message} 
     onConfirm={errorHandler}
     />
     )}
   <Card className={classes.input}>
<form onSubmit={addUserHandler}>
   <label htmlFor="username">Username</label>
   <input id="username" type="text" ref={nameInputRef}/>

   <label htmlFor="userage">UserAge</label>
   <input id="userage" type="number" ref={ageInputRef}/>

   <label htmlFor="clgname">College Name</label>
   <input id="userclg" type="text"  ref={clgInputRef}/>

   <Button type="submit">Add User</Button>

</form>


</Card>
</Wrapper>
);
}
export default AddUser;