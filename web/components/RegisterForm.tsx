import { 
    TextField,
    Button
} from "@mui/material";
import useForm from "../hooks/useForm";

const RegisterForm = ({ addUser }: any) => {
    const [data, setData] = useForm({
        username: '',
        password: ''
    })
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(e.target.value);
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