import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUsers.module.css";

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const enterUserref = useRef();
  const enteredAgeref = useRef();
  const enteredCollegeref = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = enterUserref.current.value;
    const enterduserAge = enteredAgeref.current.value;
    const enteredCollegeName = enteredCollegeref.current.value;
    if (enteredName.trim().length === 0 || enterduserAge.trim().length === 0) {
      return;
    }
    if (enterduserAge < 1) {
      return;
    }
    //prop.onAddUse(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enterduserAge, enteredCollegeName);
    // setEnteredUsername("");
    // setEnteredAge("");
    enterUserref.current.value='';
    enteredAgeref.current.value='';
    enteredCollegeref.current.value='';

  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          // value={enteredUsername}
          // onChange={usernameChangeHandler}
          ref={enterUserref}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          // value={enteredAge}
          // onChange={ageChangeHandler}
          ref={enteredAgeref}
        />
        <lable htmlFor="college">College Name</lable>
        <input id="collge" type="text" ref={enteredCollegeref} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
