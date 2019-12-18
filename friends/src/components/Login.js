import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username:'',
            password:''
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

login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/login', this.state.credentials)
    .then (res => {
        localStorage.setItem('token', res.data.payload)
        this.props.history.push('/friends');
    })
    .catch(err => console.log(err))
}

render() {
    return (
        <div>
            <h1>LOGIN</h1>
            <div className='formholder'>
            <form className='form' onSubmit={this.login}>
                <input
                className='input'
                type='text'
                name='username'
                value={this.state.credentials.username}
                onChange={this.handleChange}
                />
                <input
                className='input'
                type='password'
                name='password'
                value={this.state.credentials.password}
                onChange={this.handleChange}
                />
                <button className='btn'>LOG IN </button>
            </form>
            </div>
        </div>
        )
    }
}

export default Login;