import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginMagic = (e) => {
        e.preventDefault();
        this.props.history.push('/welcome')
    }

    render(){
        return (
            <div className="centered-container">
                <form onSubmit={e => this.loginMagic(e)}>
                    <input 
                        placeholder="Username"
                        name="username" 
                        type="text"
                        value={this.state.username}
                        onChange={ e => this.changeHandler(e)}
                    />
                    <input 
                        placeholder="Password"
                        name="password" 
                        type="password"
                        value={this.state.password}
                        onChange={ e => this.changeHandler(e)}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;