import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = () => {
  
const [friend,setFriend] = useState([]);
    
axiosWithAuth()
.get('/friends')
.then(res => {
    setFriend(res.data)
    console.log(res.data, 'friendslist')
})
.catch(err => {
    console.log(err)
})

if(friend === []) {
    return(
        <p>Loading friends...</p>
    )
}

return (
    <div>
        <h1>Friends List</h1>

        {friend.map(f => {
            return(
                <div>
                    <h3>{f.name}</h3>
                    <h3>{f.age}</h3>
                    <h3>{f.email}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default FriendsList;