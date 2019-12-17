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
        this.props.history.push('/protected');
    })
    .catch(err => console.log(err))
}

render() {
    return (
        <div>
        <form onSubmit={this.login}>
        
        
        </form>
        </div>
    
    )
}



}