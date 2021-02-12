import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './css/app.scss';
import './css/appBigScreen.scss'
export function GetPosts(props) {

    return (


        <div id='entire-post' class='entirepost' class='responsive'>

            <div id="NameAndDate">
                <p>

                    Posted by: {props.post.postedBy.name}
                </p>
                <p>
                    on: {props.post.createdAt}
                </p>
            </div>


            <div id='imageOnly' class='responsive'>
                <img class='responsive' src={props.post.imageUrl} />
            </div>


            <div id='textOfPost'>
                <p>
                    {props.post.message}
                </p>
            </div>

            <div id="like-and-dislike" class='responsive'>
                <div id="like" class='likeDislike'>
                    Likes so far:
         {props.post.likedBy.length}
                    <form method="post" Link to='/posts/${props.post.id}/like/'>
                        <button class="button" type="submit">Like</button>
                    </form>
                </div>
                <div id='dislike' class='likeDislike'>
                    dislikes so far:
          {props.post.dislikedBy.length}
                    <form method="post" action='/posts/${props.post.id}/dislike/'>
                        <button class="button" type="submit">Dislike</button>
                    </form>
                </div>

            </div>

        </div>

    )
}

