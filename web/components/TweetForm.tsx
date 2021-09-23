import { Button, FormGroup, TextField } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useForm from "../hooks/useForm";

const TweetForm = () => {
    const [data, setData] = useForm({
        content: ''
    })
    const [error, setError] = useState({
        tweetError: '',
        isError: false
    })

    const validate = () => {
        if(!data.content) {
            setError({
                isError: true,
                tweetError: 'Content cant be empty'
            })
            return false
        }

        return true
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const isValid = validate()
        if(isValid) {
            console.log(e.target.value);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
                 <div style={{ fontSize: '12px', color: 'red' }}>
                    {error.tweetError}
                </div>
                <FormGroup>
                        <TextField
                            id="outlined-textarea"
                            name="content"
                            value={data.content}
                            onChange={setData}
                            placeholder="Tweet"
                            multiline
                            style={{ marginBottom: '1rem' }}
                        />
                </FormGroup>
                <Button variant="outlined" type="submit" style={{ marginBottom: '1rem' }}>
                    <FontAwesomeIcon icon={faCoffee} size="lg" />
                </Button>
        </form>
    )
}

export default TweetForm