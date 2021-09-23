import { 
    NextPage, 
    GetStaticProps, 
    GetStaticPaths
} from "next";
import { useRouter } from "next/router";
import Head from 'next/head'

export interface TweetI {
    content: string;
    posted_at: Date;
}

export interface Tweet {
    tweet: TweetI
}

const TweetPage: NextPage<Tweet> = ({tweet}) => {
    const router = useRouter()
    const { id } = router.query

    if(!id) return <span>Tweet Not Found</span>

    return(
        <>
           <Head>
               <title>{tweet.content} - Twitter Clone</title>
           </Head>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const res = await fetch(`${process.env.BASE_URL}/tweets`)
    const tweets = await res.json()

    const paths = tweets.map((tweet: any) => ({
        params: {
            id: tweet.post_id
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async({params}: any) => {
    const res = await  fetch(`${process.env.BASE_URL}/tweets/${params.id}`)
    const tweet = await res.json()

    return {
        props: {
            tweet
        }
    }
}

export default TweetPage