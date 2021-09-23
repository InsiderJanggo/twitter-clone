import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


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
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Posted By: {tweet.author}
                </Typography>
                
                <Typography variant="h5" component="div">
                {tweet.content}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Likes: {tweet.likes}
                </Typography>
                
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Posted At: {tweet.posted_at}
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
    </Card>
    )
}

export default Tweet