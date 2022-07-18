import React from 'react' // <-- importo React
import Card from './Card' // <-- importo il componente Card
import Button from './Button/Button' // <-- importo il componente Button
import style from './ErrorModal.module.css' // <-- importo il file CSS

const ErrorModal = props => {

    return (
        <div>
            <div className={style.backdrop}>
                <Card className={style.modal}>
                    <header className={style.header}>
                        <h2>
                            {props.title}
                        </h2>
                    </header>
                    <div className={style.content}>
                        <p>
                            {props.message}
                        </p>
                    </div>
                    <footer className={style.actions}>
                        <Button onClick={props.onHideModal}>OK</Button>
                    </footer>
                </Card>
            </div>
        </div>
    )
}

export default ErrorModal;