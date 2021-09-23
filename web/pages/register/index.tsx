import { NextPage } from "next";
import Head from 'next/head'
import RegisterForm from "../../components/RegisterForm";

const Register: NextPage = () => {
    return(
        <>
            <Head>
                <title>Register - Twitter Clone</title>
            </Head>
            <RegisterForm />
        </>
    )
}

export default Register