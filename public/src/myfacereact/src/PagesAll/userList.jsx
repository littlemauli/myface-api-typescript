


export function GetUsers(props) {

    return (
        <ol class="list">

            <li>
                {props.users.name}
                <a class="user-details" href="/users/{user.id}">More details about user here</a>
                <div id='imageOnly' class='responsive'>
                    <img class='responsive' src={props.users.profileImageUrl} />
                </div>
            </li>
        </ol>
    )
}