/* eslint-disable react-hooks/rules-of-hooks */
import { 
    TextField,
    Button,
    FormGroup
} from "@mui/material";
import { useState } from "react";
import useForm from "../hooks/useForm";

const RegisterForm = () => {
    const [data, setData] = useForm({
        username: '',
        password: ''
    })
    const [error, setError] = useState<any>({
        usernameError: '',
        isError: false,
        passwordError: ''
    })
    
    const validate = () => {
        if(!data.username || !data.password) {
            setError({
                usernameError: 'Username cant be empty',
                isError: true,
                passwordError: 'Password cant be empty'
            })
            return false
        }
        return true
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const isValid = validate();
        if(isValid) {
           fetch(`${process.env.BASE_URL}/auth/register`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               mode: 'cors',
               body: JSON.stringify({
                   username: data.username,
                   password: data.password
               })
           })
           .then((res) => {
                res.json()
           })
           .then((data) => {
               console.log(data);
           })
           .catch((err) => {
               console.error(err)
           })
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <h3 style={{ marginBottom: '1rem' }}>Register</h3>
            <div style={{ fontSize: '12px', color: 'red' }}>
                    {error.usernameError}
            </div>
            <FormGroup>
                <TextField 
                    id="outlined-basic" 
                    name="username"
                    type="text"
                    value={data.username}
                    onChange={setData}
                    label="Username" 
                    variant="outlined" 
                    style={{ marginBottom: '1rem' }}
                />
            </FormGroup>
             <div style={{ fontSize: '12px', color: 'red' }}>
                    {error.passwordError}
            </div>
            <FormGroup>
                <TextField 
                    id="outlined-basic" 
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={setData}
                    label="Password" 
                    variant="outlined" 
                    style={{ marginBottom: '1rem' }}
                />
            </FormGroup>
            <Button variant="outlined" type="submit">Register</Button>
        </form>
    )
}

export default RegisterForm