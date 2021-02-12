import React, { useState, useEffect } from "react";
import './css/app.scss';
import './css/appBigScreen.scss'

import {GetPosts} from "./postList.jsx"



export function MyPostComponent() {
    const [myData, setMyData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(response => response.json())
        .then(data => setMyData(data));
    }, []);

    if (!myData) {
        return <div> Waiting for data!</div>
    }
    return (
        <div>
            
                <br/>
                <h2>Posts</h2>
                {myData.results.map(post => <GetPosts post={post} />)}
                <br/>
            <button id="change-colour" class="button" onclick={ChangeBackgroundColour}>Change Colour</button>
             <br/>
            
        </div>

    );
};



    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color);
        return color;
    }



    function ChangeBackgroundColour() {
        console.log('i was clicked');
        const entirePost = document.getElementsByClassName('entirepost');
        console.log(entirePost);
        for (let i = 0; i < 11; i++) {
            entirePost[i].style.backgroundColor = this.getRandomColor()
        }
    }


