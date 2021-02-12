
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './css/app.scss';
import './css/appBigScreen.scss'
export function MyHeaderComponent(){

return(
<header class='header'>
    <nav class='header'>
        <Link class="headerLinks" to ="">MyFace</Link>
        <Link class="headerLinks" to="/home">Home</Link>
        <Link class="headerLinks" to="/posts">Posts</Link>
        <Link class="headerLinks" to="/users">Users</Link>
        <Link class="headerLinks" to='/posts/create'>Create Post</Link>
        <Link class="headerLinks" to='/user/create'>Create User</Link>
    </nav>
</header>
)
}