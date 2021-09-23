import styles from './styles/Tweet.module.css'

interface TweetM {
    author: any;
    post_id: any;
    content: string;
    likes: number;
    posted_at: Date;
}

interface TweetI {
    tweet: TweetM
}

const Tweet = ({tweet}: TweetI) => {
    return(
        <div key={tweet.post_id}>
            <article role="article">
                <div>
                    <span>{tweet.author}</span>
                </div>
                    {tweet.content}
                    Posted At: {tweet.posted_at}
                    Like: {tweet.likes}
            </article>
        </div>
    )
}

export default Tweet