import {Link} from 'react-router-dom';

const Header = () => {
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
        <Link className="function-btn" to={process.env.PUBLIC_URL + '/body/'} >Component</Link>
        <Link to={process.env.PUBLIC_URL + '/body/posts'} className="function-btn">Posts</Link>
          <a href={process.env.PUBLIC_URL + '/'} className="logout-btn">Logout</a>
		</div>
		</div>
		)
}

export default Header;
