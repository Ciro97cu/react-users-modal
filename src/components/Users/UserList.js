import React from 'react' // <-- importo React
import Card from "../UI/Card" // <-- importo il componente Card
import style from './UserList.module.css' // <-- importo il file CSS

const UserList = props => {

    return (
        <Card className={style.users}>
            <ul>
                {props.userData.map((data) => <li key={data.id}>{`${data.enteredName}  (${data.enteredAge} anni)`}</li>)}
            </ul>
        </Card>
    )
}

export default UserList;