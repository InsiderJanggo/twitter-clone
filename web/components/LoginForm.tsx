import { 
    TextField,
    Button
} from "@mui/material";
import { useState } from "react";
import useForm from "../hooks/useForm";

const LoginForm = () => {
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
        e.preventDefault()
        const isValid = validate();
        if(isValid) {
           fetch(`${process.env.BASE_URL}/auth/login`, {
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
              localStorage.setItem('user', JSON.stringify(data))
           })
           .catch((err) => {
               console.error(err)
           })
        }
    }

    return(
        <form onSubmit={handleSubmit}>

        </form>
    )
}

export default LoginForm