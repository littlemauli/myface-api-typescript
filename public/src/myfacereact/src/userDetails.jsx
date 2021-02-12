import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './css/app.scss';
import './css/appBigScreen.scss'



export function GetUserDetails() {
    const { id } = useParams();
    const [myData, setMyData] = useState(null);
    const dataUrl = `http://localhost:3001/users/${id}`;
    useEffect(() => {
        fetch(dataUrl)
            .then(response => response.json())
            .then(data => setMyData(data));
    }, []);
    if (!myData) {
        return <div> Waiting for data for user {id} from: {dataUrl}</div>
    }
    return (
        <div>
            <img classname='responsive' id='cover-image' src={myData.coverImageUrl} />
            <div id="overlay"></div>
            <div id="Pict-with-text">
                <div>
                    <img classname='responsive' id='profile-image' src={myData.profileImageUrl} />
                </div>
                <div>
                    <br />
                    <h2>
                        {myData.name}
                    </h2>
                    <p>
                        {myData.username}
                        <br />
                        {myData.email}
                    </p>
                </div>
            </div>
            <h2 id="before-post">
                {myData.name.match(/\w+\s/)}'s Posts
           </h2>
            <div id="all-posts-container">
                {myData.posts.map(element =>
                    <div id="one-entire-post">
                        <img classname="post-image" src={element.imageUrl} />
                        {myData.username}
                        <br />
                        {element.createdAt.match(/\w+\s/)}
                        {element.createdAt.match(/-\w+-/)}
                        {element.createdAt.match(/\w\w\w\w/)}
                        <br />
                        <br />
                        {element.message}
                    </div>
                )}
            </div>
        </div >
    );
}