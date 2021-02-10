import React, { useState, useEffect } from "react";

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
            {
                myData.results.map(post => <GetPosts post={post} />)
                
            }
        </div>

    );
}