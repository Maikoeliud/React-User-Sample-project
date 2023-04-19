import React, {useState}from 'react'
import Card from '../UI/Card'
import Button from "../UI/Button";
import classes from './AddUser.module.css'

export default function AddUser (props) {
    const [userEnteredName, setEnteredUserName] = useState('')
    const [ageEntered, setEnteredAge] = useState('')
    const addUserHandler = (event) =>{
        event.preventDefault()
        if (userEnteredName.trim().length === 0 || ageEntered.trim().length === 0){
            return;
        }
        if (+ageEntered < 1){
            return;
        }
        props.onAddUser(userEnteredName,ageEntered)
       setEnteredUserName('')
        setEnteredAge('')
        console.log(userEnteredName,ageEntered)
    }
    function usernameHandler(event) {
        setEnteredUserName(event.target.value)

    }
    function ageHandler(event){
        setEnteredAge(event.target.value)
    }
 return (
     <Card className={classes.input}>
         <form onSubmit={addUserHandler}>
             <label htmlFor='username'>Username</label>
             <input id='username' type='text' value={userEnteredName} onChange={usernameHandler}/>
             <label htmlFor='age'>Age (Years)</label>
             <input id='age' type='number'value={ageEntered} onChange={ageHandler}/>
             <Button type="submit">Add User</Button>

         </form>
     </Card>

 )
}