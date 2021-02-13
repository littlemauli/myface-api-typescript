import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './css/app.scss';
import './css/appBigScreen.scss'
export function GetPosts(props) {

    function eventHandler1(e) {
        e.preventDefault()

        fetch(`http://localhost:3001/${props.post.id}/like/`, {
            method: 'POST',
        
        })
           
            .then(function (Response) {
                console.log(Response.status===200?"success":"it got wrong");
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function eventHandler2(e) {
        e.preventDefault()

        fetch(`http://localhost:3001/posts/${props.post.id}/dislike/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
            })
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonResponse) {
                console.log(jsonResponse);
            })
            .catch(function (error) {
                console.log(error);
            })
    }



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
                    <form method="post" >
                        <button class="button" onClick={(e) => eventHandler1(e)}type="submit">Like</button>
                    </form>
                </div>
                <div id='dislike' class='likeDislike'>
                    dislikes so far:
          {props.post.dislikedBy.length}
                    <form method="post" action='/posts/${props.post.id}/dislike/'>
                        <button class="button" onClick={(e) => eventHandler2(e)} type="submit">Dislike</button>
                    </form>
                </div>

            </div>

        </div>

    )
}

