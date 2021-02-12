
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './css/app.scss';
import './css/appBigScreen.scss'

export function GetUsers(props) {
   
    return (
        <ol className="list">

            <li>
                {props.users.name}
                < Link to = {{ pathname: `/identity/${props.users.id}`}}>More details about user here</Link>

                <div id='imageOnly' className='responsive'>
                    <img className='responsive' src={props.users.profileImageUrl} />
                </div>
            </li>
        </ol>
    )
}