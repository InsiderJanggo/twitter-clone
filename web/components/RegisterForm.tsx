/* eslint-disable react-hooks/rules-of-hooks */
import { 
    TextField,
    Button
} from "@mui/material";
import useForm from "../hooks/useForm";
import usePost from "../hooks/usePost";

const RegisterForm = () => {
    const [data, setData] = useForm({
        username: '',
        password: ''
    })
    const handleSubmit = (e: any) => {
        e.preventDefault();
        usePost(`${process.env.BASE_URL}/auth/register`, {
            username: data.username,
            password: data.password
        }).then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err)
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <TextField 
            id="outlined-basic" 
            name="username"
            value={data.username}
            onChange={setData}
            label="Username" 
            variant="outlined" 
            />
            <Button variant="outlined" type="submit">Register</Button>
        </form>
    )
}

export default RegisterForm