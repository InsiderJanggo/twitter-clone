import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Tweet from '../components/Tweet'
import TweetForm from '../components/TweetForm'
import styles from '../styles/Home.module.css'

interface Tweets {
    tweets: any[];
}

const Home: NextPage<Tweets> = ({tweets}: Tweets) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Twitter Clone
        </h1>


        <TweetForm />


        {tweets.map((tweet) => (
          <Tweet key={tweet.post_id} tweet={tweet} />
        ))}
      </main>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {
    const res = await fetch(`${process.env.BASE_URL}/tweets`)
    const tweets = await res.json()

    return {
      props: {
        tweets
      }
    }
}

export default Home
