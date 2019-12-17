import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';


class addFriend extends React.Component {
    state = {
        credentials: {
            name:'',
            age:'',
            email:''
        }
    }

handleChange = e => {
    this.setState({
        credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
        }
    });

};

addaFriend = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/friends', this.state.credentials)
    .then (res => {
        // localStorage.setItem('token', res.data.payload)
        this.props.history.push('/protected');
    })
    .catch(err => console.log(err))
}

render() {
    return (
        <div>
            <form onSubmit={this.addaFriend}>
                <input
                type='text'
                placeholder='add friends name'
                name='name'
                value={this.state.credentials.name}
                onChange={this.handleChange}
                />
                <input
                type='text'
                placeholder='add friends age'
                name='age'
                value={this.state.credentials.age}
                onChange={this.handleChange}
                />
                 <input
                type='text'
                placeholder='add friends email'
                name='email'
                value={this.state.credentials.email}
                onChange={this.handleChange}
                />
                <button>add Friend</button>
            </form>
        </div>
        )
    }
}

export default addFriend;