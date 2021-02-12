import { render } from "ejs";
import React, { useState, useEffect } from "react";
import './css/app.scss';
import './css/appBigScreen.scss'


export function MyCreateUserComponent() {


    return (
        <body>
            <h2>Create User</h2>
            <form class="form-elements" method="post" action="/users/create">
                <br />
                <label>
                    Name:
        <input type="text" name="name" required />
                </label>
                <br />
                <br />
                <label>
                    Username:
        <input type="text" name="username" requried />
                </label>
                <br />
                <br />
                <label>
                    Email:
        <input type="email" name="email" required />
                </label>
                <br />
                <br />
                <label>
                    ProfileImageUrl:
        <input type="text" name="profileImageUrl" required />
                </label>
                <br />
                <br />
                <label>
                    CoverImageUrl:
        <input type="text" name="coverImageUrl" required />
                </label>
                <br />
                <br />
                <button class="button" type="submit">Submit</button>
            </form>
        </body>

    );
}