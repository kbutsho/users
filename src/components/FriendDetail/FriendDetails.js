import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {friendID} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendID}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[]);
    return (
        <div>
            <h1>Friend details id: {friendID}</h1>
            <h3>Name: {friend.name}</h3>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};
export default FriendDetails;