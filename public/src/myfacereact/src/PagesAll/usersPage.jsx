import React, { useState, useEffect } from "react";

import {GetUsers} from "./userList.jsx"



export function MyUserComponent() {
    const [myData, setMyData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/users")
        .then(response => response.json())
        .then(data => setMyData(data));
    }, []);

    if (!myData) {
        return <div> Waiting for data!</div>
    }
    return (
        <div>
            {
                myData.results.map(users => <GetUsers users={users} />)
                
            }
        </div>

    );
}