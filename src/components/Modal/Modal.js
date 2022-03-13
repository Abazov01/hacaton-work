import React from 'react';
import "./Modal.css"


export default function Modal({ show, setShow, children }) {
    return <div className={show ? "modal active" : "modal"} onClick={() => setShow(false)}>
        <div className={show ? "modal__content active" : "modal"} onClick={e => e.stopPropagation()}>

            {children}

        </div>
    </div>;
}