import React, {Component} from 'react';
import { Redirect  } from "react-router-dom";

class LoginPage extends Component {

    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
            userid: '',
            password: '',
            loggedIn
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const { userid, password } = this.state
        if(userid !== "" && password !== ""){
            localStorage.setItem("token", "grsg4r5rhsh3h5dsf5b4d5")
            this.setState({
                loggedIn: true
            })
        }

    }

    render(){
        const {userid, password} = this.state
        if(this.state.loggedIn){
            return <Redirect to="/body" />
        }
	return(
			<div className="Login">
			<div className="Login-body">
				<div className="description">
					<div className="company-heading">
						<div className="logo">
						<div className="company-logo">
							<div className="brand">R</div>
						</div>
						</div>
						<div className="company-name">
							<h1 className="heading">easy retail</h1>
							<p className="sub-heading">
								In-Store & Online
							</p>
						</div>
					</div>
					<form className="languages">
						<input type="radio" />
						<label>Telugu</label>
						<input type="radio" />
						<label>English</label>
						<input type="radio" />
						<label>Hindi</label>
					</form>
					<div className="captions">
						<h2 className="heading light">Let's explore<br /> the world's best</h2>
						<hr />
						<h2 className="heading strong">Powerful Cloud Retail POS System</h2>
					</div>
				</div>
				<form className="Login-form" onSubmit={ this.submitHandler }>
					<h2 className="heading"><span className="block">Hey'</span> Login Now</h2>
                    <input type="number" 
                        className="Login-inputs" 
                        onChange={this.changeHandler}
                        id="userid"  placeholder="User Id" 
                        name="userid" value={userid} /> 
                    <input type="password" 
                        name="password" 
                        onChange={this.changeHandler}
                        className="Login-inputs" 
                        id="password" placeholder="Password" 
                        value={password} />
					<select className="Login-inputs">
						<option value="" disabled selected>Select Store</option>
						<option value="">Km Guntur</option>
						<option value="">Km Hyderabad</option>
						<option value="">Km Vizak</option>
					</select>
					<div className="rememberme-section">
						<input type="checkbox" name="rememberme" className="remember" />
						<label htmlFor="rememberme">Remember Me</label>
					</div>
          <button className="submit-button" >login</button>
          <a href="/" className="forget-password">Forget Password</a>
				</form>
			</div>
			<div className="Login-footer">
				<p className="copyright">c</p>
				<p>2021 OTSI - POS Portal | All rights reserved.</p>
			</div>
			</div>
    );
}
}

export default LoginPage
