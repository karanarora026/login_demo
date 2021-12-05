import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.scss";
import Axios from "axios";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameValid, setUsernameValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [statusResponse, setStatusResponse] = useState('');


    const validateForm = () => {
        return validateUsername(username) && validatePassword(password);
    }
    const validateUsername = (username: string) => {
        const isValidUsername = /[A-Za-z]/.test(username);
        setUsernameValid(isValidUsername);
        return isValidUsername;
    }

    const validatePassword = (password: string) => {
        // default password check - Minimum 2 characters,max 8 characters, only contain letters:
        const isPasswordValid = (2 < password.length && password.length < 10) && (/[A-Za-z]/.test(password));
        setPasswordValid(isPasswordValid);
        return isPasswordValid;
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const isFormValid = validateForm();
        let currentStatus = ''
        if (isFormValid) {
            currentStatus = await requestFromServer();
        }
        else {
            currentStatus = "Validation Failed"
        }
        setStatusResponse(currentStatus);
    }

    const requestFromServer = async () => {
        try {
            const response = await Axios.post('http://localhost:9000/api/login', { username: username, password });
            console.log(response)
            return (response.data as any).status;
        }
        catch (err: any) {
            return 'Failed';
        }
    }

    return (
        <div className="app-style">
            <Form className='form-style' onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label className="label-style">Username</Form.Label>
                    <Form.Control
                        className="input-style"
                        autoFocus
                        type="text"
                        value={username}
                        onChange={(e: any) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label className="label-style">Password</Form.Label>
                    <Form.Control
                        className="input-style"
                        type="password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button className='submit-style' type="submit" disabled={!usernameValid || !passwordValid}>
                    Login
                </Button>
                {statusResponse && <div className="status-style"> {statusResponse} </div>}

            </Form>
        </div>
    );
}
