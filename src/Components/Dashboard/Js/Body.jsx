import Header from './Header';
import Footer from './Footer';
import Component from './Component';
import '../Css/Body.css'
const Body = ({user, Logout}) => {
	return(
		<div className="Body">
			<Header user={user} Logout={Logout} />
			<Component />
			<Footer />
		</div>
	)
}

export default Body;