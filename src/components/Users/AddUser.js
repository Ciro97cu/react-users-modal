import React, { useState } from "react"; // <-- importo React
import Card from "../UI/Card"; // <-- importo il componente Card
import Button from "../UI/Button/Button"; // <-- importo il componente Button
import style from "./AddUser.module.css"; // <-- importo il file CSS

const AddUser = props => {

    const [userInput, setUserInput] = useState(
        {
            enteredName: "",
            enteredAge: "",
        }
    )

    const nameChangeHnadler = (event) => {
        setUserInput((prevDataUser) => {
            return {
                ...prevDataUser,
                enteredName: event.target.value,
            }
        })
    }

    const ageChangeHandler = (event) => {
        setUserInput((prevDataUser) => {
            return {
                ...prevDataUser,
                enteredAge: event.target.value,
            }
        })
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (userInput.enteredName.trim().length === 0 || userInput.enteredAge.trim().length === 0) {
            alert("compila i campi");
        } else if (+userInput.enteredAge < 1) {
            alert("inserisci un'età valida");
        } else {
            props.onSaveUserData(
                {
                    id: Math.floor(Math.random() * 1000),
                    ...userInput
                });
            setUserInput({
                enteredName: "",
                enteredAge: "",
            })
        }
    }

    return (
        <Card className={style.input}>
            <form onSubmit={addUserHandler} >
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" placeholder="Inserisci il nome"
                    value={userInput.enteredName} onChange={nameChangeHnadler}
                />
                <label htmlFor="age">Età</label>
                <input id="age" type="number" placeholder="Inserisci l'età"
                    value={userInput.enteredAge} onChange={ageChangeHandler}
                />
                <Button type="submit">Aggiungi Utente</Button>
            </form>
        </Card>
    )
}

export default AddUser;