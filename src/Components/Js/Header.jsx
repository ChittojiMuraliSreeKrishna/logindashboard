import '../Styles/Header.scss';
const Header = ({user, Logout}) => {
	return(
		<div className="Header">
			<div className="company-heading">
			<div className="Header-logo">
				<div className="Header-inner-logo">
					<div className="Header-text">R</div>
				</div>
			</div>
			<div className="company-name">
			<h3 className="subheading">EASY RETAIL</h3>
			<p className="miniheading">In-Store & Online</p>
			</div>
			</div>
			<div className="user-details">
			<h3 className="miniheading">Welcome: {user.userid}</h3>
			<button className="logout-btn" onClick={Logout}>Logout</button>
		</div>
		</div>
		)
}

export default Header;