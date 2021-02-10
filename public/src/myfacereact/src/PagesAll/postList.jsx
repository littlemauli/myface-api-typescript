

 export function GetPosts(props){

    return(
<div class='entire-post' class='responsive'>

<div id="NameAndDate">
    <p>
        <br />
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
        <form method="post" action='/posts/{post.id}/like/'>
            <button class="button" type="submit">Like</button>
        </form>
    </div>
    <div id='dislike' class='likeDislike'>
        dislikes so far:
{props.post.dislikedBy.length}
        <form method="post" action='/posts/{post.id}/dislike/'>
            <button class="button" type="submit">Dislike</button>
        </form>
    </div>
</div>

</div>
    )
}

