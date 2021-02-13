import { name } from "ejs";
import React, { useState } from "react";
import './css/app.scss';
import './css/appBigScreen.scss'


export function MyCreateUserComponent() {
    const [realName, setRealName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [profileImageUrl, setProfileImageUrl] = useState('')
    const [coverImageUrl, setCoverImageUrl] = useState('')



    function handleRealNameChange(e) {
        setRealName(e.target.value)
    }

    function handleUserNameChange(e) {
        setUserName(e.target.value)
    }

    function HandleEmailChange(e) {
        setEmail(e.target.value)
    }

    function HandleProfileImageUrl(e) {
        setProfileImageUrl(e.target.value)
    }

    function HandleCoverImageUrl(e) {
        setCoverImageUrl(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault() //stop the form form sending in 'the form'way, we do a manual fetch

        fetch("http://localhost:3001/users/create", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: realName,
                username: userName,
                email: email,
                coverImageUrl: coverImageUrl,
                profileImageUrl: profileImageUrl
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
            <h2>Create User</h2>
            <form class="form-elements"  >
                <br />
                <label>
                    Name:
        <input type="text" placeholder='Name' value={realName} onChange={handleRealNameChange} />
                </label>
                <br />
                <br />
                <label>
                    Username:
        <input type="text" placeholder="username" value={userName} onChange={handleUserNameChange} />
                </label>
                <br />
                <br />
                <label>
                    Email:
        <input type="email" placeholder="email" value={email} onChange={HandleEmailChange} />
                </label>
                <br />
                <br />
                <label>
                    ProfileImageUrl:
        <input type="text" placeholder="profileImageUrl" value={profileImageUrl} onChange={HandleProfileImageUrl} />
                </label>
                <br />
                <br />
                <label>
                    CoverImageUrl:
        <input type="text" placeholder="coverImageUrl" value={coverImageUrl} onChange={HandleCoverImageUrl} />
                </label>
                <br />
                <br />
                <button class="button" onClick={(e) => handleSubmit(e)} type="submit">Submit</button>
            </form>
        </body>

    );
}