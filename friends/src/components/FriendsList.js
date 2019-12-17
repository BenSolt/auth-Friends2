import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = () => {
  
const [friend,setFriend] = useState([]);


const deleteFriend = f => {
    axiosWithAuth()
      .delete(`/friends/${f.id}`)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };
    
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
        <div className='cardholder'>
        {friend.map(f => {
            return(
                <div className='card'>
                  <h2>NAME:</h2><h3>{f.name}</h3>
                  <h2>AGE:</h2><h3> {f.age}</h3>
                  <h2>EMAIL:</h2><h3> {f.email}</h3>
                  <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteFriend(f)
                    
                  }
                }>X</span>
                </div>
            )
        })}
         </div>
    </div>
  )
}

export default FriendsList;