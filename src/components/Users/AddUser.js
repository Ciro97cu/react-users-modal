import React, { useState, useRef } from "react"; // <-- importo React
import Card from "../UI/Card"; // <-- importo il componente Card
import Button from "../UI/Button/Button"; // <-- importo il componente Button
import ErrorModal from "../UI/ErrorModal"; // <-- importo il componente ErrorModal
import style from "./AddUser.module.css"; // <-- importo il file CSS

const AddUser = props => {

    const inputNameRef = useRef();
    const inputAgeRef = useRef();

    const [error, setError] = useState(); // <-- creo uno stato per gestire gli errori

    const addUserHandler = (event) => {
        event.preventDefault();
        let enteredName = inputNameRef.current.value;
        let enteredAge = inputAgeRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError(
                {
                    title: "Errore",
                    message: "Non hai inserito tutti i dati necessari",
                }
            );
        } else if (+enteredAge < 1) {
            setError(
                {
                    title: "Errore",
                    message: "L'età deve essere maggiore o uguale a 1",
                }
            );
        } else {
            props.onSaveUserData(
                {
                    id: Math.floor(Math.random() * 1000).toString(),
                    "enteredName": enteredName,
                    "enteredAge": enteredAge
                }
            );
            inputNameRef.current.value = "";
            inputAgeRef.current.value = "";
        }
    }

    const errorChangeHandler = () => {
        setError(false);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onHideModal={errorChangeHandler} />}
            <Card className={style.input}>
                <form onSubmit={addUserHandler} >
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" placeholder="Inserisci il nome"
                        ref={inputNameRef}
                    />
                    <label htmlFor="age">Età</label>
                    <input id="age" type="number" placeholder="Inserisci l'età"
                        ref={inputAgeRef}
                    />
                    <Button type="submit">Aggiungi Utente</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser;