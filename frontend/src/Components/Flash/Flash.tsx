import React, { useEffect, useState } from 'react';
import { Toast } from 'react-bootstrap';
import Bus from '../../Utils/Bus';
import "./Flash.css"

function Flash() {
    let [visibility, setVisibility] = useState(false);
    let [message, setMessage] = useState('');
    let [type, setType] = useState('');

    useEffect(() => {
        Bus.addListener('flash', ({ message, type }) => {
            setVisibility(true);
            setMessage(message);
            setType(type);
        });


    }, []);
    const toast = (
        <div className="d-flex justify-content-center">
            <Toast
                style={{
                    zIndex: "1111",
                    position: "fixed",
                    width: "100%",
                    marginTop: "0"
                }}
                className={`alert-${type}`}
                onClose={() => setVisibility(false)}
                show={visibility}
                delay={3000}
                autohide
            >
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </div>
    )
    return (
        visibility && toast
    )
}
export default Flash