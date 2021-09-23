import { useState } from "react";

const useForm = (initialstates: any) => {
    const [values, setValues] = useState<any>(initialstates)

    const handleChanges = (e: any) => {
        setValues({
            ...values,
            [e.currentTarget.name]: e.target.value
        })
    }

    return [values, handleChanges]
}

export default useForm;