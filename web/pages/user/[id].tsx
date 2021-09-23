import { 
    NextPage, 
    GetStaticProps, 
    GetStaticPaths
} from "next";
import { useRouter } from "next/router";
import Head from 'next/head'
import UserCard from "../../components/UserCard";

export interface UserModel {
    id: number;
    user_id: any;
    username: string;
    created_at: Date;
    updated_at?: Date;
}

export interface User {
    user: UserModel
}

const UserPage: NextPage<User> = ({user}: User) => {
    const router = useRouter();
    const { user_id } = router.query;

    if(!user_id) return <span>Not Found</span>

    return (
        <>
            <Head>
                <title>{user.username} - Twitter Clone</title>
            </Head>
            <UserCard user={user} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async() => {
    const res = await fetch(`${process.env.BASE_URL}/users`);
    const users = await res.json()

    const paths = users.map((user: any) => ({
        params: {
            user_id: user.id
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async({params}: any) => {
    const res = await fetch(`${process.env.BASE_URL}/users/${params.user_id}`)
    const user = await res.json()

    return {
        props: {
            user
        }
    }
}

export default UserPage