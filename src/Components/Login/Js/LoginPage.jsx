import React, {useState} from 'react';
import '../Css/Login.css';

const LoginPage = ({ Login, error }) => {

	const [details, setDetails] = useState({userid: "", password: ""});

	const submitHandler = e => {
		e.preventDefault();

		Login(details);
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
				<form className="login-form" onSubmit={submitHandler }>
					<h2 className="heading"><span className="block">Hey'</span> Login Now</h2>
				{(error !== "") ? (<div className="error">{error}</div>) : ""}
					<input type="number" className="login-inputs" id="userid"  placeholder="User Id" onChange={e => setDetails({...details, userid: e.target.value})} value={details.userid} />
					<input type="password" className="login-inputs" id="password" placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
					<select className="login-inputs">
						<option value="" disabled selected>Select Store</option>
						<option value="">Km Guntur</option>
						<option value="">Km Hyderabad</option>
						<option value="">Km Vizak</option>
					</select>
					<div className="rememberme-section">
						<input type="checkbox" name="rememberme" className="remember" />
						<label htmlFor="rememberme">Remember Me</label>
					</div>
					<button type="submit" className="submit-button">login</button>
					<a href="#" className="forget-password">Forget Password</a>
				</form>
			</div>
			<div className="login-footer">
				<p className="copyright">c</p>
				<p>2021 OTSI - POS Portal | All rights reserved.</p>
			</div>
			</div>
		);
}

export default LoginPage