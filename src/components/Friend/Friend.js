import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const friendStyle = {
        border: "1px solid red",
        margin: "20px",
        padding: "15px",
        borderRadius: "10px"
    }
    const history = useHistory();
    const handelClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    return (
        <div style={friendStyle} onClick={() => handelClick(id)}>
            <h3>Name : {name}</h3>
            <p>Email: {email}</p>
            <p><small>ID: {id}</small></p>
            <Link to={`/friend/${id}`}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export default Friend;