import React from 'react' // <-- importo React
import ReactDOM from 'react-dom' // <-- importo ReactDOM
import Card from './Card' // <-- importo il componente Card
import Button from './Button/Button' // <-- importo il componente Button
import style from './ErrorModal.module.css' // <-- importo il file CSS

const Backdrop = props => {
    return <div className={style.backdrop} onClick={props.onHideModal} />
};

const Overlay = props => {
    return (
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
    )
};

const ErrorModal = props => {

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onHideModal={props.onHideModal} />, document.getElementById('backdrop_root'))}
            {ReactDOM.createPortal(<Overlay title={props.title} message={props.title} onHideModal={props.onHideModal} />, document.getElementById('overlay_root'))}
        </>
    )
}

export default ErrorModal;