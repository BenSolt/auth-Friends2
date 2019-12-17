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
            <h1>Add a Friend</h1>
            <div className='formholder'>
            <form className='form' onSubmit={this.addaFriend}>
                <input
                className='input'
                type='text'
                placeholder='add friends name'
                name='name'
                value={this.state.credentials.name}
                onChange={this.handleChange}
                />
                <input
                className='input'
                type='text'
                placeholder='add friends age'
                name='age'
                value={this.state.credentials.age}
                onChange={this.handleChange}
                />
                 <input
                 className='input'
                type='text'
                placeholder='add friends email'
                name='email'
                value={this.state.credentials.email}
                onChange={this.handleChange}
                />
                <button className='btn'>ADD FRIEND</button>
            </form>
            </div>
        </div>
        )
    }
}

export default addFriend;