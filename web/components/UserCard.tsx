import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export interface UserModel {
    id?: number;
    user_id: any;
    username: string;
    created_at: Date;
    updated_at?: Date;
}

export interface User {
    user: UserModel
}

const UserCard = ({user}: User) => {
    return (
        <Card key={user.user_id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.username}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    @{user.username.toLocaleLowerCase()}
                </Typography>
              <Typography variant="body2" color="text.secondary">
                Created At: {user.created_at}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default UserCard