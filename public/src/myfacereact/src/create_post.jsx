import React, { useState } from "react";
import './css/app.scss';
import './css/appBigScreen.scss'


export function MyCreatePostComponent() {
    const [imageUrl, setImageUrl] = useState('')
    const [message, setMessage] = useState('')

    function eventHandler(e) {
        e.preventDefault()

        fetch("http://localhost:3001/posts/create", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: message,
                imageUrl: imageUrl
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
        <body>
            <h2>Create Post</h2>
            <form class="form-elements" method="post" >
                <br />
                <label>
                    Image Url:
            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </label>
                <br />
                <br />
                <label>
                    Message:
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <br />
                <br />

                <button class="button" onClick={(e) => eventHandler(e)} type="submit">Create post</button>
            </form>
        </body>


    )
}